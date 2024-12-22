import React from 'react'

const TodoForm = ({addTodo}) => {
  const [value, setValue] = React.useState("");
  const [prioridade, setPrioridade] = React.useState("");

  const handleSubmit = (e) =>{
    e.preventDefault();
    if(!value || !prioridade) return;
    addTodo(value,prioridade);
   setPrioridade("");
   setValue("");
  }

  return (
    <div className='todo-form'>
      <h2>Criar tarefa:</h2>
      <form onSubmit={handleSubmit}>
          <input type="text" placeholder='Digite o título' value={value} onChange={(e) => setValue(e.target.value)} />
          <select value={prioridade} onChange={(e) => setPrioridade(e.target.value)}>
               <option disabled value="">Selecione a prioridade</option>
               <option value="Urgente">Urgente</option>
               <option value="Alta">Alta</option>
               <option value="Média">Média</option>
               <option value="Baixa">Baixa</option>
          </select>
          <button type="submit">Criar Tarefa</button>
      </form>
    </div>
  )
}

export default TodoForm;
