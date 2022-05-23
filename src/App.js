import React, { useEffect, useState } from "react";
import Pokemon  from './components/PokeDiv/pokemon'
import { DivBody, DivMain } from './AppStyle'
import { Pagination } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';

function App () {
  const [ activePage, SetActivePage ] = useState(1);
  const [ numberInicio , setNumberInicio ] = useState(1);
  const [ numberFinal , setNumberFinal ] = useState(10);
  const [pageStart, setPageStart] = useState(1);
  const [pageEnd, setPageEnd] = useState(18);

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
  console.log("change");
  
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
  return (
    <DivBody>
      <DivMain>
        {renderPokemon()}
      </DivMain>
      <Pagination>
            <Pagination.First />
            <Pagination.Prev />
            {items}
            <Pagination.Next />
            <Pagination.Last />
        </Pagination>
    </DivBody>
  );
}

export default App;
