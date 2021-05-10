import React from "react";
import styled from "styled-components";
import Etapa1 from "./components/Etapa1";
import Etapa2 from "./components/Etapa2";
import Etapa3 from "./components/Etapa3";
import Final from "./components/Final";


class App extends React.Component {
  state = {
    pagina: 'Etapa1'
  };
  ProximaEtapa = () => {
    if (this.state.pagina === 'Etapa1') {
      this.setState({ pagina: 'Etapa2' })
    } else if (this.state.pagina === 'Etapa2') {
      this.setState({ pagina: 'Etapa3' })
    } else if (this.state.pagina === 'Etapa3') {
      this.setState({ pagina: 'Final' })
    }
  };


  render(){
    const atualizaPagina = () => {
      if (this.state.pagina === 'Etapa1') {
        return <Etapa1 ProximaEtapa={this.ProximaEtapa} />
      } else if (this.state.pagina === 'Etapa2') {
        return <Etapa2 ProximaEtapa={this.ProximaEtapa} />
      } else if (this.state.pagina === 'Etapa3') {
        return <Etapa3 ProximaEtapa={this.ProximaEtapa} />
      } else if (this.state.pagina === 'Final') {
        return <Final/>
      }

    }
    return (
      <div>{atualizaPagina()}</div>
    )
  }
}
export default App;