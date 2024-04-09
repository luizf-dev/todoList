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
     /* {
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
      }*/
  ]);

  //*função para adicionar uma nova tarefa
  const addTodo = (text, category) => {
    const newTodos = [...todos, {
      id: Math.floor(Math.random() * 10000),
      text,
      category,
      isCompleted: false,
    },
  ];

  setTodos(newTodos);
  }

  //*função para remover uma tarefa
  const deleteTodo = (id) => {
    const newTodos = [...todos];
    const filteredTodos = newTodos.filter(todo => todo.id !== id ? todo : null);
    setTodos(filteredTodos);
  }


  //*função para marcar uma tarefa como completa
  const completeTodo = (id) => {
    const newTodos = [...todos];
    newTodos.map((todo) => todo.id === id ? (todo.isCompleted = ! todo.isCompleted) : todo);
    setTodos(newTodos);
  }
  
  return (
    <div className='app'>
      <h1>Lista de Tarefas</h1>
      <div className="todo-list">
        {todos.map((todo) => (
          <Todo key={todo.id} todo={todo} completeTodo={completeTodo} deleteTodo={deleteTodo}/>         
        ))}
      </div>
      <TodoForm addTodo={addTodo} />
    </div>
  )
}

export default App
