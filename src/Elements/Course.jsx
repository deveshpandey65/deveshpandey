import React from 'react'
import '../App.css'
export default function Course() {
    const Cources = [
        {
            name: 'NETWORK FUNDAMENTALS', sub: 'INFOSYS SPRINGBOARD', des: 'Acquired foundational knowledge of computer networks, protocols, and communication technologies Learned about network security concepts, protocols, and best practices to ensure secure data transmission'
        },
        {
            name: 'PYTHON PROGRAMMING', sub: 'INFOSYS SPRINGBOARD', des: 'Completed a comprehensive Python course through Infosys Springboard, covering both fundamental concepts and advanced topics Attained expertise in Python programming, mastering its syntax, data structures and algorithms'
        },
        {
            name: 'ETHICAL HACKING', sub: 'INTERNSHALA TRAININGS', des: 'Received training on Secure Code Development practices, emphasizing writing secure and robust code. Acquired knowledge and skills in Information Gathering techniques and the fundamentals of Web Development Received specialized training in Introduction to Web Vulnerability Assessment and Penetration Testing(VAPT) '
        }
    ]

  return (
      <div className='Courcework'>
          <div className='contactd'>
              <h1>Courcework </h1> </div>
          <div className='Courceworklower'>
              {Cources.map((res, idx) => (
                  <div className='Courceworkupper'>
                      <div className='linedesign '><div className='circle'> </div>
                          <div className='lineyellowbig'> </div> </div>
                      <div className='Courceworkblock' key={idx}>
                          <h1>{res.name}</h1>
                          <h3>{res.sub}</h3>
                          <p>{res.des}</p>
                      </div>
                  </div>
              ))}
          </div>
      </div>
  )
}
