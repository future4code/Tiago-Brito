import React from 'react'
import CreatePlaylist from './components/CreatePlaylists'
import Playlists from './components/Playlist'
import styled from 'styled-components'
import logo from './img/logo.png'

const Logo = styled.img`
  margin-left: 5px;
  width:70px;
  height:70px;
`
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`
const Header = styled.div`
  display: flex;
  align-items: center;
  `
const Footer = styled.div`
   justify-content: center;
  align-items: center;
  text-decoration: red;
`
const MainContainer = styled.div`
  height: 70vh;
  display: flex;
  justify-content: center;
  align-items: center;
 `
const PageButton = styled.button`
  outline: 0;
  border: none;
  background-color:darkblue;
  color: white;
  display: flex;
  justify-content: center;
  margin: 0 10px;
  padding: 10px;
  border-radius: 16px;
  width: 180px;
  cursor: pointer;

`


export default class App extends React.Component {
  state = {
    page: true
  };

  changePage = () => {
    this.setState({ page: !this.state.page });
  };

  render() {
    return (
      <Container>
        <Header>
          <Logo src={logo} alt='logo labenu'/>
          <PageButton onClick={this.changePage}> PLAYLISTS</PageButton>
        </Header>

        <MainContainer>
          {this.state.page ? <CreatePlaylist /> : <Playlists />}
        </MainContainer>

        <Footer>
          <h2>DeezerPobre!</h2>
        </Footer>
      </Container>
    );
  }
}