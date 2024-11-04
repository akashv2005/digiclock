import React, { useState } from 'react'
import './clock.css';
const DigitalClock = () => {

    const currenttime = new Date().toLocaleTimeString();
    const [time,setTime] = useState(currenttime);
    const Update = ()=>{
        const currenttime = new Date().toLocaleTimeString();
        setTime(currenttime);
    }
    setInterval(()=>{
        Update()
    },1000)
  return (
    <div id="timer">
        <h1>{currenttime}</h1>
    </div>
  )
}

export default DigitalClock