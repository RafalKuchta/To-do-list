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
        tekst: "Zrobić Kurs",
        date: "2019-03-03",
        active: true,
        important: false,
        finichDate: null
      },
      {
        id: 1,
        tekst: "Zrobić Kurs 1",
        date: "2019-03-03",
        active: true,
        important: true,
        finichDate: null
      },
      {
        id: 2,
        tekst: "Zrobić Kurs 2",
        date: "2019-03-03",
        active: true,
        important: true,
        finichDate: null
      },
      {
        id: 3,
        tekst: "Zrobić Kurs 3",
        date: "2019-03-03",
        active: true,
        important: true,
        finichDate: null
      },
      {
        id: 4,
        tekst: "Zrobić Kurs 4",
        date: "2019-03-03",
        active: true,
        important: false,
        finichDate: null
      },
      {
        id: 5,
        tekst: "Zrobić Kurs 5",
        date: "2019-03-03",
        active: true,
        important: true,
        finichDate: null
      },
      {
        id: 6,
        tekst: "Zrobić Kurs 6",
        date: "2019-03-03",
        active: true,
        important: false,
        finichDate: null
      },
      {
        id: 7,
        tekst: "Zrobić Kurs 7",
        date: "2019-03-03",
        active: true,
        important: false,
        finichDate: null
      },
      {
        id: 8,
        tekst: "Zrobić Kurs 8",
        date: "2019-03-03",
        active: true,
        important: true,
        finichDate: null
      },
      {
        id: 9,
        tekst: "Zrobić Kurs 9",
        date: "2019-03-03",
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
