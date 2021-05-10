import React from "react";
import styled from "styled-components";

const MainContainerf = styled.div`
display: flex;
flex-direction: column;
align-items: center;
font-size: 18px
 
 h2,label{
   margin-bottom:16px
 }
`

export default class final extends React.Components {
  render(){
    return(
      <MainContainerf>
      <h2> <bold> O Formulario Acabou </bold></h2>
      <label> Muito obrigado por participar! Entraremos em contato! </label>
      </MainContainerf>
    )
  }
}
