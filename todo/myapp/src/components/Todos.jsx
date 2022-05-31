
import React , { useState , useEffect } from "react";
import { AddTodo } from "./AddTodo";
import { Todo } from "./Todo";



export const Todos = () => {
    const[todos,setTodos]=useState([]);

    const[pageNumber,setpageNumber]=useState(1);

    const onAdd=(newTodo)=> {
        setTodos([...todos,newTodo]);
    };
    
    const onDelete=(id)=>{
      const newTodos=todos.filter(todo => todo.id !== id);
      setTodos(newTodos)
     };

     const onEdit=(updatedTodo)=>{
      const newTodos=todos.map((todo )=>{
        if(todo.id === updatedTodo.id) return updatedTodo
        else return todo;
      });
      setTodos(newTodos)
     }



    useEffect(()=>{
      const getTodos= async()  =>  {
        try{
            let response=await fetch(`http://localhost:3000/todos?_page=${pageNumber}`);
            console.log(response)
            let data = await response.json();
           console.log(data)
           setTodos(data)
        }
        catch(e){
            console.log("error")
        }
   };
   getTodos()
    },[pageNumber])
    
 
 

 /* const getTodo=()=>{
    fetch("http://localhost:3000/posts").then(d => d.json()).then(res => {
      console.log(res);
    }).then(()=>{
      getTodo();
    })
  }*/
    
    
    return (
        <div>
          {pageNumber}
           <AddTodo onAdd={onAdd}/>
            
            {todos.map(todo=>(
                 <Todo key={todo.id} todo={todo} onDelete={onDelete} onEdit={onEdit}/>
            ))}
            <div>
              <button onClick={()=> {
                if(pageNumber>1)
                setpageNumber(pageNumber-1)}}>Previous</button>
              <button onClick={()=>{
                if(pageNumber<(Math.floor(todos.length/10)+2)) 
                setpageNumber(pageNumber+1)}}>Next</button>
            </div>
        </div>
    );
};