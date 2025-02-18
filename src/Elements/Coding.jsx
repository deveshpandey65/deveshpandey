import React from 'react'
import leetcode from '../assests/img/leetcode.png'
import gfg from '../assests/img/gfg.png'
import hackerrank from '../assests/img/hackerrank.png'
import './index.css'
export default function Coding() {
    const handleleetcode=()=>{
        window.location.href ="https://leetcode.com/u/user2264yt/"
    }
    const handlegfg = () => {
        window.location.href = "https://www.geeksforgeeks.org/user/deveshpa65/"

    }
    const handlehackerrank = () => {
        window.location.href = "https://www.hackerrank.com/profile/dp_devesh65"

          }
  return (
      <div className='project1'>
              <div onClick={handleleetcode} className="project1-item">
                  <img src={leetcode}/>
                  <div className="project1-info">
                      <p>Leetcode</p>
                  </div>
              </div>
          <div onClick={handlegfg} className="project1-item">
              <img src={gfg} />
              <div className="project1-info">
                  <p>GeeksForGeeks</p>
              </div>
          </div>
          <div onClick={handlehackerrank} className="project1-item">
              <img src={hackerrank} />
              <div className="project1-info">
                  <p>Hackerrank</p>
              </div>
          </div>
      </div>
  )
}
