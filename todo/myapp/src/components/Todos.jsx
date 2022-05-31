
import React , { useState , useEffect } from "react";
import { AddTodo } from "./AddTodo";
import { Todo } from "./Todo";



export const Todos = () => {
    const[todos,setTodos]=useState([]);
    const onAdd=(newTodo)=> {
        setTodos([
            ...todos,//rest operator
            {
                id:todos.length+1,
                value:newTodo,
                completed:false
            }
        ])
    };
    
  const getTodos= async()  =>  {
        try{
            let response=await fetch("http://localhost:3000/posts");
            let data = await response.json();
           console.log(data)
        }
        catch(e){
            console.log("error")
        }
   }
   useEffect(()=>{
    getTodos();
  },[])

 /* const getTodo=()=>{
    fetch("http://localhost:3000/posts").then(d => d.json()).then(res => {
      console.log(res);
    }).then(()=>{
      getTodo();
    })
  }
    */
    
    return (
        <div>
           <AddTodo onAdd={onAdd}/>
            
            {todos.map(todo=>(
                 <Todo key={todo.id} todo={todo}/>
            ))}
        </div>
    );
};