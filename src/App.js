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
  //Получаем данные из неуправляемого инпута
  const bodyInputRef = useRef();
  

  const addNewPost = (e) => {
      e.preventDefault()
      console.log(title)
      console.log(bodyInputRef.current.value)
  }

  return (
    <div className = "App">
      {/* <Counter/>
      <ClassCounter/>  */}
      {/* Классы устарели, сейчас используются функциональные компоненты и хуки */}

      {/* <h1>{value}</h1>
      <input 
        type     = "text"
        value    = {value}
        onChange = {event => //Событие на изменение данных
          setValue(event.target.value)}// Извлекаем данные которые вносим в input и передаем их f setValue
       /> */}
      
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
            ref={bodyInputRef}
            type = "text" 
            placeholder = 'Описание поста'/>

          <MyButton onClick = {addNewPost}>Создать пост</MyButton>
      </form>
      <PostList posts = {posts} title = 'Посты про JS'/>
      




    </div>
  );
}

export default App;
