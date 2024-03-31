import React from 'react';

export const TodoForm = () => {
  return (
    <div className='todo-form'>
        <h2 className='todo-form-header'>
            Criar nova tarefa
        </h2>
        <form action="">
            <input className='new-task' type="text" placeholder='Digite o título da tarefa'/>
            <small>Escolha abaixo a  categoria</small>
            <div className='checkboxes-categories'> 
                <input type="checkbox" id="compras" name="category" value="Compras"/>
                <label for="compras"> Compras</label>
                <input type="checkbox" id="trabalho"  name="category" value="Trabalho"/>
                <label for="trabalho"> Trabalho</label>
                <input type="checkbox" id="estudos"  name="category" value="Estudos"/>
                <label for="estudos"> Estudos</label>
                <input type="checkbox" id="pessoal"  name="category" value="Pessoal"/>
                <label for="pessoal"> Pessoal</label>
            </div>
            <button className='btn-add' title='Adicionar nova tarefa' type='submit'>Criar tarefa</button>
        </form>
    </div>
  )
};

export default TodoForm;
