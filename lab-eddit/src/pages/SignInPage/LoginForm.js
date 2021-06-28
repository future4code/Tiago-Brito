import { Button, TextField } from '@material-ui/core'
import React from 'react'
import { InputsContainer } from './styled'
import useForm from '../../hooks/useForm'
import { useHistory } from 'react-router-dom'
import { login } from '../../services/user'

const LoginForm = ({setLoginButtonText}) =>{
    const history = useHistory()
    const [form, onChange, clear] = useForm({email:'', password:''})
    const submitLogin = (event) =>{
        event.preventDefault()
        login(form, clear, history, setLoginButtonText)
    }

    return (
            <InputsContainer>
                <form onSubmit={submitLogin}>
                    <TextField
                        name={'email'}
                        type={'email'}
                        value={form.email}
                        onChange={onChange}
                        label={'e-mail'}
                        variant={'outlined'}
                        required
                        fullWidth
                        margin={'normal'}
                    />

                    <TextField
                        name={'password'}
                        type={'password'}
                        value={form.password}
                        onChange={onChange}
                        label={'senha'}
                        variant={'outlined'}
                        required
                        fullWidth
                        margin={'normal'}
                    />

                    <Button
                        type={'submit'}
                        variant={'contained'}
                        color={'primary'}
                        fullWidth
                    >Entrar</Button>
                </form>
            </InputsContainer>
    )
}

export default LoginForm