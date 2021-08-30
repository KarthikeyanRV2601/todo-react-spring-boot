import axios from 'axios';
import React, { useState } from 'react';
import deleteIcon from '../design/media/deleteIcon.png';
const Todo=({todoDescription,todoId,todos,setTodos})=>{

    const filterTodos=()=>{
        axios.delete(`http://localhost:8080/delete-todo-by-id/${todoId}`).then(response=>{
            setTodos(todos.filter(todo=>todo.id!=todoId));
        })
    }

    return(
        <div className="wrap">
            <li>{todoDescription}</li>
            <img src={deleteIcon}
            onClick={()=>{
                filterTodos();
            }}
            />
        </div>
        
    )
}
export default Todo;