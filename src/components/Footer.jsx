import React from 'react'
import './Footer.css'
import slackLogo from '../images/slackLogo.png'
import githubLogo from '../images/Icongithub.png'
import footerZuriLogo from '../images/I4G.png'

export default function Footer() {
  return (
    <div className='footerWrapper'>
        <div className='footerSection-one'>
            <img src={slackLogo} alt='logo' id='slackLogo' />
            <img src={githubLogo} alt='logo' id='githubLogo' />
        </div>
        <div className='footerSection-two'>
          <h2 className='footerSection-two_title'>Zuri.Internship</h2>
          <p className='footerSection-two_details'>HNG Internship 9 Frontend Task</p>
          <img src={footerZuriLogo} alt='logo' id='footerZuri-logo' />
        </div>
    </div>
  )
}
