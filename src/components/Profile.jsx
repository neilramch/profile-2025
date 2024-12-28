import React from 'react'
import './Profile.css'

function Profile() {
  return (
    <div>
        <div className='profile-container'>
            <img src='/ai-headshot2.png'/>
            <div className='heading'>
                <h1>Hi, I'm Neil</h1>
                <div className='underline'></div>
                <h2>M.B.A Student</h2>
            </div>

            <div className='about-me'>
                <h3>About Me</h3>
                <p>I completed my Bachelor’s degree in Management Information Systems at Central Connecticut State University in 2024. I am currently pursuing a master's of business administration with a focus in business analytics. I have a passion for learning and always encorporate that passion into everything I do. From ancient history to chess, I use my hobbies as a tool to always stay on top of the latest technologies.</p>
            </div>
        </div>

        <div className='projects-container'>
                <h3>Projects</h3>

                <ul>
                    <li>
                        Restaurant Clone
                    </li>
                    <li>
                        Histopedia iOS App
                        <img src='/h.png'></img>

                    </li>

                </ul>
        </div>
    </div>
  )
}

export default Profile
