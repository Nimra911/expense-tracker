import React, { Children } from 'react'
import './Card.css'
const Card = (props) => {
    let classes = ' Card ' + props.className
  return  <div className={classes}>  {props.children} </div>  
}

export default Card
