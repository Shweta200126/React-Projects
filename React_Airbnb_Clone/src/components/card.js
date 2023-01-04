import React from 'react'


export default function Card(props){
    let badgeText
    if (props.item.openSpots === 0) {
        badgeText = "SOLD OUT"
    } else if (props.item.location === "Online") {
        badgeText = "ONLINE"
    }
    else {
        badgeText = props.item.openSpots + " LEFT"
    }

    return (
        <div className='card'>
            {badgeText && <div className="card--badge">{badgeText}</div>}
            <div className='image'>
                <img src={`./images/${props.item.coverImg}`} alt="card" className='card--image' />
            </div>
            <div className='card--stats'>
                <img src="./images/star.png" alt="star" className="card--star" />
                &nbsp;
                <span> {props.item.stats.rating} </span>
                &nbsp;
                <span className='gray'> ({props.item.stats.reviewCount})  </span>
                &nbsp;
                <span className='gray'>• {props.item.location} </span>
            </div>
            <div className='card--title'>
                <span>{props.item.title}</span>
            </div>
            <div className='card--price'>
                <span className='bold'>From ${props.item.price}</span>/person
            </div>
        </div> 
    )
}