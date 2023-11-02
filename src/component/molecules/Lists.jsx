import React from 'react';
import { BiCheckCircle, BiEdit, BiTrash, BiSolidSend } from 'react-icons/bi'

const Lists = ({ todos, onDeleteHandler, onUpdateStatusHandler, onUpdateDataHandler, setUpdatedValue,onShowInputHandler,showInput}) => {  

  return (
    <div>
      {todos && (
        <ul>
          {todos.map(todo => (
            <div>
              <div className="flex flex-row bg-[#2A2A2A] w-full h-10 rounded-lg py[.2em] my-2 justify-between">
                <li key={todo.id}>
                  <label className='flex flex-row'>
                    <p className="text-lg flex my-2 mx-2 items-center ">
                      {todo.task}
                    </p>
                  </label>
                </li>
                <div className="flex items-center">
                  <button onClick={() => onUpdateStatusHandler(todo.id)}><BiCheckCircle className="mx-2 text-xl" /></button>
                  <button onClick={() => onShowInputHandler(todo.id)}><BiEdit className="mx-2 text-xl" /></button>
                  <button onClick={() => onDeleteHandler(todo.id)}><BiTrash className="mx-2 text-xl" /></button>
                </div>
              </div>
              {
                showInput[todo.id]? <div className=" z-40 flex flex-row bg-[#2A2A2A] w-full h-10 rounded-lg py-[.2em] mb-2 items-center">
                  <button type='submit' onClick={() => onUpdateDataHandler(todo.id)}><BiSolidSend className='mx-3' /></button>
                  <input onChange={(e) => setUpdatedValue(e.target.value)} className="bg-[#2A2A2A] w-full shadow-lg text-[#778BDD] placeholder-addTaskPlaceholder" placeholder="Edit a task" type="text" name="input" />
                </div> : null
              }
            </div>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Lists;