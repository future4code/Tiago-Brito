import React from "react";
import styled from "styled-components";

const MainContainer2 = styled.div`
display: flex;
flex-direction: column;
align-items: center;
font-size: 18px
 
 h2,label,input{
   margin-bottom:16px
 }
`

export default class Etapa2 extends React.Components {
  render(){
    return(
      <MainContainer2>
      <h2> <bold> Etapa2 - Informacoes do Ensino Superior </bold></h2>
      <label> 5. Qual curso ? </label>
      <input></input>
      <label> 6. Qual unidade de ensino ? </label>
      <input></input>
         
      </MainContainer2>
    )
  }
}