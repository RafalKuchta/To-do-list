import React from 'react';
import Task from './Task';

const TaskList = (props) => {
    const active = props.tasks.filter(task => task.active)
    const done = props.tasks.filter(task => !task.active)
    console.log(active, done)

    const tasksActive = active.map(task => <Task key={task.id} task={task} delete={props.delete} done={props.done}/>)

    const tasksDone = done.map(task => <Task key={task.id} task={task} delete={props.delete} done={props.done}/>)

    return ( 
        <div>
            <hr/>
            
            <h2>Zadania do zrobienia</h2>
            {tasksActive}
            <hr/>

            <h3>Zadania zrobione <em>({tasksDone.length})</em></h3>
            {tasksDone.length > 5 ? "Pokazuje tylko listę ostatnich 5-cu pozycji" : null}
            {tasksDone.slice(0, 5)}

        </div>
     );
}
 
export default TaskList;