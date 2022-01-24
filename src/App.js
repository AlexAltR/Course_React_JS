import React, { useState, useRef } from 'react';
// import ClassCounter from './components/ClassCounter';
// import Counter from './components/Counter';
// import PostItem from './components/PostItem';
import PostList from './components/PostList';
import MyButton from './components/UI/button/MyButton';
import MyInput from './components/UI/input/MyInput';
import './styles/App.css'

function App() {
  //Создаем состояния
  
  //const [value, setValue] = useState('Текст в инпуте')// Состояние для строки input

  const [posts, setPosts] = useState( [
    {id:1, title: 'JavaScript', body: 'Description'},
    {id:2, title: 'JavaScript 2', body: 'Description'},
    {id:3, title: 'JavaScript 3', body: 'Description'},
  ])
  //Получаем данные из управляемого инпута
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  
  
  //Функция для создания нового поста
  const addNewPost = (e) => {
     e.preventDefault();
      const newPost = {
         id: Date.now(),
         title,
         body
      }
      setPosts([...posts, newPost]);
      setTitle('');
      setBody('')
  }

  return (
    <div className = "App">
      
      <form>
        {/* Управляемый компонент */}
        <MyInput 
            value    = {title}
            onChange = {event => 
               setTitle(event.target.value)
            }
            type = "text"
            placeholder = 'Название поста'/>
         {/* Неуправляемый/Неконтролируемый компонент */}
          <MyInput  
            value    = {body}
            onChange = {event => 
               setBody(event.target.value)
            }
            type = "text" 
            placeholder = 'Описание поста'/>

          <MyButton onClick = {addNewPost}>Создать пост</MyButton>
      </form>
      <PostList posts = {posts} title = 'Посты про JS'/>
      




    </div>
  );
}

export default App;
