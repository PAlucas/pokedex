import React, { useEffect, useState } from "react";
import { PokeDiv } from "./pokemonStyle";

export default function Pokemon( props ) {
    const { pokemon } = props;
    useEffect(()=>{
        const url = `https://pokeapi.co/api/v2/pokemon/${pokemon}`;
        
        const fetchData = async () => {
            try {
                const response = await fetch(url);
                const json = await response.json();
                console.log(json);
            } catch (error) {
                console.log("error", error);
            }
        };

        fetchData();
      
      }, [])
    return(
        <PokeDiv></PokeDiv>
    )
}