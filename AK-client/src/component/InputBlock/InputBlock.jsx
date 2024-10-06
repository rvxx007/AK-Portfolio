import { useState } from "react"

const InputBlock = (prop) => {
const { inputValue,setInputValue }= prop.onchange
  
const handleInputChange = (event) => {
  const { name , value} = event.target.value
    setInputValue((prev)=>{
      return {...prev, [name]: value}
    })
};


  
  return (
   <>
    <div className={prop.twDivClass}>
        <label className={prop.twLblClass} htmlFor={prop.IpObj.id}>{prop.IpObj.title}</label>
        <input  onChange={handleInputChange} className={prop.twInpClass} min={prop.IpObj.min} minLength={prop.IpObj.minLen} max={prop.IpObj.max} maxLength={prop.IpObj.maxLen} id={prop.IpObj.id} type={prop.IpObj.type} name={prop.IpObj.id} placeholder={prop.IpObj.placeholder} />
    </div>
   </>
  )
}

export default InputBlock