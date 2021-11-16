import classes from "./Card.module.css";
import React from "react";
const Card =(props)=>{
    const [high,isHigh]=React.useState(false)
    const clickhandler =()=>{
      setTimeout(() => {
        isHigh(!high);
      }, 100); 
    }
    const  name = `${classes.card} ${ high && classes.bump}`
    
    return <div onTouchMove={clickhandler} onClick={clickhandler} className={name} >{props.children}</div>
}

export default Card;