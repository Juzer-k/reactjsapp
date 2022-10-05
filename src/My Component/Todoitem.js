import React from 'react'

export const Todoitem = ({ todo, onDelete }) => {
  let cap=todo.title.toUpperCase()
  return (
    <div>
      <h3 className='fw-bold'>{todo.sno} . Title - {cap} </h3>
      <h5>Description  - {todo.desc}</h5><br />
      <button className="btn btn-danger btn-sm" onClick={() => { onDelete(todo) }}>Delete</button>
      <br /><hr/>
    </div>
  )
}

