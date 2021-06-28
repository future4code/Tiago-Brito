import {TextField } from '@material-ui/core'
import React from 'react'
import useForm from '../../hooks/useForm'
import { InputsContainer } from '../SignInPage/styled'
import { useHistory } from 'react-router-dom'
import { Button } from '@material-ui/core'
import { signUp } from '../../services/user'

const SignUpForm = ({setLoginButtonText}) => {
    const history = useHistory()
    const [form, onChange, clear] = useForm({username:'', email:'', password:''})
    const submitForm = (event) =>{ 
        event.preventDefault()
        signUp(form, clear, history,setLoginButtonText)
    }
    
    return(
        <div>
            <InputsContainer>
                <form onSubmit={submitForm}>
                    <TextField
                        name={'username'}
                        type={'text'}
                        value={form.username}
                        onChange={onChange}
                        label={'nome completo'}
                        variant={'outlined'}
                        required
                        margin={'normal'}
                        fullWidth/>
                    <TextField
                        name={'email'}
                        type={'email'}
                        value={form.email}
                        onChange={onChange}
                        label={'email'}
                        variant={'outlined'}
                        required
                        margin={'normal'}
                        fullWidth/>
                    <TextField
                        name={'password'}
                        value={form.password}
                        onChange={onChange}
                        label={'senha'}
                        variant={'outlined'}
                        type='password'
                        required
                        margin={'normal'}
                        fullWidth
                        />
                    <Button
                        type={'submit'}
                        variant={'contained'}
                        color={'primary'}
                    >
                        ENVIAR
                    </Button>
                </form>
            </InputsContainer>
        </div>
    )
}

export default SignUpForm