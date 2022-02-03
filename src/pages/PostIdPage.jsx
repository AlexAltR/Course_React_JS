import React from "react";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import { useFetching } from './../hooks/useFetching';
import PostService from './../API/PostService';
import { useState } from 'react/cjs/react.development';
import { useEffect } from "react";
import Loader from "../components/UI/Loader/Loader";

const PostIdPage = () => {
   const params = useParams();
   //Сосотояние измен адреса
   const [post, setPost] = useState({});
   // Запрос на получение id и body поста
   const [fetchPostById, isLoading, error] = useFetching(async (id) => {
      const response = await PostService.getById(id);
      setPost(response.data);
   })

   //Сосотояние измен комментария
   const [comments, setComments] = useState([]);
   // Запрос на получение комментария поста
   const [fetchComments, isComLoading, comError] = useFetching(async (id) => {
      const response = await PostService.getCommentsByPostId(id);
      setComments(response.data);
   })

   useEffect(() => {
      fetchPostById(params.id);
      fetchComments(params.id);
   }, [])

   return(
      <div>
         <h1>Вы открыли страницу поста с ID = {params.id}</h1>
         { isLoading
            ? <Loader/>
            : <div>{post.id}.{post.title}</div>
         }
         <h1>
            Комментарии:
         </h1>
         {isComLoading
            ?  <Loader/>
            : <div>
               {comments.map( comm => 
                  <div style={{marginTop: 15}}>
                     <h5>{comm.email}</h5>
                     <div>{comm.body}</div>
                  </div>
               )}   
            </div>
         }


      </div>
   );
};

export default PostIdPage;