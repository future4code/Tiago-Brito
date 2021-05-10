import React from "react";
import styled from "styled-components";
import Etapa1 from "./components/Etapa1";


class App extends React.Component {
         state = {
      etapa: 1
    };
  

  renderizaEtapa = () => {
    switch (this.state.etapa) {
      case 1:
        return <Etapa1 />;
      case 2:
        return <Etapa2 />;
      case 3:
        return <Etapa3 />;
      case 4:
        return <Final />;
      default:
        return "erro!";
    }
  };

  proximaEtapa = () => {
    let etapAtual = this.state.etapa;
    let etapaNova = etapaAtual + 1 ;

    this.setState({ etapa: this.state.etapa + 1 });
  };

  render() {
    return (
      <MainContainer>
        <div> {this.renderizaEtapa()}</div>
       <button onClick={this.ProximaEtapa}>Próxima etapa</button>
      </MainContainer>
    );
  }
}

