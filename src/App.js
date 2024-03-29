import React, { useEffect, useState } from "react";
import Pokemon  from './components/PokeDiv/pokemon'
import Pokemodal from "./components/PokeDiv/Pokemodal/Pokemodal";
import { DivBody, DivLupa, DivMain } from './AppStyle'
import { Pagination } from 'react-bootstrap';
import Pokeball from  "./components/PokeDiv/pokeball.png";
import SearchModal from './components/PokeSearch';
import 'bootstrap/dist/css/bootstrap.min.css';

function App () {
  const [ activePage, SetActivePage ] = useState(1);
  const [ numberInicio , setNumberInicio ] = useState(1);
  const [ numberFinal , setNumberFinal ] = useState(10);
  const [ pageStart, setPageStart ] = useState(1);
  const [ pageEnd, setPageEnd ] = useState(18);
  const [ modalSearch, setmodalSearch ] = useState(false);
  const [ searchPokemon, setSearchPokemon ] = useState(false);
  const [ pokemonModalSearch, setPokemonModalSearch ] = useState();
  const [ showPokemonModal, setShowPokemonModal ] = useState(false);
  const [ pokemonImage, setPokemonImage ] = useState(Pokeball);

  function pageFirst(){
    setNumberFinal(10);
    setNumberInicio(1);
    SetActivePage(1);
    setPageStart(1);
    setPageEnd(18);
  }

  function pageLast(){
    setNumberInicio(40);
    setNumberFinal(50);
    SetActivePage(50);
    setPageStart(883);
    setPageEnd(898);
  }

  function changePagesFinal(){
      switch (numberFinal){
          case 10:
              setNumberFinal(numberFinal + 10);
              setNumberInicio(10);
              break;
          case 50:
              return;
          default:
              setNumberFinal(numberFinal + 10);
              setNumberInicio(numberInicio + 10);
      }
  }

  function changePagesInicio(){
      switch (numberInicio){
          case 10:
              setNumberInicio(1);
              setNumberFinal(numberFinal - 10);
              break;
          case 1:
              return;
          default:
              setNumberFinal(numberFinal - 10);
              setNumberInicio(numberInicio - 10);
      }
  }

  function changeActivePage( numberPage ){
      if(numberFinal === numberPage){
          if(numberFinal !== 50){
            SetActivePage(numberPage);
            changePagesFinal(numberPage);
            setPageStart(((numberPage-1)*18) + 1);
            setPageEnd(numberPage * 18);
          }
          else{
            SetActivePage(numberPage);
            changePagesFinal(numberPage);
            setPageStart(((numberPage-1)*18) + 1);
            setPageEnd((numberPage * 18) - 2);
        }
      }else if(numberInicio === numberPage){
          SetActivePage(numberPage);
          changePagesInicio(numberPage);
          setPageStart(((numberPage-1)*18) + 1);
          setPageEnd(numberPage * 18);
      }else{
          SetActivePage(numberPage);
          setPageStart(((numberPage-1)*18) + 1);
          setPageEnd(numberPage * 18);
      }
          
  }
  
  let items = [];

  for(let number = numberInicio; number <= numberFinal ; number ++){
      items.push(
          <Pagination.Item key={number} active={number === activePage} onClick={(e) => changeActivePage(number) }>
              {number}
          </Pagination.Item>
      )
  }

  useEffect(() =>{
      if(activePage % 10 === 0){
          for(let number = numberInicio; number <= numberFinal ; number ++){
              items.push(
                  <Pagination.Item key={number} active={number === activePage} onClick={(e) => changeActivePage(number) }>
                      {number}
                  </Pagination.Item>
              )
          }
      }
      renderPokemon()
  }, [activePage])

  function renderPokemon(){
    let rows = [];
    for(let i = pageStart; i <= pageEnd; i++){
      rows.push(<Pokemon pokemonNumber={i} ></Pokemon>);
    }
    return  rows;
  }

  function showModalSearch(){
    setmodalSearch((prev) => !prev);
  }
  async function images(res){
    let response = await fetch(`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${res}.png`);
    let image = await response;
    return image;
  }

  async function species(res){
    let response = await fetch(`https://pokeapi.co/api/v2/pokemon-species/${res}`);
    let pokemon = await response.json();
    return pokemon;
  }

  useEffect( ()=>{
    if(searchPokemon){
        fetch(`https://pokeapi.co/api/v2/pokemon/${searchPokemon}`)
        .then((res) => {
            if(res.status === 404){
                throw new Error("Pokemon n�o existe");
            } else {
                return res.json();
            }
        })
        .then((res) => Promise.all([images(res.id), species(res.id)]))
        .then((res) => {
            setPokemonImage(res[0].url);
            setPokemonModalSearch(res[1]);
        })
        .then(() => setShowPokemonModal(true))
        .catch(() => alert("Pokemon n�o existe"))
    }
  }, [searchPokemon])
  function closePokemonModal(){
    setShowPokemonModal(false);
  }
  return (
    <DivBody>
        <SearchModal show = {modalSearch} setShow = {setmodalSearch} setPokemon={setSearchPokemon}/>
        <Pokemodal show={showPokemonModal} pokemonInfo={pokemonModalSearch} pokemonImage={pokemonImage} setShow={closePokemonModal}></Pokemodal>
        <DivLupa onClick={() => showModalSearch()}>        
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
            </svg>
        </DivLupa>
      <DivMain>
        {renderPokemon()}
      </DivMain>
      <Pagination>
            <Pagination.First  onClick={() => pageFirst()}/>
            {items}
            <Pagination.Last onClick={() => pageLast()}/>
        </Pagination>
    </DivBody>
  );
}

export default App;
