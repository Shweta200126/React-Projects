import React from 'react';
import My_pic from '../images/My_pic.jpeg';

export default function Header() {
    return (
        <div>
          <img src={My_pic} alt="My pic" className="profile--icon" />  
        </div>
    )
}