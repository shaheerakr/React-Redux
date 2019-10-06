import React, { Component } from 'react';
import ShowTasks from './showTasks'
import AddTask from './addTask'

class App extends Component {
  state = {
    todos : [
      {id : 0, task : "brush"},
      {id : 1, task : "Get bread"}
    ]
  }
  addTask = (task) =>{
    //console.log(task)
    task.id = Math.random()
    let todos = [...this.state.todos,task]
    this.setState({
      todos
    })
  }
  deleteTodo = (id) =>{
    //window.alert("do you realy want to delete this item?")
    let todos = this.state.todos.filter(item => item.id !== id)
    this.setState({
      todos 
    })
  }
  render(){
    return (
      <div className="todo-app container">
        <h1 className="center blue-text">Todo's</h1>
        <ShowTasks todo = {this.state.todos} deleteTodo={this.deleteTodo}/>
        <AddTask addTask = {this.addTask}/>
        <p className="center blue-text">Click on the tasks you want to remove</p>
      </div>
    );
  }
}

export default App;
