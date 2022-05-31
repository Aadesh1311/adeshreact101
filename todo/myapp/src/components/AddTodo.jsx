import React, { useState } from "react";

export const AddTodo =({onAdd})=>{
    const [newTodo,setNewTodo]=useState("");
    const postTodo = async(data)=>{
        let response=await fetch("http://localhost:8080/todos/",{
          method:"POST",
          headers:{"content-type":"application/json"},
          body:JSON.stringify({
              value:data,
              completed:false,
          }),
        });
        let data1 = await response.json();
        onAdd(data1);
      }
    
    
    return(
        <div>
            <input 
            type="text"
             value={newTodo} 
             onChange={(e)=>setNewTodo(e.target.value)}/>
            <button
             onClick={()=> {
                 let value=newTodo.trim();
                 if(value){
                postTodo(value);
                 setNewTodo("");}

            }}>ADD</button>
        </div>
    );
};