import React from "react";

export default function Button(props) {
  return <button 
  onClick={()=>{props.clickBtn(props.value)}}
  className={props.class}>{props.value}</button>;
}
