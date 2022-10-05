import React, { useState } from 'react';



export const Addtodo = ({ addtodo,showAlertMessage }) => {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const sumbit = (e) => {
    e.preventDefault(e);
    if (!title || !desc) {
      showAlertMessage('Title or Description cannot be blank','danger')
    }
    else {
      showAlertMessage('ToDo Updated Successfully','success')
      addtodo(title, desc);
      setTitle("");
      setDesc("");
    }
  }
  return (
    <div className='container-fluid  w-75' >
      <form onSubmit={sumbit}>
        <h1 className='text-center fw-bold my-3'>Add Todo</h1>
        <div className="mb-3">
          <label className="form-label fw-bold">Todo Title</label>
          <input type="text" value={title} onChange={(e) => {
            setTitle(e.target.value)
          }} className="form-control" id="title" />
        </div>
        <div className="mb-3">
          <label className="form-label fw-bold">Todo Description</label>
          <input type="text" value={desc} onChange={(e) => {
            setDesc(e.target.value)
          }} className="form-control" id="desc" />
        </div>

        <button type="submit" className="btn btn-dark btn-sm" id='button'>Add Todo</button>
      </form>
    </div>
  )
}
