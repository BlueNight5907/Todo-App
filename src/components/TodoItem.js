import React, { useState } from 'react';
import useTodo from '../customhooks/useTodo'
const TodoItem = (props) =>{
    const {todo, id} = props
    const {
        changeTodoState,
        deleteTodo
    } = useTodo();
    
    //Get todo object and id from props
    
    const handleCheckChange = (event)=>{
        changeTodoState(id)
        
    }
    const handleClick = ()=>{
        deleteTodo(id)
        
    }
    

    return(
        <li className="col-4 col-md-6 col-sm-12">
            <div href="#" className="todo-item box f-height box-hover ">
                <div className="todo-checkbox">
                    <input type="checkbox" checked = {todo.status?true:false} onChange={handleCheckChange}></input>
                    <span className="checkmark"><i className="bx bx-check"></i></span>
                </div>
                <div className="f-width todo-item-content">
                    <div className="todo-content">{todo.content}</div>
                    <div className="todo-type">Type: {todo.type}</div>
                </div>
                <button onClick={handleClick} type="button"><i className="bx bx-eraser"></i>Delete</button>
            </div>
        </li>
    )
}
export default TodoItem