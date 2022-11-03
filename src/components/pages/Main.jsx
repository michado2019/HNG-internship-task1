import React from 'react'
import './Main.css'
import Profile from './Profile'
import LinkSection from './LinkSection'

export default function Main() {
  return (
    <div className='mainWrapper'>
      <Profile />
      <LinkSection />
    </div>
  )
}
