import { Button } from '@material-ui/core'
import React from 'react'
import { ScreenContainer, SignUpContainer } from './styled'
import { LogInTitle } from './styled'
import LoginForm from './LoginForm'
import { goToSignUpPage } from '../../routes/coordinator'
import { useHistory } from 'react-router-dom'
import useUnportectedPage from '../../hooks/useUnprotectedPage'

const SignIn = ({setLoginButtonText}) =>{
    useUnportectedPage()
    const history = useHistory()
    return (
        <ScreenContainer>
            <LogInTitle>ACESSE SEU PERFIL</LogInTitle>
            <LoginForm setLoginButtonText={setLoginButtonText}/>
            <SignUpContainer>
                <Button
                    onClick={() => goToSignUpPage(history)}
                    type={'submit'}
                    variant={'text'}
                    color={'primary'}
                    fullWidth>
                        Não é cadastrado?  Clique Aqui
                </Button>
            </SignUpContainer>
        </ScreenContainer>
    )
}

export default SignIn