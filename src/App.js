
import React, { Component } from 'react';
import Overview from "./components/Overview";
import uniqid from "uniqid";



class App extends Component{
    constructor(){
        super();

        this.state = {
            task: {
            text: '',
            id: uniqid()
        },
            tasksArr:[],
        }

    }
    
    handleChange = (event) => {
        this.setState({
        task: {
        text:event.target.value,
        id:this.state.task.id,

    }
        });
    };
    onSubmit = (e) => {
        e.preventDefault();
    
        this.setState({
            tasksArr: this.state.tasksArr.concat(this.state.task),
            task: {text:' ',
        id:uniqid()
        },

          })
        }
    render(){
        const { task, tasksArr } = this.state;

        return(
          <div>
              <form onSubmit={this.onSubmit}>
              <label htmlFor="taskInput">Enter task</label>
              <input type="text" id="taskInput"onChange={this.handleChange}value={task.text}/>
              <button type="submit">Add task</button>
              </form>
              <Overview tasksArr = {tasksArr} />
              </div>
        );
    }
}
    export default App;
