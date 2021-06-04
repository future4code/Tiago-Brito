import { Container, Header, Div, List, FooterDiv } from "./styled";
import axios from 'axios'
import React, { useState, useEffect } from 'react'


import FireIcon from './../../img/fire.png'
import MatchesIcon from './../../img/comments.svg'
import UserIcon from './../../img/user.svg'
import DeleteIcon from './../../img/delete.jpg'
import AstromatchLogo from './../../img/astromatch.png'

const Matches = (props) => {
    const [matches, setMatches] = useState([]);
  
    useEffect(() => {
      getMatches(props.matches);
    }, [props.matches]);
  
    const getMatches = () => {
      axios
        .get("https://us-central1-missao-newton.cloudfunctions.net/astroMatch/tiago/matches")
        .then((res) => setMatches(res.data.matches))
        .catch((err) => console.log(err));
    };
  
    const clear = () => {
      axios
        .put("https://us-central1-missao-newton.cloudfunctions.net/astroMatch/tiago/clear")
        .then(() => getMatches())
        .catch((err) => console.log(err));
    };
  
    const seeMatches = matches.map((person) => {
      return (
        <List>
          <img src={person.photo} alt={person.name} />
          <p>{person.name}</p>
        </List>
      );
    });
  
    return (
        <div>
          <Container>
              <Header>
                  <a onClick={() => props.changePages() }><img src={ FireIcon } /></a>
                  <img src={ AstromatchLogo } />
                  <a><img src={ MatchesIcon } /></a>
              </Header>
              <Div>
                  { seeMatches }
              </Div>
              
              <FooterDiv>
                  <a onClick={ clear }><img src={ DeleteIcon }/></a>
              </FooterDiv>
              </Container>
      </div>
    );
  };
  
  export default Matches;