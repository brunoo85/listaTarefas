import React, { useState } from 'react';

import Todo from './components/Todo';
import TodoForm from './components/TodoForm';
import Search from './components/Search';
import Filter from './components/Filter';

const App = () => {
  const [todos, setTodos] = React.useState([]);

const priorityOrder = {
  Urgente: 1,
  Alta: 2,
  Média: 3,
  Baixa: 4,
};

const [search, setSearch] = React.useState("");
const [status, setStatus] = React.useState("All");
const [prior, setPrior] = React.useState("All");

const addTodo = (text, prior) =>{
  const newTodos = [...todos, {
    id: Math.floor(Math.random()*10000),
    text,
    prior,
    completa: false,
  },];

  setTodos(newTodos);
}

const removeTodo = (id) =>{
  const newTodos =[...todos];
  const filtroTodos = newTodos.filter((todo) => todo.id !== id ? todo : null);
  setTodos(filtroTodos);
}

const completeTodo = (id) =>{
  const newTodos =[...todos];
  newTodos.map((todo) => todo.id === id ? todo.completa = !todo.completa : todo);
  setTodos(newTodos);
}

const editTodo = (id, newText) => {
  const updatedTodo = todos.map(todo => 
    todo.id === id ? { ...todo, text: newText } : todo
  );
  setTodos(updatedTodo);
};

React.useEffect(() => {
  const todoSalve = JSON.parse(localStorage.getItem("todos")) || [];
  setTodos(todoSalve);
}, []);

React.useEffect(() => {
  localStorage.setItem("todos", JSON.stringify(todos));
}, [todos]);

  return <section className="app w-11/12 
  mt-0 mx-auto mb-73 
  bg-zinc-200 
  max-sm:w-full">

    <h1>Lista de tarefas</h1>
    <TodoForm addTodo={addTodo} />
    <Search search={search} setSearch={setSearch}/>
    <Filter status={status} setStatus={setStatus} prior={prior} setPrior={setPrior}/>
    <div className="todo-list">
      { todos
      .filter((todo) => status === "All" 
      ? true 
      : status === "Completed" 
      ? todo.completa: 
      !todo.completa)
      .sort((a, b) => priorityOrder[a.prior] - priorityOrder[b.prior])
      .filter((todo) => todo.text.toLowerCase().includes(search.toLowerCase())) //incluir pesquisa
      // .sort((a,b) => sort=== "Asc" ? a.text.localeCompare(b.text): b.text.localeCompare(a.text))
      .filter((todo) => prior === "All" 
      ? true 
      : prior === "Urgente" ? todo.prior === "Urgente"
      : prior === "Alta" ? todo.prior === "Alta"
      : prior === "Média" ? todo.prior === "Média"
      : todo.prior === "Baixa")
      .map((todo) =>(
       <Todo todo={todo} key={todo.id} removeTodo={removeTodo} completeTodo={completeTodo} editTodo={editTodo}/>
      ))}
    </div>
   
  </section>;

}
export default App;
