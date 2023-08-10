// JSX kullanmak istemezsek createElement import etmemiz gerekiyor
import { createElement } from 'react';

import './style.scss'

const searchFunction = () => {
  alert('Tıklandı');
}

function App() {
  const todos = ['todo1', 'todo2', 'todo3'];

  // JSX kullanmazsak
  // const h1 = createElement('h1', null, 'prototürk')
  // const ul = createElement('ul', null, todos.map(todo => createElement('li', null, todo)));
  // return createElement('main', {
  //   className: 'test',
  //   id: 'main'
  // }, h1, ul)

  // JSX kullanırsak
  return (
    <main className='test' id='main'>
      {/* JSX inline css syntax */}
      <h1 style={{color: 'red', backgroundColor: 'yellow'}}>prototürk</h1>
      
      {/* JSX kullanırken for attr yerine htmlFor kullanıyoruz */}
      <label htmlFor='search'>Arama</label>
      <input type='text' id='search' onClick={searchFunction}></input>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>{todo}</li>
        ))}
      </ul>
    </main>
  );
}

export default App;
