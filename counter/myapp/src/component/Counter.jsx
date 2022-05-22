import {useState} from  "react"

const Counter =()=>{
    const [count,setCount]=useState(0)
    return(
        <div>
            
        <div> Counter :{count}</div>
        <button onClick={()=>{setCount(count+1)}}>Increment</button>
        <button onClick={()=>{setCount(count-1)}}>Decrement</button>
        <button onClick={()=>{setCount(count*2)}}>Double</button>
        </div>
    )
}

export default Counter;