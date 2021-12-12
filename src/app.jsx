import React from 'react';
import ReactDOM from 'react-dom';
import './app.css';
import {TodoCounter} from './components/TodoCounter.jsx';
import {TodoItem} from './components/TodoItem.jsx';
import {CreateTodoButton} from './components/CreateTodoButton.jsx';
import {TodoList} from './components/TodoList.jsx';
import {TodoSearch} from './components/TodoSearch.jsx'

const todos =[
  {text: 'Cortar cebolla', completed: false},
  {text: 'Tomar el curso de react', completed: false},
  {text: 'Llorar con la llorona', completed: false},
  {text: 'Agrego uno mas para probar', completed: false}
]

class App extends React.Component {	
  render() {
    return (
     <>
       <TodoCounter/> 
       <TodoSearch/> 
       
       <TodoList> 
         {todos.map(todo=>(
           <TodoItem key={todo.text} text={todo.text} /> 
         ))}
       </TodoList> 
       
       <CreateTodoButton/> 
     </>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
