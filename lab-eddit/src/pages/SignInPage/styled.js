import styled from 'styled-components'

export const ScreenContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100vw;
    margin-top: 20vh;
`
export const LogInTitle = styled.h3`
    font-family: Roboto, 'Open Sans', 'Helvetica Neue', sans-serif;
    word-spacing: 25px;
    letter-spacing: 10px;
    color: #72878C;
 
    @media screen and (min-width: 300px) and (max-width: 420px) {
        word-spacing: 10px;
        letter-spacing: 5px;
    }
`

export const InputsContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 80vw;
    max-width: 400px;
    align-items:center;
    margin-bottom:30px;
    Button{
        margin-top: 30px;
    }
`

export const SignUpContainer = styled.div`
    width: 80vw;
    max-width: 400px;
`