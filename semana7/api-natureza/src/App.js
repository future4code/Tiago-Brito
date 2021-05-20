import React from "react";
import axios from "axios";
import styled from "styled-components";

const PokemonSelect = styled.select`
  font-size: 20px;
  width: 50%;
  padding: 10px;
  background-color: whitesmoke;
`;

const ImagePokemon = styled.img`
  background-color: whitesmoke;
  border-radius: 1em;
  border:  4mm ridge yellow;
  margin: 1em;
`;

const ImagePokemonConteiner = styled.div`
  margin-top: 10%;
  text-align: center;
  background-position: 50%;
  height: 100%;
`

const PConteiner = styled.div`
  
  border: 17px solid black;
  margin-top: 5%;
  text-align: center;
  background-position: 50%;
  width: 96%;
  padding: 20px;
  border-bottom: 17px solid #89061c;
`


class App extends React.Component {
  state = {
    pokemons: [],
    selectUrl: ""
  };

  componentDidMount() {
    this.getPokemons();
  }

  getPokemons = () => {
    const apiUrl = "https://pokeapi.co/api/v2/pokemon/?limit=151"
    axios
    .get(apiUrl)
    
    .then((response) => {

      this.setState({ pokemons: response.data.results });
    });
  };

  onChangeSelect = (event) => {
    const apiUrl = `https://pokeapi.co/api/v2/pokemon/${event.target.value}`
    axios
    .get(apiUrl).then((response) => {
      
      this.setState({selectUrl: response.data.sprites.front_default});
    });
  };


  render() {
    console.log(this.state.pokemons);
    const pokeList = this.state.pokemons.map((pokemon) => {
      return <option key={pokemon.name}>{pokemon.name} </option>;
    });

    return (
      <PConteiner>
        <h2>Selecione um Pokémon:</h2>
        <PokemonSelect onChange={this.onChangeSelect}>
          {pokeList}
        </PokemonSelect>
          <ImagePokemonConteiner>
        <ImagePokemon src={this.state.selectUrl}/>
        </ImagePokemonConteiner>
      </PConteiner>
    );
  }
}

export default App;