import React, { useEffect, useState } from 'react'
import axios from 'axios'
const Cities = () => {
     const[country,setCountry]=useState([])
     const[citi,setCiti]=useState([])
     const[newCountry,setNewCountry]=useState(" ")

     const getData= async ()=>{
       let r=  await axios.get("http://localhost:8080/countries")
       console.log(r.data)
       setCountry(r.data)
         }

     useEffect(()=>{
         getData()
         },[])
          
    const postCountry=async ()=>{
        let r=await axios ({
            method:"POST",
            url:"http://localhost:8080/countries",
            data:{
            
                country:newCountry
            }
        })
        setCountry([...country,r.data])
        console.log(country)
    }

     
  return (
    <div>
        <div>
            <input type="text"  value={newCountry} 
             onChange={(e)=>setNewCountry(e.target.value)}/>
            <button onClick={postCountry}>Add</button>
        </div>
       
       <select>
           <option>{""}</option>
        {country.map((data)=>{
            {console.log(data.country)}
            return(
            <option>{data.country}</option>
            )
         })
        }
        </select>
       
    </div>
  )
}

export default Cities