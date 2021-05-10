import { findByLabelText } from "@testing-library/dom";
import { getByDisplayValue } from "@testing-library/dom";
import React from "react";
import styled from "styled-components";

const MainContainer = styled.div`
display: flex;
flex-direction: column;
align-items: center;
font-size: 18px
 
 h2,label,input{
   margin-bottom:16px
 }
`

export default class Etapa1 extends React.Components {
  render(){
    return(
      <MainContainer>
      <h2> <bold> Etapa1 - Dados Gerais </bold></h2>
      <label> 1. Qual o seu nome ? </label>
      <input></input>
      <label> 2. Qual sua idade ? </label>
      <input></input>
      <label> 3. Qual seu email ? </label>
      <input></input>
      <label> 4. Qual sua escolaridade ? </label>
      <input></input>
      </MainContainer>
    )
  }
}