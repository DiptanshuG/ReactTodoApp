import React,{ useState } from "react";
import data from "./data.json";
//components
import "./App.css";
import Header from "./Header";
import ToDoList from "./ToDoList";
import ToDoFrom from "./ToDoForm";
// import ToDo from "./ToDo";


function App() {
  const [toDoList, setToDoList] = useState(data);

  const handleToggle = (id) => {
    let mapped = toDoList.map(task => {
      return task.id === id ? { ...task, complete: !task.complete } : { ...task};
    });
    setToDoList(mapped);
  }

  const handleFilter = () => {
    let filtered = toDoList.filter(task => {
      return !task.complete;
    });
    setToDoList(filtered);
  }

  const addTask=(userInput)=>{
    let copy=[...toDoList];
    copy=[...copy,{id:toDoList.length+1,task:userInput,complete:false}];
    setToDoList(copy);
  }

  return (
    <div className="App">
      <Header />
      <ToDoList toDoList={toDoList} handleFilter={handleFilter} handleToggle={handleToggle}/>
      <ToDoFrom addTask={addTask} />
      
    </div>
  );
}

export default App;
