import React from 'react'
import axios from "axios"
import styled from 'styled-components'

const MainContainer = styled.div`
    margin: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items:center;
    
`

export default class Register extends React.Component {
    state = {
        Name: '',
        inputMail: ''
    };

    handleOnChangeName = (e) => {
        this.setState({ Name: e.target.value });
    };

    handleOnChangeEmail = (e) => {
        this.setState({ inputMail: e.target.value })
    }

    createUser = () => {
        const body = {
            name: this.state.Name,
            email: this.state.inputMail,
        };
        axios
            .post(
                "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users",
                body,
                {
                    headers: {
                        Authorization: "tiago-brito-paiva"
                    }
                }
            )
            .then((response) => {
                console.log("Usuário adicionado com sucesso!", response.data)
                alert("Cadastro realizado com Sucesso")
                this.setState({ Name: '' })
                this.setState({ inputMail: '' })
            
            })
            .catch((error) => {
                console.log("Verifique seus campos de envio", error)
                alert("Email Invalido")
            })
    };

    render() {
        return (
            <MainContainer>
                <h2>Criar Usuario</h2>

                <input
                    placeholder={"Nome"}
                    value={this.state.Name}
                    onChange={this.handleOnChangeName} />


                <input
                    placeholder={"Email"}
                    value={this.state.inputMail}
                    onChange={this.handleOnChangeEmail} />

                <button onClick={(this.createUser)}>Criar</button>
            </MainContainer>
        )
    }
}