import styled from 'styled-components'

export const ScreenContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100vw;
    margin-top: 20vh;
    Button{
        width: 400px;
        
        @media screen and (min-width: 300px) and (max-width: 420px) {
            width: 300px;
    }
    }
`
export const SignUpTitle = styled.h3`
    font-family: Roboto, 'Open Sans', 'Helvetica Neue', sans-serif;
    letter-spacing: 17px;
    color: #72878C;
 
    @media screen and (min-width: 300px) and (max-width: 420px) {
        letter-spacing: 8px;
    }
`
export const InputsContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 80vw;
    max-width: 400px;
    align-items:center;
    margin-bottom:30px;
`