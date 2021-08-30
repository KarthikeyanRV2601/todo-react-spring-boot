import React, { useState,useEffect } from 'react';
import '../design/style.css';
import Todo from '../components/todo';
import axios from 'axios';
const Home=()=>{
    const [todos,setTodos]=useState([]);
    const [newTodo,setnewTodo]=useState('');
    
    useEffect(() => {
        axios.get("http://localhost:8080/get-todos").then(response=>{
            setTodos(response.data);
        })
        //get the todos from firebase here
    }, [])
    
    const addTodo=(value)=>{
        
        let body= {
            "id":"1",
            "description":value
        }
        axios.post("http://localhost:8080/add-todo",body).then(response=>{
            setTodos([...todos,{
                "id":response.data,
                "description":value
            }])
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
            {todos&&
                todos.map((todo,key)=>{
                    return(
                        <Todo todoDescription={todo.description} todoId={todo.id} todos={todos} setTodos={setTodos}/>
                    )
                })

            }
           
        </ul>  
        {
                todos.length==0&&<h4>loading</h4>
            } 
        </form>
    </div>
    )
   
}

export default Home;