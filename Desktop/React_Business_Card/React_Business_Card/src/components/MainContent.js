import React from 'react';
import Ilogo from '../images/linkedin.png';
import Mlogo from '../images/Mail.png';

export default function MainContent() {
    return (
      <div>
        <h1>Shweta Ranjan Anand</h1>
        <h4 style={{color: '#F3BF99' }}>Frontend Developer</h4>
        <h5><a href="https://shweta200126.github.io">shweta200126.github.io</a></h5>

          <div class="links">
          <a href="mailto: anand26shweta@gmail.com" className='email1'>
          <button type="email" class="button1">
            <img src='https://fonts.gstatic.com/s/i/short-term/release/materialsymbolsoutlined/mail/fill1/48px.svg' height='20px' />
             Email
          </button>
          </a>
            
            {/* <a href="https://www.linkedin.com/in/shweta-ranjan-anand-she-her-a3246b203/">
              <button className='Ilogo'><img src={Ilogo} />  LinkedIn  </button>
            </a> */}
          </div>

          <div className='section'>
            <h3>About</h3>
            I am a frontend developer with a particular interest in making things simple and easy to navigate. I am always looking for new things to learn.
            <h3>Interest</h3>
            Food expert. Reader. Internet fanatic. Travel geek.
          </div>

      </div>
    )
}