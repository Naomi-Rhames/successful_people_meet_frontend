import React, { useState } from 'react'


function Auth(props){
  const [signup, setSignup] = useState(false)
  const [email, setEmail] = useState("")
  const [phone_number, setPhoneNumber] = useState("")
  const [password, setPassword] = useState("")

  return (
    <form>
       <label>
         Email: 
         <input area-label="Enter your email" type="text" placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)}  />
       </label>
    </form>
  )
  
}

export default (Auth);