import React, { useState } from 'react'
//import { submitSignup } from '../actions/actionCreators'

function Auth(props){
  //const [signup, setSignup] = useState(false)

  
  const [email, setEmail] = useState("")
  const [phone_number, setPhoneNumber] = useState("")
  const [password, setPassword] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log( email, phone_number, password )
  }

  return (
    <form onSubmit={handleSubmit}>
       <label>
         Sign Up <br></br>
         <input area-label="Enter your email" type="text" placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)}  /><br></br>
         <input area-label="Enter your phone number" type="tel" placeholder='123-456-7890' pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" value={phone_number} onChange={(e) => setPhoneNumber(e.target.value)}  /><br></br>
         <input area-aria-label='Enter your password' type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)}  /> <br></br>
         <button type="submit" value="Sign up" className="btn" >
           Sign up
         </button> 
       </label>
    </form>
  )
  
};

export default (Auth);