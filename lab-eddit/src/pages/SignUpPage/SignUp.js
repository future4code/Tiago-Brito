import React from 'react'
import { ScreenContainer, SignUpTitle } from './styled'
import SignUpForm from './SignUpForm'
import useUnportectedPage from '../../hooks/useUnprotectedPage'

const SignUp = ({setLoginButtonText}) => {
    useUnportectedPage()
    return(
        <ScreenContainer>
            <SignUpTitle>CADASTRE-SE</SignUpTitle>
            <SignUpForm setLoginButtonText={setLoginButtonText}/>
        </ScreenContainer>
    )
}

export default SignUp