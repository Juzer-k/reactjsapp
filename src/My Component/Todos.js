import React from 'react'
import { Todoitem } from "./Todoitem";// import todo item list


export const Todos = (props) => {
  return (
    <div className="container">
        <h1 className='text-center fw-bold my-4'>Todos</h1>
        
      {props.todos.lenght===0? "Nothing to Display":
      //use map function for deleting todo item
        props.todos.map((todo) => {
          return <Todoitem todo={todo} onDelete={props.onDelete} key={todo.sno}  />
          
        })
        }
</div>
  )
}
