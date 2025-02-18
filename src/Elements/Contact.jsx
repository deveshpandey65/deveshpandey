import React, { useState } from 'react'
import Nav from './Nav'
export default function Contact() {

  const [name, setname] = useState('')
  const [email, setemail] = useState('')
  const [message, setmessage] = useState('')
  const handleClick=()=>{
    window.location.href =`mailto:dp.devesh65@gmail.com,${email}?subject=portfolio contact ${email}&body=Your Send Message :${message}`
  }
  return (
    <>
    <div className="contact-form">
        <h2>Get in Touch</h2>
        <form onSubmit={handleClick}>
            <label for="name">Name:</label>
            <input type="text" value={name} onChange={(e)=>setname(e.target.value)} id="name" name="name" placeholder='Enter your name' required/>
            <br/>
            <label for="email">Email:</label>
          <input type="email" value={email} onChange={(e) => setemail(e.target.value)} id="email" name="email" placeholder='Enter your email' required/>
            <br/>
            <label for="message">Message:</label>
          <textarea id="message" value={message} onChange={(e) => setmessage(e.target.value)} name="message" placeholder='Enter your message' required/>
            <br/>
            <input type="submit" value="Send"/>
        </form>
    </div>
    </>
  )
}
