import React from "react";
import styled from "styled-components";

const MainContainer = styled.div`
display: flex;
flex-direction: column;
align-items: center;
font-size: 18px;
 

`

class Etapa1 extends React.Component {
  render() {
    return (
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
        <br />
        <button onClick={this.props.ProximaEtapa}>Próxima etapa</button>

      </MainContainer>
    )
  }
}
export default Etapa1;
