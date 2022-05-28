import React, { useEffect, useState } from "react";
import { ContentDiv, ModalDiv, PokemonInput} from "./style";
import Pokemodal from '../PokeDiv/Pokemodal/Pokemodal'

export default function PokemodalSearch({pokemonInfo, show, pokemonImage, setShow}){
    const [ searching, setSearch ] = useState(false);
    const [ inputValue, setInputValue ] = useState("");
    const [ newPokemon, setNewPokemon ] = useState();
    const [ showPokemon, setShowPokemon ] = useState(false);

    function closeModal(e){
        e.preventDefault();
        setSearch(true);
    }

    useEffect(() =>{
        setSearch(false);
        if(searching === true){
            console.log(inputValue);
            fetch(`https://pokeapi.co/api/v2/pokemon-species/${inputValue}`)
            .then((res) => {
                if(res.ok){
                    return res.json()
                }else{
                    throw new Error("Não existe pokemon");
                }
            })
            .then((res) => setNewPokemon(res))
            .then(() => setShowPokemon(true))
            .catch((err) => alert(err))
        }
    }, [searching])

    useEffect(() =>{
        if(showPokemon == true){
            setShowPokemon(false);
            console.log("amem");
            console.log(newPokemon);
            setShow(false);
            console.log(show);
        }
    },[showPokemon])
    
    
    
    return(
        <>{ show &&(
            <ModalDiv >
                <ContentDiv>
                    <form>
                        <label>Pokemon:</label>
                        <PokemonInput onChange={(e) => setInputValue(e.target.value)}/>
                        <button onClick={(e) => closeModal(e)}>Escolher</button>
                    </form>
                </ContentDiv>
            </ModalDiv>
        )
        }{showPokemon &&(
            <Pokemodal pokemonInfo={newPokemon} show={showPokemon}></Pokemodal>
        )}
        </>
    );
}