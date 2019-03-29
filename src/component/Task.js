import React from 'react';

const Task = (props) => {
    const color= {
        color: "red"
    }
    const {tekst, date, id, active, finichDate, important} = props.task
    if(active){
    return ( 
        <div>
            <p>
            {important ? <strong style={color}>{tekst}</strong> : <strong>{tekst}</strong>} - do {date} 
             <button onClick={()=>props.done(id)}>Zadanie zrobione</button>
             <button onClick={()=>props.delete(id)}>X</button>
            </p>
        </div>
     );
    } else {
        const time = new Date(finichDate).toLocaleString()
        return ( 
            <div>
                <p>
                 <strong>{tekst}</strong> <em>(zrobić do {date})</em> 
                <br/>
                - potwierdzenie wykonania {time}
                 <button onClick={()=>props.delete(id)}>X</button>
                </p>
            </div>
         );
    }
}
 
export default Task;