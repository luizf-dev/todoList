import React from 'react';

export const Todo = ({todo, completeTodo, deleteTodo}) => {
  return (
    <div className="todo" 
    style={
            {
              textDecoration: todo.isCompleted ? "line-through" : "",
              backgroundColor: todo.isCompleted ? "red" : ""
            }
          }>
        <div className="first-main">
            <div className="content">                
                <h4>{todo.text}</h4>
                <p>{todo.category}</p>             
            </div>
        </div>
        <div className="actions">
          <input type="checkbox"  onChange={() => completeTodo(todo.id)} checked={todo.isCompleted}  title='Completar a tarefa' />
          <button className='btn-del buttons' onClick={() => deleteTodo(todo.id)} title='Deletar tarefa'>X</button>
        </div>
    </div>
  )
}

export default Todo;
