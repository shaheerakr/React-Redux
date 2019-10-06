import React, { Component } from 'react';
import ShowTasks from './showTasks'

class App extends Component {
  state = {
    todos : [
      {id : 0, task : "brush"},
      {id : 1, task : "Get bread"}
    ]
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
        <p className="center blue-text">Click on the tasks you want to remove</p>
      </div>
    );
}
}

export default App;
