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
     <div className={`todoTask ${todo.completed? "completedTodo" : ""}`}>
  <div>
            <p>{todo.text}</p>
            <p> <span className='textTodo'>Prioridade: </span>  {todo.prior}</p> 
          </div>
          <div className="classButtons">
            <button className={`completeButton ${todo.completed? "completedButton" : ""} ${isEdit? "hidden" : ""}`} onClick={() => completeTodo(todo.id)} >Completar</button>
            <button className= {`removeButton ${todo.completed||isEdit? "hidden" : ""}`} onClick={() => removeTodo(todo.id)}>
            <XCircleIcon className="iconX" />
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
          <button onClick={handleSaveClick} className="editingButton">Salvar</button>
          <button onClick={handleCancelClick} className="editingButton">Cancelar</button>
        </div>
      ) : (
        <div>
          <button className={`editButton ${todo.completed? "hidden" : ""}`} id="editButton" onClick={handleEditClick}>
          <PencilSquareIcon className="iconPencil" />
          </button>
        </div>
      )}
          </div>
     </div>
  )
}

export default Todo