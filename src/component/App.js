import React, { Component } from 'react';
import './App.css';
import AddTask from './AddTask';
import TaskList from './TaskList';

let counter = 9;
class App extends Component {
  state = {
    tasks: [
      {
        id: 0,
        tekst: "Zadanie numer 1",
        date: "2019-04-03",
        active: true,
        important: false,
        finichDate: null
      }

    ]
  }

  deleteTask = (id) => {
    const tasks = [...this.state.tasks]
    const index = tasks.findIndex(task => task.id === id)
    tasks.splice(index, 1)
    this.setState({
      tasks
    })
  }

  taskDone = (id) => {
    const tasks = Array.from(this.state.tasks)
    tasks.forEach(task => {
      if(task.id === id){
        task.active = false;
        task.finichDate = new Date().getTime()
      }
    })
    this.setState({
      tasks
    })
 }

 handleAddTask = (props) => {
  //  if(props.text.length < 3) return alert("Za ma znakow")
  const task =  {
    id: counter + 1,
    tekst: props.text,
    date: props.date,
    active: true,
    important: props.checked,
    finishDate: null
}
counter++
const tasks = [...this.state.tasks,task]

this.setState({
  tasks
})

   return true
 }
  

  render() {
    return (
      <div className="App">
      <h2>TO DO APP</h2>
      <AddTask addTask={this.handleAddTask} tasks={this.state.tasks}/>
      <TaskList tasks={this.state.tasks} delete={this.deleteTask} done={this.taskDone}/>
      </div>
    );
  }
}

export default App;
