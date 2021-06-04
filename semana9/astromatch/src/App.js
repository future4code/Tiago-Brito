import React, { useState } from 'react'
import styled from 'styled-components'
import axios from 'axios'
import Home from './../Home/Home'
import Matches from './../Matches/Matches'
import { AppDiv } from "./styled";


function App() {
  const [pages, setpages] = useState(true)

  const changePages = () => {
    setpages(!pages)
  }

  return (
    <AppDiv>
      {pages ?(
        <Home changePages={changePages}/>
      ) : (
        <Matches changePages={changePages}/>
      )
    }
    </AppDiv>
  );
}

export default App;