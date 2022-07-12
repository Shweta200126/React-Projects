import React from 'react';
import Tlogo from '../images/Twitter-Icon.png';
import Flogo from '../images/Facebook-Icon.png'; 
import Ilogo from '../images/Instagram-Icon.png';
import Glogo from '../images/GitHub-Icon.png';

export default function Footer() {
    return (
        <nav className='footer'>
            <div class="logo-container">
            <a href='https://twitter.com/Shweta200126'><img src={Tlogo} alt="Twitter-logo" /></a>
            <a href='#'><img src={Flogo} alt="facebook-logo" /></a>
            <a href='#'><img src={Ilogo} alt="Instagram-logo" /></a>
            <a href='https://github.com/Shweta200126'><img src={Glogo} alt="GitHub-logo" /></a> 
            </div>
        </nav>
    )
}