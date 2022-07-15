import React from "react";
import { ContentDiv, HeaderDiv, ModalDiv, PokeinfoBasic, PokemonDivInfoFooter, PokemonImg, PokemonPart, PokemonPartFooter, CloseModalButton } from "./PokemodalStyle";

export default function Pokemodal({pokemonInfo, show, pokemonImage, setShow}){
    if(show){
        
        let pokeGroup0 = (pokemonInfo["egg_groups"][0]) ? pokemonInfo["egg_groups"][0].name: "Não tem";
        let pokeGroup1 = (pokemonInfo["egg_groups"][1]) ? pokemonInfo["egg_groups"][1].name: "";
        let evolucao = (pokemonInfo["evolves_from_species"]) ? pokemonInfo["evolves_from_species"].name : "Forma inicial";
        let geracao = (pokemonInfo.generation) ? pokemonInfo.generation.name: "Não possui geração";
        let habitat = (pokemonInfo.habitat) ? pokemonInfo.habitat.name : "Não possui habitat";
        let felicidade = (pokemonInfo["base_happiness"]) ? pokemonInfo["base_happiness"] : "Infeliz";
        let captura = (pokemonInfo["capture_rate"]) ? pokemonInfo["capture_rate"] : "Indefinido";
        let tamanho = (pokemonInfo["growth_rate"]) ? pokemonInfo["growth_rate"].name : "Indefinido";
        let corpo = (pokemonInfo.shape) ? pokemonInfo.shape.name : "Indefinido";
        
        return(
            <>{ show &&(
                <ModalDiv >
                    <ContentDiv>
                        
                        <HeaderDiv>
                            <h1>{pokemonInfo.name}</h1>
                            <CloseModalButton onClick={() => setShow()} >X</CloseModalButton>
                        </HeaderDiv>
                        <PokemonPart>
                            <PokemonImg src={pokemonImage}></PokemonImg>
                            <PokeinfoBasic>
                                <p><span style={{"fontWeight":"bold"}}>Grupos:</span> {pokeGroup0} {pokeGroup1}</p>
                                <p><span style={{"fontWeight":"bold"}}>Geração:</span> {geracao}</p>
                                <p><span style={{"fontWeight":"bold"}}>Habitat:</span> {habitat}</p>
                            </PokeinfoBasic>
                        </PokemonPart>
                        <PokemonPartFooter>
                            <PokemonDivInfoFooter>
                                <p><span style={{"fontWeight":"bold"}}>Felicidade Base:</span> {felicidade}</p>
                            </PokemonDivInfoFooter>
                            <PokemonDivInfoFooter>
                                <p><span style={{"fontWeight":"bold"}}>Dificuldade Captura:</span> {captura}</p>
                            </PokemonDivInfoFooter>
                            <PokemonDivInfoFooter>
                                <p><span style={{"fontWeight":"bold"}}>Crescimento:</span> {tamanho}</p>
                            </PokemonDivInfoFooter>
                            <PokemonDivInfoFooter>
                                <p><span style={{"fontWeight":"bold"}}>Evoluido de:</span> {evolucao} </p>
                            </PokemonDivInfoFooter>
                            <PokemonDivInfoFooter>
                                <p><span style={{"fontWeight":"bold"}}>Shape:</span> {corpo}</p>
                            </PokemonDivInfoFooter>
                            <PokemonDivInfoFooter>
                                <p><span style={{"fontWeight":"bold"}}>Shape:</span> {corpo}</p>
                            </PokemonDivInfoFooter>
                        </PokemonPartFooter>
                    </ContentDiv>
                </ModalDiv>
            )
            }
            </>
    );
    }
    
}