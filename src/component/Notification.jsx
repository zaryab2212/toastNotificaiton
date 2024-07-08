import React from 'react'
import "./notificaiton.css"
import { IoIosCloseCircleOutline } from "react-icons/io";
import { MdOutlineErrorOutline } from "react-icons/md";
import { TiMessage } from "react-icons/ti";
import { IoWarningOutline } from "react-icons/io5";




const Notification = ({type,message,onClose}) => {
  return (
    <div className='notification' style={{...(type === "warning" && {backgroundColor:"yellow"}),...(type === "error" && {backgroundColor:"red"}),...(type === "message" && {backgroundColor:"blue"}) }}>

{type === "error" &&     <div>  <MdOutlineErrorOutline/> </div>
}
{type === "message" &&    <div>  <TiMessage/> </div>
}
{type === "warning" &&     <div>  <IoWarningOutline/> </div>
}
   
   
<div>        {message}
</div>      
<div onClick={onClose} ><IoIosCloseCircleOutline/></div>  
    </div>
  )
}

export default Notification