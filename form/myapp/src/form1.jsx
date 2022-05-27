import React, { useState } from 'react'

const Form = () => {
    const[form ,setForm]=useState({})
    const handleOnChange=(e)=>{
        let {type,name,value,checked,files}=e.target
        
        setForm({
            ...form,
        [name]:value,
        })
        console.log(form.username,form.age)
    }
   /* Name
    Age
    Address
    Department ( select tag )
    Salary
    marital state ( check box )
    profile pgoto ( bonus to preview it on browser, bonus++ to upload it to imgur api )​*/

  return (
    <div>
        <form>
        <div>
          <label>Name: </label>
          <input 
          value={form.name}
          type="text"
          name="username" 
          placeholder='Enter name'
          onChange={handleOnChange} />
       </div>
       <div>
          <label>Age: </label>
          <input 
          value={form.age}
          type="number"
          name="age" 
          placeholder='Enter age'
          onChange={handleOnChange} />
       </div>
        
        
        </form>
    </div>
  )
}

export default Form