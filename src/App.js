import React from 'react'
import { useState } from 'react'
import Header from './components/Header'
import Tasks from './components/Tasks'
import AddTask from './components/AddTask'
const App = () => {
  const [showAddTask, setShowAddTask] = useState(false)
  const [tasks, setTasks] = useState([
    {
        id : 1,
        text : 'Appointment',
        day: 'Feb 5 2021',
        reminder: true,
    },
    {
        id : 2,
        text : 'Birthday',
        day: 'March 1 2021',
        reminder: true,
    },
    {
        id : 3,
        text : 'Party',
        day: 'March 10 2021',
        reminder: false,
    }

])
//add task
const addTask = (task) => {
  const id = Math.floor(Math.random()*1000) + 1
  const newTask = { id, ...task}
  setTasks([...tasks, newTask])
}

//DElete task
 const deleteTask = (id) => {
   setTasks(tasks.filter((task)=> task.id !==id))
 }

 //toggle reminder
 const toggleReminder = (id) => {
  setTasks(tasks.map((task)=> task.id ===id  ? { ...task, reminder: !task.reminder } : task))
 }


  return (
    <div className="container">
      <Header onAdd={() =>setShowAddTask(!showAddTask)} showAdd={showAddTask}/>
      {showAddTask && <AddTask onAdd={addTask}/>} 
      {tasks.length > 0 ? <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder}/> : 'No task to show'}
    </div>
  );
  
}

export default App;
