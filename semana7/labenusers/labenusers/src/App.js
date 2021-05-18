import React from 'react'
import Register from './components/Registers'
import UserList from './components/UserList'
import styled from 'styled-components'


const Mainlabel = styled.div`
    margin: auto;
    display: flex;
    flex-direction: column;
    
    justify-content: center;
    align-items:center;
    
`

export default class App extends React.Component {
    state = {
        Page: 0
    }

    changeCurrentPage = () => {
        if (this.state.Page === 0) {
            return <Register />
        } else if (this.state.Page === 1) {
            return <UserList />
        }
    }

    changeCurrentState = () => {
        if (this.state.Page === 0) {
            this.setState({ Page: 1 })
        } else if (this.state.Page === 1) {
            this.setState({ Page: 0 })
        }
    }

    actionButton = () => {
        switch (this.state.Page) {
            case 0:
                return <button onClick={this.changeCurrentState}>Troca de Pagina</button>
            case 1:
                return <button onClick={this.changeCurrentState}>Volta a principal</button>
            default:
                return
        }
    }


    render() {
        return (

            <div>
                <Mainlabel>
                    <h1>Labenusers</h1>
                    {this.changeCurrentPage()}
                    {this.actionButton()}
                </Mainlabel>
            </div>

        )
    }
}