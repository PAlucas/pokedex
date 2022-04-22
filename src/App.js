import React, { useEffect, useState } from "react";
import Pokemon  from './components/PokeDiv/pokemon'
import { DivApp } from './AppStyle'

function App() {
  const [quantidadePokemon, setQuantidadePokemon] = useState();

  useEffect(()=>{
    const url = "https://pokeapi.co/api/v2/pokemon";
    const fetchData = async () => {
        try {
            let arrayPokemon = Array();
            const response = await fetch(url);
            const json = await response.json();
            arrayPokemon = json.results;
            setQuantidadePokemon(arrayPokemon.length);
        } catch (error) {
            console.log("error", error);
        }
    };

    fetchData();
  
  }, [])

  function renderPokemon(){
    let rows = [];
    for(let i = 0; i < quantidadePokemon ; i++){
      rows.push(<Pokemon pokemon={"murkrow"} ></Pokemon>);
    }
    return  rows;
  }
  return (
  <DivApp>
    {renderPokemon()}
  </DivApp>
  );
}

export default App;
