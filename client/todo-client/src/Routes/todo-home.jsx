import React, { useState,useEffect } from 'react';
import '../design/style.css';
import Todo from '../components/todo';
import axios from 'axios';
const Home=({u_id})=>{
    const [todos,setTodos]=useState([]);
    const [newTodo,setnewTodo]=useState('');
    const [user,setUser]=useState();
    useEffect(() => {
        const u_id=window.localStorage.getItem("u_id");
        if(u_id)
            setUser(u_id);
        else{
            window.location.href="/login"
        }
    }, [])
    useEffect(() => {
        if(user)
        {
            console.log(user);
            
            axios.get(`http://localhost:8080/get-todos/${user}`).then(response=>{
            setTodos(response.data);
        })
        }
    }, [user])
    
    const addTodo=(value)=>{
        
        let body= {
            "id":"1",
            "description":value
        }
        axios.post(`http://localhost:8080/add-todo/${user}`,body).then(response=>{
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
                        <Todo todoDescription={todo.description} todoId={todo.id} todos={todos} setTodos={setTodos} user={user}/>
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