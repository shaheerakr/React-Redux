import React from 'react'

const ShowTasks = ({todo,deleteTodo}) =>{
    //console.log(props.todo)
    const todoList = todo.length ? (
        todo.map(item =>{
            return(
                <div className="collection-item" key ={item.id} onClick={() => {deleteTodo(item.id)}}>
                    <span>{item.task}</span>
                </div>
            )
        })
    ) : (
        <p className="center">you have nothing todo</p>
        )
    return(
        <div className = "todos collection">
            {todoList}
        </div>
    )
}

export default ShowTasks