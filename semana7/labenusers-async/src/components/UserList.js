import React from 'react'
import axios from "axios"
import {baseUrl, axiosConfig} from '../Authorization'
import styled from 'styled-components'

export default class UserList extends React.Component {
        state = {
            users: []
        }
    
        componentDidMount(){ 
            this.getUsers ()
        }
    
        getUsers = async () => {
            try{
                const response = await axios.get(baseUrl, axiosConfig)
                this.setState({users: response.data})
            }catch (error){
                console.log(error)
            }
        }
    
        deleteUsers = async (userId) => {
            if (window.confirm("Usuário deletado!")){          
                try{
                    
                    const res = await axios.delete(`${baseUrl}/${userId}`, axiosConfig)
                    this.getUsers()
                    console.log(userId)
                }catch (error){
                    console.log(error)
                }
            }
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