// import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from 'react';
import Header from "./My Component/Header";
import { Todos } from "./My Component/Todos";
import { Footer } from "./My Component/Footer";
import { Addtodo } from "./My Component/Addtodo";
// import { About } from "./My Component/About";
import Alert from './My Component/Alert';   
import {
  BrowserRouter as Router,
  // Route,
  // Switch
} from "react-router-dom";



function App() {
// use for alert messages
const [alert, setAlert] = useState(null)

const showAlertMessage = (message, type)=>{
  setAlert ({
   message : message,
   type : type
  })
  //to dismiss alert in 1.5s
  setTimeout(() => {
    setAlert(null);
  }, 4000);
}

//to enablle dark theme
const [mode, setMode] = useState('light');
const enableTheme=()=>{
  if(mode==='light'){
    setMode('dark');
    document.body.style.backgroundColor='black';
    document.body.style.color='white';
    document.getElementById('button').style.backgroundColor='white';
    document.getElementById('button').style.color='black';
    showAlertMessage('Dark Theme Enable Successfully','success');
  }
  else{
    setMode('light');
    document.body.style.backgroundColor='white';
    document.body.style.color='black';
    document.getElementById('button').style.backgroundColor='black';
    document.getElementById('button').style.color='white';
    showAlertMessage('Light Theme Enable Successfully','success');
  }
}
// save todo list in local Storage
let initTodo;
if (localStorage.getItem("todos") === null) {
  initTodo = []
} else {
  initTodo = JSON.parse(localStorage.getItem("todos"))
}
//use state hook for saving todo
const [todos, setTodos] = useState(initTodo);
useEffect(() => {
  localStorage.setItem("todos", JSON.stringify(todos))
}, [todos]);

// adding new todo to todo list
  const addtodo = (title, desc) => {
    console.log("add this", title, desc)
    //for getting serial number 
    let sno;
    if (todos.length === 0) {
      sno = 1;
    }
    else {
      sno = todos[todos.length - 1].sno + 1;
    }
    //declare new variable for updating todo list
    const myTodo = {
      sno: sno,
      title: title,
      desc: desc,
    }
    setTodos([...todos, myTodo]);
    console.log(myTodo);
  }
  // function for delete todo
  const onDelete = (todo) => {
    showAlertMessage('ToDo Deleted Successfully ','success');
    console.log('todos deleted', todo);
    localStorage.clear();
    //logic for deleting todo
    setTodos(todos.filter((e) => {
      return e !== todo;
    }));
  }
  return (
    <>
    <Router>
      {/* navbar for todo app */}
      <Header title="ToDo App" mode={mode} enableTheme={enableTheme} />
      <Alert alert={alert}/>
      {/* <Switch>
          <Route exact path="/" render={()=>{
            return(
            <>
          </>)
          }}>
          </Route>
          <Route exact path="/about">
            <About />
          </Route>
      </Switch> */}

            <Addtodo addtodo={addtodo} mode={mode} showAlertMessage={showAlertMessage} />
            <Todos todos={todos} onDelete={onDelete} showAlertMessage={showAlertMessage} />
      
      <Footer />
      </Router>
    </>
  );
}

export default App;
