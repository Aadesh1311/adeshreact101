import React, { useEffect, useRef, useState } from 'react'


function convertHMS(value) {
    const sec = parseInt(value, 10); // convert value to number if it's string
    let hours   = Math.floor(sec / 3600); // get hours
    let minutes = Math.floor((sec - (hours * 3600)) / 60); // get minutes
    let seconds = sec - (hours * 3600) - (minutes * 60); //  get seconds
    // add 0 if value < 10; Example: 2 => 02
    if (hours   < 10) {hours   = "0"+hours;}
    if (minutes < 10) {minutes = "0"+minutes;}
    if (seconds < 10) {seconds = "0"+seconds;}
    return hours+':'+minutes+':'+seconds; // Return is HH : MM : SS
}


const Timer = () => {
    const [time,setTime]=useState(0);
    const timeRef=useRef(null);
    const handleStart=()=>{
     if(timeRef.current){
         return;
       }
        timeRef.current=setInterval(()=>{
            setTime((prev)=>prev+1);
        },100)
    };

    const handleStop=()=>{
        if(timeRef.current){
            clearInterval(timeRef.current)
            timeRef.current=null;
        }
    };

    const handleReset=()=>{
       
            clearInterval(timeRef.current)
            timeRef.current=null
            setTime(0)
        
    };
    const handleChange=(e)=>{
        console.log(e.target.value)
        setTime(+(e.target.value))

    }

    useEffect(()=>{

        //cleanup 
        return handleStop;
    },[]);
  return (
    <div>
        <h1>{convertHMS(time)}</h1>
        <input onChange={handleChange} type="number"/>
        <div>
            <button onClick={handleStart}>START</button>
            <button onClick={handleStop}>STOP</button>
            <button onClick={handleReset}>RESET</button>
        </div>
    </div>
  )
}

export default Timer