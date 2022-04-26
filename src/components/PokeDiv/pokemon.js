import React, { useEffect, useState } from "react";
import { PokeDiv } from "./pokemonStyle";
import Pokeball from "./pokeball.png"

export default function Pokemon( props ) {
    const [image, setImage] = useState(); 
    const [eachPokemon, setEachPokemon] = useState("black");
    const [loading, setLoading] = useState(true);

    const { pokemonNumber } = props;
    useEffect(()=>{
        setLoading(true);
        
        fetch(`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonNumber}.png`)
        .then((response) => setImage(response.url))
        .then((response) => setLoading(false))


        fetch(`https://pokeapi.co/api/v2/pokemon-species/${pokemonNumber}`)
        .then((response) => response.json())
        .then((response) => setEachPokemon(response.color.name));
    }, [pokemonNumber])
    
    return(
        <div>
            {
                !loading?(
                    <PokeDiv colorDiv={eachPokemon}>
                        <img src={image}>
                        </img>
                    </PokeDiv>
                ):(
                    <PokeDiv>
                        <img src={Pokeball}>
                        </img>
                    </PokeDiv>
                )
            }   
        </div>
    )
}