import { useState } from 'react';
import Todo from './components/Todo';
import './css/App.css';
import './css/Buttons.css';
import './css/Form.css';
import TodoForm from './components/TodoForm';

function App() {
  //* essa constante guarda os dados estaticos para serem acessados
  //* como se estivessemos acessando uma api com dados de um banco de dados
  const [todos, setTodos] = useState([
      {
        id: 1,
        text: "Fazer compras de supermercado",
        category: "(Compras)",
        isCompleted: false
      },
      {
        id: 2,
        text: "Estudar para o exame de matemática",
        category: "(Estudos)",
        isCompleted: true
      },
      {
        id: 3,
        text: "Correr 5 km",
        category: "(Exercícios)",
        isCompleted: false
      },
      {
        id: 4,
        text: "Ligar para o cliente X",
        category: "(Trabalho)",
        isCompleted: false
      },
      {
        id: 5,
        text: "Arrumar o quarto",
        category: "(Casa)",
        isCompleted: true
      },
      {
        id: 6,
        text: "Preparar apresentação para reunião ",
        category: "(Trabalho)",
        isCompleted: false
      }
  ]);
  
  return (
    <div className='app'>
      <h1>Lista de Tarefas</h1>
      <div className="todo-list">
        {todos.map((todo) => (
          <Todo todo={todo}/>         
        ))}
      </div>
      <TodoForm />
    </div>
  )
}

export default App
