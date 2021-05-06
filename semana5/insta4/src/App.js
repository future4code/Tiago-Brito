import React from 'react';
import styled from 'styled-components'
import Post from './components/Post/Post';

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`
const MainPost = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`

class App extends React.Component {
   // Inicializando o estado
   state = {
    // Lista de pessoas colocada no estado
    pessoas: [
      // O objeto abaixo representa uma pessoa. Ele possui
      // duas propridades: nome e email.
      {
        nomeUsuario: "Paulinha",
        FotoUsuario: "https://picsum.photos/50/50",
        fotoPost: "https://picsum.photos/200/150"
      },
      {
        nomeUsuario: "Tiago",
        FotoUsuario: "https://picsum.photos/50/51",
        fotoPost: "https://picsum.photos/200/151"
      },
      {
        nomeUsuario: "Carla",
        FotoUsuario: "https://picsum.photos/50/52",
        fotoPost: "https://picsum.photos/200/152"
      }
    ],
      valorInputUsuario: "",
      valorInputFoto: "",
      valorInputFotoPost: "" 
  }
  handleUsuario = (event) => {
    this.setState({ valorInputUsuario: event.target.value });
  };

  handleFoto = (event) => {
    this.setState({ valorInputFoto: event.target.value });
  };

  handleFotoPost = (event) => {
    this.setState({ valorInputFotoPost: event.target.value });
  };
 
  onClickAdicionar = () => {
    const novoPost = {
      nomeUsuario: this.state.valorInputUsuario,
      FotoUsuario: this.state.valorInputFoto,
      fotoPost: this.state.valorInputFotoPost
    };
    //Adicionando com push
    const novaPublish = [...this.state.pessoas];
    novaPublish.push(novoPost);
    this.setState({ pessoas: novaPublish, valorInputUsuario: "", valorInputFoto: "" , valorInputFotoPost: "" });
};

  render() {
    const listaDeComponentes = this.state.pessoas.map((pessoas) => {

    return (
      <Post
         nomeUsuario = {pessoas.nomeUsuario}
         fotoUsuario = {pessoas.FotoUsuario}
         fotoPost = {pessoas.fotoPost}
      />
    
    );
  })
  return (
    <MainContainer>
      
      <MainPost>
      <input
          placeholder={"Usuario"}
          value={this.state.valorInputUsuario}
          onChange={this.handleUsuario}
        />
         <input
          placeholder={"foto link"}
          value={this.state.valorInputFoto}
          onChange={this.handleFoto}
        />
         <input
          placeholder={"Link foto do post"}
          value={this.state.valorInputFotoPost}
          onChange={this.handleFotoPost}
        />
         <button onClick={this.onClickAdicionar}>Publicar</button>
        {listaDeComponentes}
      </MainPost>
    </MainContainer>
     
    
);
}
}

export default App;
