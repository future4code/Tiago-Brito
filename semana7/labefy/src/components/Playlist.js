import React from 'react'
import axios from 'axios'
import {baseUrl, axiosConfig} from '../Parameters'
import styled from 'styled-components'

const MainContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 10px;
    border: 1px solid black;
    width: 500px;
    height: 200px;
    align-items: center;
    margin: 10px;
    background-color: darkblue ;
`
const Title = styled.h1`
    color: whitesmoke;
`
const PlaylistsList = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    height: 100%;
    
`
const PlaylistItem = styled.div`
    display:flex;
    padding: 10px;
    color: whitesmoke;
    text-size-adjust: inherit;
    font-size: 25px;
    
`
const DeleteButton = styled.button`
    margin-left: 5px;
    cursor: pointer;
`


export default class Playlists extends React.Component{
    state = {
        playlists: []
    }

    componentDidMount(){
        this.getAllPlaylists()
    }

    getAllPlaylists = async () => {
        try{
            const response = await axios.get(baseUrl, axiosConfig)
            this.setState({playlists: response.data.result.list})
        }catch (error){
            console.log(error)
        }
    }

    deletePlaylist = async (playlistId) => {
        if (window.confirm('Deseja realmente deletar a playlist')){          
            try{

                await axios.delete(`${baseUrl}/${playlistId}`, axiosConfig)
                this.getAllPlaylists()
                console.log(playlistId)
            }catch (error){
                console.log(error)
            }
        }
    }

    render(){
        return(
            <MainContainer>
                <Title>PLAYLISTS</Title>
                {this.state.playlists.map((playlist) => {
            return (
                <PlaylistsList key={playlist.id}>
                    <PlaylistItem>{playlist.name}</PlaylistItem>
                    <DeleteButton onClick={() => {this.deletePlaylist(playlist.id)}}>X</DeleteButton>
                </PlaylistsList>
            )
        })}
            </MainContainer>
        )
    }
} 