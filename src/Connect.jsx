import React from 'react'
import './Elements/index.css'
export default function Connect() {
  return (
    <div style={{display:'flex', flexDirection:'column',justifyContent:'center'}}>

          <h1 style={{ alignSelf: 'center', fontFamily: 'cursive', margin: 0 }}>FIND ME ON</h1>
          <p style={{ alignSelf: 'center', fontFamily: 'cursive' }}>Feel free to <span style={{color:'blue'}}> connect</span> with me</p>
          <div className='connect'>
              <div className='logo'>
                  <a href='https://www.instagram.com/mahakalideva/'><img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHP2W0X8Bj9Wwou8Y5Iv2q_Aa-nME9SMwEAA&s' alt="" /> </a>
              </div>
              <div className='logo'>
                  <a href='https://github.com/deveshpandey65'><img src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADgAAAA4CAMAAACfWMssAAAAY1BMVEX///8AAAD6+vr39/fb29tERETg4ODAwMA1NTXk5OTHx8eNjY3q6upJSUnX19eysrJSUlLx8fHQ0NBubm5zc3OUlJQeHh46OjqCgoKioqK4uLgXFxdfX19nZ2cRERFaWlonJycuL3mMAAACK0lEQVRIiZ1X2aKrIAwk7qhV69Kq3fz/rzyoLEFAvHeeQDISyDggIQ6EtGrbioaucSvyIgaJuMivsdoODHStlzYvJm3FMp/PltlpK7KTWXs3bUXvoCWvcx7AK7HxUh9tRWry6is8gPo/eQYzv8oD0ORQXucBlIgoypdH09MefZsSsXuZ4g380WPtRDbJbXX48t5gJMornDwhHuu0orRK6zGGZ3TQh0j2LR5M4lXaxyQ7k4h77/1IZmQUyVWyPYUPGDPaIWeEz5aJ2gOXijnQroXaewDOiShwzQ25xOU1Qqxl+jnn4d1guSKVUh+RqtgWLbHx8Qhp0CJ71PZCzdKTn2xXfmIlg39E2aHVUHQkMniRkr+wN3h3vqiqkZ+oZA1oxn9a45c8ZPvc5DfMMvhBbrJd+ImFDL4hyWd+ojpaOuk3V+qhqsF8Bzn/6COOKjbFwtUc04I7CqUE1YOt+BRqH1k1tPmFfdnxQ4HrqirUh8y5QZF2xm9i2Z7EA39hb5Vsotv7sj2c+dwlX8NzyEvkyGGZD8erARfZdoR/ArwK9FEPYODFh/ZSMuEEYiTGaZrnlzzQdythdtzqqewwDmtlTryyiTyZNSXQI/GuxmYxJWtO9eHudj/wtHR2FdjNI9B5B0W/RbI+oiEuvkE5vQdl5CZaXPuNhgMX0Spm5QsQOogOd0l9ROdVOejOiF3g4jFEzbHEgtj4/Drp+UVJgX13/YWDhSn28M8Q2i7Vf7CYFbqBLkDhAAAAAElFTkSuQmCC' alt="" /> </a>
              </div>
              <div className='logo'>
                  <a href='https://www.linkedin.com/in/deveshpandey65/'><img src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADgAAAA4CAMAAACfWMssAAAAYFBMVEUAd7X///8Ac7NGlMRGk8QAdrUAbLAAbrDZ7PXV6fPy+fw9ir/p9Pkugbo0hr3D2umz0ORUnMh3q9C72eplocoIe7dsps6dxN6lyeCDs9TL4u+WwNzg7vVTmMYhg7uy1OcLxWtDAAABaklEQVRIie3W7Y6CMBAFUBxohwIK8qEIgu//lltou7TortNu9p83MRGSIzgzlEaHwETyU51jr5wrBWsODDzCgNcLrHjkHV5JOIE/hEnCOATGEiYhMHGgLBELgdi1lxlJ1IH8uvS17CjShtiriRCekM1mlm7oBaE2sCEMhA1vBg5+kCUG9n63GmGqXJYTqmNDlhcrrAkXdPsIx3FI+4TidpPDkHNOm7ndrP6U9TH/5VZxDewPsEvaS5t0CK8h9qXKSd4tq9T3EaC73rOl2EVp/X0bcqcddzMMU7YtbFuHHShsqH+lnJwlsUIqFIW7mLZAhPuYOfaGh5nR4fBotgLVQIWik+PE+11h38NCLUGmV+Ypfw9HdQU0j/lAhfr9AKafggizXHc81/VJibA4qvKzk4HE4nzgB/4jfLU8UiA26RqxQn0wfEOhTjTPMEIdZh9EOsw9QXzpPOdvMHgTGLztDN7oBm+twzfzYfkCChobmnKthiYAAAAASUVORK5CYII=' alt="" /> </a>
              </div>
              <div className='logo'>
                  <a href='https://leetcode.com/u/user2264yt/'><img src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADgAAAA4CAMAAACfWMssAAAAsVBMVEUAAAD/////oRa3t7ezs7OPj497e3v/qBf/pRf/oxYODg7y8vKBUwu2dBC9vb2tra3olBT/ngCFgn7wmBVTUEzt6+lDQ0MzMzPZ2dkgICD4+Pjh4eHKyspNQDL/r0v/pACMWQz/tFsvHgSlop7/u2xkQAn/xX32lwCXYQ3Apos5EgDHfxFyb2vRhRIiFgNiX1qoaw51SwpELAU9OjWLYSz/pzG/q5j/4rhrPQBUNgc7JQXGezjkAAABYElEQVRIie3VbVuCMBQGYDbDDUVAURM0LUl7k6T38v//sLYDmSJrO3yN59Pgum4HZ5yjZTVpok6nHjvvkkkdF8WEEBvvOl1SD46kG+HdVLou3k2kiyO0m0lHLtDOAzdfBJc454O76lPKgiXCJeCuhaPUcVbGzga3vgkpk5TdGroBuLt7sVyFXMoHI7cBlxRXqdyUB496twXn768zkKHWDcF5B3eeuCOe9lnjXsDNju7tQs6pbkPZSKc9mPV0hwkHP9X9ekVqNlJe0XG+7mzapYzV0D7YMGmV46ll8luZyDsrp9VWQvmxxcXaP91xqIRwioNiy4Fdylb9jvl8+qMIyrThw1E/kjqTKrk0aeXRqXQZ0zdHhXRFXzHXQMIgJvsSSkeZ0dw5krnrmbgf+SqXGcYVtV3305RylMvlmxipFOks6/1jDuOYOizDOMv6DBgXYekXzons3CxzMX8cTf5VvgHwXBMsAUg/8gAAAABJRU5ErkJggg==' alt="" /> </a>
              </div>
              <div className='logo'>
                  <a href='https://www.geeksforgeeks.org/user/deveshpa65/'><img src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAMAAABF0y+mAAAALVBMVEVHcEwujUUvjUYwi0QujUUvjUYvjUYujUUvjUUujUUvjUUvjUYujEUujUUvjUZimRHUAAAADnRSTlMADNYeufPka400e6VKXaau79UAAACrSURBVCiR3ZBZDgMhDEOHLITV9z9uQ6DqIs0BWn8gPQxxkuv6N6WU7mA0EbG6oS5o9fjcEaK5oGzItl0WlWaFoO76Q4dGWs7XOnidHZoGtAXMt9h4QzBC/7p9qkCg9jGE4EYWZqYtheINltnROeSZ3vKBQViTGfKI+kXBDjPSGnR1zQQqo5ooSoQ4zO4QbY/sSdnjFnrtDZ3P/prbkF0v+ayv7Z2Jrjv4GT0AJwcIG55/Qx4AAAAASUVORK5CYII=' alt="" /> </a>
              </div>
              <div className='logo'>
                  <a href='https://www.hackerrank.com/profile/dp_devesh65'><img src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAMAAABF0y+mAAAAYFBMVEUNFB4MFB4NFB0NEx4ADRkAAAAAAAwNABgMEx47PkLV1dY2OT2Gh4m8vLwEw1QFvlIABxVLTVH///9GSEupqqvq6uoA9GcB7WQA8WYNABZBQ0cB6WMC6WNgYWQuMTexsbLvMrB+AAAAyElEQVR4AZ2QiwrCMAxFb5tF43zP13RT//8v3SVgAxQmnjEu5DRbE8yRPLKHIEYmqDMrafPfsk6O1GSj2mChiqXDusFls2rbtW7are72ZLeU0nk4dt1Jz91FrzfS3wWQIB+U2g/jMI43Sgvy+XpTjoQSyaVQktIJiZ0kdKIQPjsQv5CBxAsFKSD1UeCysoQifX0W1icoElksTY+Z8GeE4TJz5DTB06x6gNBSmYGIiQfcURIe5+sRJUHgKyURC9Ug4bdN4tUfRvkApzgQVpG08DsAAAAASUVORK5CYII=' alt="" /> </a>
              </div>
          </div>
    </div>
  )
}
