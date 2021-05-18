import React from 'react'
import axios from "axios"
import styled from 'styled-components'

export default class UserList extends React.Component {
      state = {
        users: []
     }

       componentDidMount() {
        this.getUsers()
      }
    
        getUsers = () => {
        axios
            .get("https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users",
            {
                headers: {
                Authorization: "tiago-brito-paiva"
                }
            })

            .then((response) => {
                this.setState({ users: response.data});
            })
            .catch((error) => {
                console.log(error.response.data);
            })
        }
        deleteUsers = (idUsers) => {
        axios
            .delete(`https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${idUsers}`,
            {
                headers: {
                Authorization: "tiago-brito-paiva"
                }
            }
            )
            .then((response) => {
                alert(" Usuário deletado!")
                this.getUsers()
            })
            .catch((error) => {
                alert("Erro ao deletar usuário!")
            })
        }

        render(){
        const usersList = this.state.users.map((user) => (
            <div>
            <li key={user.id}>{user.name}</li>
            <button onClick={() => this.deleteUsers(user.id)}>excluir</button>
            </div>
        ))
        return(
        <div>
                <ul>{usersList}</ul>
        </div>
        )}
}