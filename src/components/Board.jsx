import React from "react";
import Button from "./Button";
import { useState } from "react";

export default function Board() {

  const button_values=[
    {value:'AC', class:'secondary'},
    {value:'C', class:'secondary'},
    {value:'/', class:'secondary'},
    {value:'*', class:'secondary'},
    {value:'7', class:'primary'},
    {value:'8', class:'primary'},
    {value:'9', class:'primary'},
    {value:'-', class:'secondary'},
    {value:'4', class:'primary'},
    {value:'5', class:'primary'},
    {value:'6', class:'primary'},
    {value:'+', class:'secondary'},
    {value:'1', class:'primary'},
    {value:'2', class:'primary'},
    {value:'3', class:'primary'},
    {value:'.', class:'primary'},
    {value:'0', class:'thirdly'},
    {value:'=', class:'thirdly'},
  ]


  const [userInput, setUserInput ] = useState("0");
  const [ isError,setError]=useState(false)



  const clickBtn=(btn_value)=>{
   
   setUserInput(userInput+btn_value)

   if(btn_value==='AC'){
     setUserInput('')
     setError(false)
     
   }
   else if(btn_value==='C'){
     let values=userInput
     let filteredValues=values.slice(0,-1)
    
     
    
     setUserInput(filteredValues)
     return
   }

   else if(btn_value==='='){
    
    showResult()
   }
  }


  const showResult=async ()=>{
   try{
    // eslint-disable-next-line 
    let result= await eval(userInput).toString()
    setUserInput(result)
   }

   catch(error){
    console.log(error)
    setError(error)
   }
  }





  return (
    <div className="Board">
      <div className="userInput">
        {isError? 'Error press AC' :<div>{userInput?userInput:0}</div>}
      </div>

      <div className='Buttons'>
         {button_values.map((item,index)=>{
            return <Button
            key={index}
             value={item.value}
             class={item.class}   
             clickBtn={clickBtn}
             />
         })}
      </div>
    </div>
  );

  }