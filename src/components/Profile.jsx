import React from 'react'
import './Profile.css'
import profileImg from '../images/profile-pix.jpg'
export default function Profile() {
  return (
    <div className='profileWrapper'>
            <img src={profileImg} alt='profileImg' id='profile_img'/>
            <h1 id='twitter'>Mike_Adeshina</h1>
            <h2 id='slack'>michado2019</h2>
    </div>
  )
}
