import React, {useState} from 'react';

const TodoForm = ({addTodo}) => {

  const [value, setValue] = useState("");
  const [category, setCategory] = useState("");
 

  /*---------------------------------------------------------------------------------------
    Esta função é chamada toda vez que um dos checkboxes de categoria é alterado.
    Ela é responsável por atualizar o estado da categoria (category).
    Se um checkbox é marcado, verifica se já há uma categoria selecionada.
    Se não houver, define a categoria selecionada como a categoria do checkbox.
    Se já houver uma categoria selecionada, emite um alerta informando ao usuário que
    apenas uma categoria pode ser selecionada e desmarca o checkbox.
     Se um checkbox é desmarcado, limpa o estado da categoria.
  */
  const handleCategoryChange = (e) => {
    const {value: categoryValue, checked} = e.target;
    if(checked){
        if(category === ""){
          setCategory(categoryValue);
        }else{
          alert("Selecione apenas uma categoria! Se deseja selecionar outra categoria, desmarque a atual!");
          e.target.checked = false;
    }
  }else{
    setCategory("");
  }
};


  /*
  Esta função é responsável por atualizar o estado do valor (value) toda vez
  que o usuário digitar algo no campo de entrada de texto. Ela é chamada pelo evento 
  onChange do input de texto.
  */
  const handleTaskChange = (e) => {
    setValue(e.target.value);
  };

  /*--------------------------------------------------------------------------------------
  Esta função é chamada quando o formulário é submetido. 
  Ela é responsável por lidar com o envio do formulário. 
  */
  const handleSubmit = (e) => {

    e.preventDefault();

    if(value === "" || category === ""){

      alert("Preencha os campos corretamente!");

    }else{
      
     // alert('Tarefa: ' + value + ' / ' + 'Categoria: ' + category);
     addTodo(value, category);
      setValue("");
      setCategory("");      
    }
  }
  /*-------------------------------------------------------------------------------------*/


  return (
    <div className='todo-form'>
        <h2 className='todo-form-header'>
            Criar nova tarefa
        </h2>
        <form onSubmit={handleSubmit}>
            <input className='new-task' value={value} type="text" onChange={handleTaskChange} placeholder='Digite o título da tarefa'/>
            <small>Escolha abaixo a  categoria</small>
            <div className='checkboxes-categories'> 
                <input type="checkbox" id="compras"  name="category" checked={category === "Compras"} onChange={handleCategoryChange}   value="Compras"/>
                <label for="compras"> Compras</label>
                <input type="checkbox" id="trabalho"  name="category" checked={category === "Trabalho"} onChange={handleCategoryChange}  value="Trabalho"/>
                <label for="trabalho"> Trabalho</label>
                <input type="checkbox" id="estudos"  name="category" checked={category === "Estudos"} onChange={handleCategoryChange}   value="Estudos"/>
                <label for="estudos"> Estudos</label>
                <input type="checkbox" id="pessoal"   name="category" checked={category === "Pessoal"} onChange={handleCategoryChange}   value="Pessoal"/>
                <label for="pessoal"> Pessoal</label>
            </div>
            <button className='btn-add' title='Adicionar nova tarefa' type='submit'>Criar tarefa</button>
        </form>
    </div>
  )
};

export default TodoForm;
