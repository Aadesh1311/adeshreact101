import React, { useEffect, useRef, useState } from 'react'

const Timer = () => {
    const [time,setTime]=useState(0);
    const timeRef=useRef(null);
    const handleStart=()=>{
     if(timeRef.current){
         return;
       }
        timeRef.current=setInterval(()=>{
            setTime((prev)=>prev+1);
        },1000)
    };

    const handleStop=()=>{
        if(timeRef.current){
            clearInterval(timeRef.current)
            timeRef.current=null;
        }
    };

    const handleReset=()=>{
        if(timeRef.current){
            clearInterval(timeRef.current)
            timeRef.current=null
            setTime(0)
        }

        

    };

    useEffect(()=>{

        //cleanup 
        return handleStop;
    },[]);
  return (
    <div>
        <h1>{time}</h1>
        <div>
            <button onClick={handleStart}>START</button>
            <button onClick={handleStop}>STOP</button>
            <button onClick={handleReset}>RESET</button>
        </div>
    </div>
  )
}

export default Timer