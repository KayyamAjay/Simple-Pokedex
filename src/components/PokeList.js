import React from "react";
import Pokemon from "./Pokemon";

const PokeList = (props)=>{


   
 
return <div>
    {props.pokelist.map( poke  =>
        <Pokemon
            serial={+poke.id+1}
            name={poke.name}
            img={poke.url}
            
              />)
    }
    {/* {
        props.imglist.map(pokeimg =>
        <Pokemon key={Math.random()} img={pokeimg.img} />)
    } */}
</div>
}

export default PokeList;