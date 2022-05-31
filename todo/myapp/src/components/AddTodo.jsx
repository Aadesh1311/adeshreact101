import React, { useState } from "react";

export const AddTodo =({onAdd})=>{
    const [newTodo,setNewTodo]=useState("");
    
    
    return(
        <div>
            <input 
            type="text"
             value={newTodo} 
             onChange={(e)=>setNewTodo(e.target.value)}/>
            <button
             onClick={()=> {
                 if(newTodo.trim()){
                onAdd(newTodo.trim());
                 setNewTodo("");}

            }}>ADD</button>
        </div>
    );
};