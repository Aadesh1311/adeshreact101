import React, { useEffect, useState } from 'react'
import { Select,Input,Button, styled } from '@chakra-ui/react'
import {
    Table,
    Thead,
    Tbody,
    Tfoot,
    Tr,
    Th,
    Td,
    TableCaption,
    TableContainer,
  } from '@chakra-ui/react'
import axios from 'axios'
const Cities = () => {
    const[limit,setLimit]=useState(0)
    const[page,setPage]=useState(1)
     const[country,setCountry]=useState([])
     const[citi,setCiti]=useState([])
     const[newCountry,setNewCountry]=useState(" ")
     const[citiName,setCitiName]=useState(" ")
     const[population,setPopulation]=useState(0)
     const[countryName,setCountryName]=useState(" ")

     const getData= async ()=>{
       let r=  await axios.get("http://localhost:8080/countries")
      
       setCountry(r.data)
         }

     useEffect(()=>{
         getData()
         },[])


     const getCiti= async ()=>{
         console.log(limit)
       let r=  await axios.get(`http://localhost:8080/cities?_page=${page}&_limit=${limit}`)
         setCiti(r.data)
              }
     
       useEffect(()=>{
         getCiti()
          },[page,limit])
          
    const postCountry=async ()=>{
        if(newCountry)
        {
        let r=await axios ({
            method:"POST",
            url:"http://localhost:8080/countries",
            data:{
            
                country:newCountry
            }
         })
        setCountry([...country,r.data])
        setNewCountry(" ")
    } }

    const postCiti=async ()=>{
        let r=await axios ({
            method:"POST",
            url:"http://localhost:8080/cities",
            data:{
                citiName:citiName,
                population:population,
                countryName:countryName
            }
        })
        setCiti([...citi,r.data])
        console.log(citi)
    }

     
  return (
    <div>
        <h1>Add Country</h1>
        <div>
            <input type="text"  value={newCountry} 
             onChange={(e)=>setNewCountry(e.target.value)}/>
            <Button onClick={postCountry}>Add</Button>
        </div>
        <h1>Add City Details</h1>
        <br/>
        
       <form onSubmit={postCiti}>
           <div>
               <label>Citi Name </label>
           <input placeholder="city name" type="text" value={citiName}  onChange={(e)=>setCitiName(e.target.value)} />
           </div><div>
           <label>Population  </label>
           <input  placeholder="population" type="number" value={population} onChange={(e)=>setPopulation(e.target.value)} />
           </div>
           <div>
           <label>Country</label>
           <Select value={countryName} onChange={(e)=>setCountryName(e.target.value)} bg="tomato" size="lg" >
           <option >{""}</option>
        {country.map((data)=>{
            return(
            <option value={data.country}> {data.country} </option>
             )
         })
        }
        </Select> 
        </div>
        <div>
            <button type='submit'>
                Submit
            </button>
        </div>
        </form>
        <br/>
        <h1>Show city details Here</h1>
        <br/>
        <h3>Limit</h3>
        <div>
            <Select value={limit} onChange={(e)=>{setLimit(e.target.value)}}>
                <option value={5}>5</option>
                <option value={10}>10</option>
                <option value={15}>15</option>
            </Select>
        </div>
      <div className='table'>
          
      <TableContainer>
  <Table variant='striped' colorScheme='teal'>
    
    <Thead>
      <Tr>
        <Th>Citi Name</Th>
        <Th>Population</Th>
        <Th >Country</Th>
      </Tr>
    </Thead>
    <Tbody>
{citi.map((data)=>{
                      return (
                          <Tr key={data.id}>
                          <Td>{data.citiName}</Td>
                          <Td>{data.population}</Td>
                          <Td>{data.countryName}</Td>
                              </Tr>
                      )
                  })}
    
      
    </Tbody>
    
  </Table>
</TableContainer>
</div>
<br/>
<br/>
<div>
    <button disabled= {(page==1 )? true: false} onClick={(e)=>{ 
        if(page>1){
        setPage(page-1)
    }}}
    
    >prev</button>
    <button disabled={(page<(Math.floor(citi.length/5)+2))? false:true}
     onClick={(e)=>{
        if(page<(Math.floor(citi.length/limit)+2)){
            setPage(page+1)}}}>Next</button>
    
</div>
</div>
  )
}

export default Cities