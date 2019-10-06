import React, { Component } from 'react';

class AddTask extends Component{
    state ={
        task : ""
    }
    handleChange = (e) => {
        this.setState({
            task : e.target.value
        })
    }
    handleSubmit = (e) =>{
        e.preventDefault()
        this.props.addTask(this.state)
        this.setState({
            task : ""
        })
    }
    render(){
        return (
            <div>
                <form onSubmit = {this.handleSubmit}>
                    <label>Add new Task: </label> 
                    <input type="text" onChange ={this.handleChange} value={this.state.task}/>
                    <button className="btn waves-effect blue" type="submit" name="action">
                        Add Task
                    </button>
                </form>
            </div>
        )
    }
}

export default AddTask