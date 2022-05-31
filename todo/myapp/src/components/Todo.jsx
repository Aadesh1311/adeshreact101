
import styles from "./todo.module.css";
import { AddTodo } from "./AddTodo";
import { Todos } from "./Todos";
import { useState } from "react";


export const Todo = ({ todo,onDelete,onEdit }) => {
    const[isEditable,setisEditable]=useState(false);
    const[value,setValue]=useState(todo.value)
    
    const deleteTodo=async ()=>{
        await fetch(`http://localhost:8080/todos/${todo.id}`,
        {
            method:"DELETE",
            headers:{"content-type":"application/json"}
        } );
        onDelete(todo.id)
         ;
    };

    const editTodo=async ()=>{
        let response=await fetch(`http://localhost:8080/todos/${todo.id}`,
        {
            method:"PATCH",
            headers:{"content-type":"application/json"},
            body:JSON.stringify({
                
                value,
                completed:true,
            })
        } );
        
        let data=await response.json()
        console.log(data);
        onEdit(data)
        
        
         
    };

    return(
    <div className={todo.completed ? styles.lineThrough: ""}>
        {isEditable ? (
             <div>
             <input type="text" value={value} onChange={(e)=>setValue(e.target.value)}/>
             <button onClick={()=> {let v=value.trim();
                  if(v){
                 editTodo(value);
                 setisEditable(false)
                  } }}>Update</button>
         </div>

        ):<div>{todo.value}</div>}
        
        <div>
        
        <button onClick={() => setisEditable(!isEditable)}>Edit</button>
        <button onClick={deleteTodo}>Delete</button>
        </div>
    
    </div>
    );
};