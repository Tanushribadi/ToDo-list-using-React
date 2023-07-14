import './App.css'
import React,{useState} from 'react'

function App() {
 const [newTask,setNewTask] = useState("");
 const [todoList,setTodoList] = useState([]);
 
 const handleTask = (event) => {
      setNewTask(event.target.value)
 }
 const addTask = () => {
 // setTodoList ([...todoList,newTask])
  const tanuTask = [...todoList,newTask]
  setTodoList(tanuTask)
 }

 const deleteTask = (taskName) => {
    const newTodoList = todoList.filter((task) => {
      if (task === taskName){
      return false;
      } else {
        return true;
      }
    })
    setTodoList(newTodoList)
 }
  return (
<>
 <div className="container">
  <div className="todo">
    <input className="text" placeholder="Enter the Names here" onChange={handleTask}/>
    <button className="button" onClick={addTask}>Add Names</button>
  </div>
 </div>
 
 <div className="list">
  {todoList.map((task) => {
    return (
    <>
    <h1>{task}</h1>
    <button className="remove" onClick={() => deleteTask(task)}> Delete</button>
    </>
    )
  })}
 </div>
</>
  )
  }
export default App;
