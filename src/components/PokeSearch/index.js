import React, { useEffect, useState } from "react";
import { ContentDiv, ModalDiv, PokemonInput} from "./style";
import Pokemodal from '../PokeDiv/Pokemodal/Pokemodal'

export default function PokemodalSearch({setPokemon, show, setShow}){
    const [ inputValue, setInputValue ] = useState("");

    function closeModal(e){
        e.preventDefault();
        setPokemon(inputValue);
        setShow(false);
    }
    
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
        }
        </>
    );
}