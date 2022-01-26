import React, { useState, useRef, useMemo } from 'react';
// import ClassCounter from './components/ClassCounter';
// import Counter from './components/Counter';
// import PostItem from './components/PostItem';
import PostList from './components/PostList';
// import MyButton from './components/UI/button/MyButton';
// import MyInput from './components/UI/input/MyInput';
import PostForm from './components/PostForm';
import './styles/App.css'
import MySelect from './components/UI/select/MySelect';
import MyInput from './components/UI/input/MyInput';
import PostFilter from './components/PostFilter';
import MyModal from './components/UI/MyModal/MyModal';
import MyButton from './components/UI/button/MyButton';

function App() {
  //Создаем состояния
  
  //const [value, setValue] = useState('Текст в инпуте')// Состояние для строки input

  const [posts, setPosts] = useState( [
    {id:1, title: 'аа', body: 'бб'},
    {id:2, title: 'ее 2', body: 'аа'},
    {id:3, title: 'вв 3', body: 'яя'},
  ])

const [filter, setFilter] = useState({sort:'', query:''})
//Состояние для модального окна
const [modal, setModal] = useState()



// Механизм фильтрации для поиска
// Функция для проверки строки поиска c помощью хука useMemo

const sortedPosts = useMemo( () => {
   if(filter.sort) {
      return [...posts].sort( (a, b) => a[filter.sort].localeCompare(b[filter.sort]));
   }
   return posts;
}, [filter.sort, posts])


// Функция для изменения массива posts на основе поиска c помощью хука useMemo
const sortedAndSearchedPosts = useMemo( () => {
   return sortedPosts.filter(post => post.title.toLowerCase().includes(filter.query))
}, [filter.query, sortedPosts])
 




  const createPost = (newPost) => {
      setPosts([...posts, newPost])
      setModal(false)
  }
  
  const removePost = (post) => {
     setPosts(posts.filter(p => p.id !== post.id))
  }
  

  return (
    <div className = "App">
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

      {/* Массив постов */}
      <PostList remove = {removePost} posts = {sortedAndSearchedPosts} title = 'Посты про JS'/>
         
    </div>
  );
}

export default App;
