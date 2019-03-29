import React, {Component} from 'react';

class AddTask extends Component {
    minDate = new Date().toISOString().slice(0,10)
    state = {
        text: '',
        date: this.minDate,
        checked: false,
        finishDate: this.minDate,
    }

    handleDate = e => {
        this.setState({
            date: e.target.value            
        })
    }

    handleClick = e => {
        if(this.state.text.length > 2){
        this.props.addTask(this.state) 

          this.setState({
            text: '',
            checked: false,
            date: this.minDate
        })
    } else{
        alert("Za krotka nazwa")
        console.log("Za krotka nazwa")
    }

    }

    handleInput = (e) => {
        this.setState({
           text: e.target.value            
        })
    }

    handleImportant = e =>{
        this.setState({
            checked: e.target.checked            
         })
    }
    render(){
        let maxDate = new Date().toISOString().slice(0,4) * 1 + 1;
        maxDate = maxDate+"-12-31";

    return ( 
        <div className="form">
            <input type="text" placeholder="dodaj zadanie" value={this.state.text} onChange={this.handleInput}/>
                        
            <input type="checkbox" id="important" checked={this.state.checked} onChange={this.handleImportant}/>
            <label htmlFor="important">Priorytet</label>
            <br/>
            <label htmlFor="date">Do kiedy zrobić</label>
            <input type="date" name="" id="date" value={this.state.date} min={this.minDate} max={maxDate} onChange={this.handleDate}/>
            <br/>
            <button className="addTask" onClick={this.handleClick}>Dodaj</button>
        </div>
     );}
}
 
export default AddTask;