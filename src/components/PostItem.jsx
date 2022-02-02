import React from "react";
import MyButton from "./UI/button/MyButton";
import {useNavigate, useLocation, useParams} from 'react-router-dom'

const PostItem = (props) => {
   const routerLocal = useLocation();
   // console.log(routerLocal);
   const routerNavig = useNavigate();
   // console.log(routerNavig);
   const routerParams = useParams();
   console.log(routerParams);

    return(
        <div className = "post">
        <div className = 'post__content'>
                <strong>{props.post.id}. {props.post.title}</strong>
                <div>
                    {props.post.body}
                </div>
                </div>
                <div className = 'post_btns'>
                  <MyButton onClick={() => routerParams}>Открыть</MyButton>  
                  <MyButton onClick={() => props.remove(props.post)}>Удалить</MyButton>
            </div>
        </div>
    )
    
    
}

export default PostItem;
