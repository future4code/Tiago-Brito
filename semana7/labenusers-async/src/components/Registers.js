import React from 'react'
import axios from "axios"
import styled from 'styled-components'
import {baseUrl, axiosConfig} from '../Authorization'

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

    createUser = async () => {
        const body = {
            name: this.state.Name,
            email: this.state.inputMail,
        };
        try{
            const response = await axios.post(baseUrl, body, axiosConfig)
            this.setState({userName:'', userMail:''})
            alert("Usuário criado com sucesso!")

        }catch(error){
            console.log(error)
            this.setState({userName:'', userMail:''})
            alert("Deu Ruim :(")
            }
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