import React, { useState,useEffect } from 'react';
import '../design/style.css';
import Todo from '../components/todo';
import axios from 'axios';
const Home=()=>{
    const [todos,setTodos]=useState([]);
    const [newTodo,setnewTodo]=useState('');
    
    useEffect(() => {
        //get the todos from firebase here
    }, [])
    
    const addTodo=(value)=>{
        setTodos([...todos,value]);
        let body= {
            "id":1,
            "description":value
        }
        axios.post("http://localhost:8080/add-todo",body).then(response=>{
            console.log(response)
        })
    }

    return(
    <div className="home">
        <h1>todos</h1>
        <form id="form"

        onSubmit={e=>{
            e.preventDefault();
            addTodo(newTodo)
            setnewTodo('');
        }}

        >
        <input type="text" id="input" className="input" placeholder="Enter your todo" autocomplete="off"
        value={newTodo} 

        onChange={
            e=>{
                
                setnewTodo(e.target.value)
            }
        }

        />
        <ul className="todos" id="todos">
            {
                todos.map((todo,key)=>{
                    return(
                        <Todo todoDescription={todo}/>
                    )
                })
            }
        </ul>   
        </form>
        <small className="small">Left click on the todo to mark as complete. <br/> Right click on the todo to delete it.</small>
    </div>
    )
   
}

export default Home;