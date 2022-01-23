import React, { useState } from 'react';
import ClassCounter from './components/ClassCounter';
import Counter from './components/Counter';

function App() {
  //Создаем состояния
  
  const [value, setValue] = useState('Текст в инпуте')// Состояние для строки input


  return (
    <div className="App">
      <Counter/>
      <ClassCounter/> 
      {/* Классы устарели, сейчас используются функциональные компоненты и хуки */}

      <h1>{value}</h1>
      <input 
        type="text"
        value={value}
        onChange = {event => //Событие на изменение данных
          setValue(event.target.value)}// Извлекаем данные которые вносим в input и передаем их f setValue
       />
      
    </div>
  );
}

export default App;
