import React from 'react'
import { PencilSquareIcon, XCircleIcon} from '@heroicons/react/24/solid'

const Todo = ({todo, removeTodo, completeTodo, editTodo}) => {

const [isEdit, setIsEdit] = React.useState(false); 
const [newText, setNewText] = React.useState(todo.text);

const handleEditClick = () => {
  setIsEdit(true); 
};

const handleSaveClick = () => {
  if (newText.trim()) {
    editTodo(todo.id, newText); 
    setIsEdit(false);
  }
};

const handleCancelClick = () => {
  setNewText(todo.text); 
  setIsEdit(false); 
};

const editOut = (todo, newText) => {
  if (newText.trim()) {
    editTodo(todo.id, newText); 
    setIsEdit(false);
  }
};

const editEnter = (e, id, newText) => {
  if (e.key === 'Enter') {
    editTodo(id, newText); 
    setIsEdit(false);
    }
};

  return (
     <div className={`tarefa flex-wrap ${todo.completa? "line-through bg-red-600" : ""}`}>
  <div className="conteudo">
            <p>{todo.text}</p>
            <p className="prioridade"> <span className='font-medium'>Prioridade: </span>  {todo.prior}</p> 
          </div>
          <div className="flex flex-wrap gap-2">
            <button className='complete' onClick={() => completeTodo(todo.id)} >Completar</button>
            <button className= {`remove ${todo.completa? "hidden" : ""}`} onClick={() => removeTodo(todo.id)}>
            <XCircleIcon className="size-6 text-gray-50" />
            </button>


    {isEdit ? (
        <div>
          <input
            type="text"
            value={newText}
            onChange={(e) => setNewText(e.target.value)}
            onKeyDown={(e) => editEnter(e,todo.id, e.target.value)}
            onBlur={() => editOut(todo, newText)}
          />
          <button onClick={handleSaveClick}>Salvar</button>
          <button onClick={handleCancelClick}>Cancelar</button>
        </div>
      ) : (
        <div>
          <button className={`bg-sky-500 ${todo.completa? "hidden" : ""}`} id="editButton" onClick={handleEditClick}>
          <PencilSquareIcon className="size-6 text-gray-50" />
          </button>
        </div>
      )}
          </div>
     </div>
  )
}

export default Todo