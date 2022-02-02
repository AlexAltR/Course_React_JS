import React, { useState, useRef, useMemo, useEffect } from 'react';
import './../styles/App.css'
import MyModal from './../components/UI/MyModal/MyModal';
import MyButton from './../components/UI/button/MyButton';
import PostFilter from './../components/PostFilter';
import Pagination from './../components/UI/pagination/Pagination';
import {usePosts} from './../hooks/usePosts';
import {useFetching} from './../hooks/useFetching';
import {getPageCount} from './../utils/pages';
import PostService from './../API/PostService';
import Loader from './../components/UI/Loader/Loader';
import PostForm from './../components/PostForm';
import PostList from './../components/PostList';
import './../'



function Posts () {
  //Создаем состояния
  
  //const [value, setValue] = useState('Текст в инпуте')// Состояние для строки input

   const [posts, setPosts] = useState([])

   const [filter, setFilter] = useState({sort:'', query:''});
   
   //Состояние для модального окна
   const [modal, setModal] = useState();
   
   //Состояние для сортировки массива постов и поиска в нем
   const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query);

   // Состояние для общего количества постов
   const [totalPages, setTotalPages] = useState(0);

   // Состояние для лимита и для номера страницы в запросе к серверу
   const [limit, setLimit] = useState(10);
   const [page, setPage] = useState(1);


   // Вызываем хук для передачи в него события, при котором необходимо вызвать индикатор загрузки
   const [fetchPosts, isPostsLoading, postError] = useFetching ( async (limit, page) => {
      const response = await PostService.getAll(limit, page);
      setPosts(response.data)
      const totalCount = response.headers['x-total-count']
      setTotalPages(getPageCount(totalCount, limit))
   })

   // console.log(totalPages);

   useEffect( () => {
      fetchPosts(limit, page);
   }, [])


  const createPost = (newPost) => {
      setPosts([...posts, newPost])
      setModal(false)
  }
  
  const removePost = (post) => {
     setPosts(posts.filter(p => p.id !== post.id))
  }
  
   // Функция по смене страниц с постами. Пагинация
  const changePage = (page) => {
     setPage(page);
     fetchPosts(limit, page);
  }

  return (
    <div className = "App">
      {/* Кнопка для запроса на сервер */}
      <button onClick={fetchPosts}>GET POSTS</button>

      {/* Кнопка для вызова модального окна */}
      <MyButton style={{marginTop: '30px'}} onClick={() => setModal(true)}>
         Создать пост
      </MyButton>

      {/* Модальное окно */}
      <MyModal 
         visible={modal}
         setVisible={setModal}
      >
         {/* Форма создания модального окна */}
         <PostForm create = {createPost}/>
      </MyModal>

      <hr style={{margin: '15px 0'}}/>
      
      {/* Форма фильтра */}
      <PostFilter
         filter={filter}
         setFilter={setFilter}
      />
      {/* Сделаем проверку на ошибку загрузки постов */}
      {postError &&
         <h1>Произошла ошибка ${postError}</h1>
      }

      {/* Крутилка - загрузка постов при рендеренге страницы */}
      {
         isPostsLoading
            ? <div style={{display: 'flex', justifyContent: 'center', marginTop: '50px'}}><Loader/></div>
            // {/* Массив постов */}
            : <PostList remove = {removePost} posts = {sortedAndSearchedPosts} title = 'Посты про JS'/> 
      }
      {/* Добавляем компонент с кнопками */}
      <Pagination
         page={page}
         changePage={changePage}
         totalPages={totalPages}
      />
         
    </div>
  );
}

export default Posts;
