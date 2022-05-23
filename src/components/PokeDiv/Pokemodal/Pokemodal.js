import React, { useEffect, useState } from "react";

export default function Pokemodal( props ){
    const [pokemon, setPokemon] = useState("black");
    const [loading, setLoading] = useState(true);

    const { pokemonNumber } = props;
    const { show } = props;
    useEffect(()=>{
        setLoading(true);

        fetch(`https://pokeapi.co/api/v2/pokemon-species/${pokemonNumber}`)
        .then((response) => response.json())
        .then((response) => setPokemon(response));
    }, [pokemonNumber])


    return(
        <div>
            {console.log(show)}
        </div>
    );
}