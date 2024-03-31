import React from 'react';

export const Todo = ({todo}) => {
  return (
    <div className="todo">
        <div className="first-main">
            <div className="checkbox">
                <input type="checkbox"/>
            </div>
            <div className="content">
                <p>{todo.text}</p>             
            </div>
        </div>
        <div className="actions">
          <button className='btn-del buttons' title='Deletar tarefa'>X</button>
        </div>
    </div>
  )
}

export default Todo;
