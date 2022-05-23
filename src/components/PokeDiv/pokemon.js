import React, { useEffect, useState } from "react";
import { PokeDiv } from "./pokemonStyle";
import Pokeball from "./pokeball.png"
import Pokemodal from "./Pokemodal/Pokemodal";

export default function Pokemon( props ) {
    const [showModal , setShowModal] = useState(false);
    const [image, setImage] = useState(); 
    const [eachPokemon, setEachPokemon] = useState();
    const [eachPokemonColor, setEachPokemonColor] = useState("black");
    const [loading, setLoading] = useState(true);

    const { pokemonNumber } = props;
    async function images(){
        let response = await fetch(`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonNumber}.png`);
        let image = await response;
        return image;
    }

    async function species(){
        let response = await fetch(`https://pokeapi.co/api/v2/pokemon-species/${pokemonNumber}`);
        let pokemon = await response.json();
        return pokemon;
    }
    useEffect(()=>{
        setLoading(true);
        
        Promise.all([images(),species()])
        .then((res) => {
            setImage(res[0].url);
            setEachPokemon(res[1]);
            setEachPokemonColor(res[1].color.name);
        })
        .then(() => setLoading(false))
        .catch((e) => console.log("erro"));
    }, [pokemonNumber])

    function controlModal(){
        if(showModal == true){
            setShowModal(false);
        }else{
            setShowModal(true);
        }
    }

    
    return(
        <div>
            {
                !loading?(
                    <PokeDiv colorDiv={eachPokemonColor} onClick={(e) => controlModal()}>
                        <img src={image}>
                        </img>
                        <Pokemodal pokemonInfo={eachPokemon} show={showModal} pokemonImage={image}></Pokemodal>
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