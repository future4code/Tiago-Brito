import React from "react";
import styled from "styled-components";


const MainContainer3 = styled.div`
display: flex;
flex-direction: column;
align-items: center;
font-size: 18px
 
 h2,label,input, select {
   margin-bottom:16px
 }
`

class Etapa3 extends React.Component {
  render() {
    return (
      <MainContainer3>
        <h2> <bold> Etapa3 - Informacoes Gerais de Ensino </bold></h2>
        <label> 7. Porque voce nao terminou um curso de graduacao ? </label>
        <input></input>
        <label> 8. Voce faz algum curso complementar ? </label>
        <select>
          <option>Nenhum</option>
          <option>Curso Tecnico</option>
          <option> Curso de Ingles</option>
        </select>
        <br />
        <button onClick={this.props.ProximaEtapa}>Próxima etapa</button>

      </MainContainer3>
    )
  }
}
export default Etapa3;