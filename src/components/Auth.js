import React, { useState } from 'react'


function Auth(props) {

  const [signup, setSignup] = useState(false)
  const [email, setEmail] = useState("")
  const [phone_number, setPhoneNumber] = useState("")
  const [password, setPassword] = useState("")

  const handleSubmit = (e) => {
    console.log(e)

  }


  return (
    <form>
       <label>
         Email: 
         <input area-label="Enter your email" type="text" placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)}  />
       </label>
        <br/><label>
        Phone Number:
        <input area-label="Enter phone number" type="text" placeholder='Enter Phone Number' value={phone_number} onChange={(e) => setPhoneNumber(e.target.value)}/>
        </label>
       <br/> <label>
        Password:
         <input type="password" name="password" placeholder="Enter Password" value={password} onChange={(e) => setPassword(e.target.value)}/>
        </label>
       <br/> <button value={signup}> Submit</button>
    </form>
  )
  
}

export default (Auth);