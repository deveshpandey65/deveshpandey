import React from 'react'
import Nav from './Nav'

export default function Contact() {
  return (
    <>
    <div className="contact-form">
        <h2>Get in Touch</h2>
        <form>
            <label for="name">Name:</label>
            <input type="text" id="name" name="name" placeholder='Enter your name' required/>
            <br/>
            <label for="email">Email:</label>
            <input type="email" id="email" name="email" placeholder='Enter your email' required/>
            <br/>
            <label for="message">Message:</label>
            <textarea id="message" name="message" placeholder='Enter your message' required/>
            <br/>
            <input type="submit" value="Send"/>
        </form>
    </div>
    </>
  )
}
