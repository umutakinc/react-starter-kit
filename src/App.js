// JSX kullanmak istemezsek createElement import etmemiz gerekiyor
import { createElement } from 'react';

import './style.scss'

function App() {
  const todos = ['todo1', 'todo2', 'todo3'];

  // JSX kullanmazsak
  const h1 = createElement('h1', null, 'prototürk')
  const ul = createElement('ul', null, todos.map(todo => createElement('li', null, todo)));
  return createElement('main', {
    className: 'test',
    id: 'main'
  }, h1, ul)

  // JSX kullanırsak
  return (
    <main className='test' id='main'>
      <h1>prototürk</h1>
      <ul>
        {todos.map(todo => (
          <li>{todo}</li>
        ))}
      </ul>
    </main>
  );
}

export default App;
