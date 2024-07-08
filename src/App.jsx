import React, { useEffect, useState } from 'react'
import Notification from './component/Notification'

const App = () => {
  const [trigger,setTrigger] = useState({
    "type": "",
    "message": "",
    "position":"topRight"
  
  })

  useEffect(() => {
    let timer = setTimeout(() => {
      if (trigger.type || trigger.message) {
        setTrigger({ type: '', message: '' });
      }
    }, 3000);

    // Cleanup function to clear the timeout if the component unmounts or the effect runs again
    return () => clearTimeout(timer);
  }, [trigger]);


  return (
    <div>

      <button onClick={()=>setTrigger({"type": "success", "message": "Success is Trigerd"})} >Trigger Success</button>
      <button onClick={()=>setTrigger({"type": "error", "message": "error is Trigerd"})} >Trigger Error</button>
      <button onClick={()=>setTrigger({"type": "warning", "message": "waring is Trigerd"})} >Trigger warning</button>
      <button onClick={()=>setTrigger({"type": "message", "message": "message is Trigerd"})} >Trigger message</button>

    <div className='postio'>  <Notification type={trigger.type} message={trigger.message}/> </div>
    </div>
  )
}

export default App