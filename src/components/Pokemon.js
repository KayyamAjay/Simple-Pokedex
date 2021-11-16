import Card from "../UI/Card";
import React from "react";
import classes from "./Pokemon.module.css"
const Pokemon = (props) =>{
    
    return <Card><p>{props.serial}</p><h3>{props.name}</h3>
        <img className={classes.img} src={props.img}></img>
    </Card>
}

export default Pokemon;