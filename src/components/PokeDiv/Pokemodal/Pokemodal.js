import React, { useEffect, useState } from "react";
import { ContentDiv, HeaderDiv, ModalDiv, PokeinfoBasic, PokemonImg, PokemonPart } from "./PokemodalStyle";

export default function Pokemodal({pokemonInfo, show, pokemonImage}){
    let pokeGroup1 = (pokemonInfo["egg_groups"][1]) ? pokemonInfo["egg_groups"][1].name: "";
    return(
        <>{ show &&(
            <ModalDiv >
                <ContentDiv>
                    <HeaderDiv>
                        <h1>{pokemonInfo.name}</h1>
                    </HeaderDiv>
                    <PokemonPart>
                        <PokemonImg src={pokemonImage}></PokemonImg>
                        <PokeinfoBasic>
                            <p><span style={{"fontWeight":"bold"}}>Grupos:</span> {pokemonInfo["egg_groups"][0].name} {pokeGroup1}</p>
                            <p>{console.log(pokemonInfo)}</p>
                        </PokeinfoBasic>
                    </PokemonPart>
                </ContentDiv>
            </ModalDiv>
        )
        }
        </>
    );
}