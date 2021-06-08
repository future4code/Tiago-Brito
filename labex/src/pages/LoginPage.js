import { useState } from "react"
import { useHistory } from "react-router"
import useProtectedPage from '../hooks/useProtectedPage'
import axios from 'axios'
import {goToHomePage, goToAdminHomePage} from '../routes/coordinator'

function LoginPage() {
    const history = useHistory()
    useProtectedPage()
    const [usermail, setUserMail] = useState('')
    const [password, setPassword] = useState('')

    const handleMail = (e) => {
        setUserMail(e.target.value)
    }

    const handlePassword = (e) => {
        setPassword(e.target.value)
    }

    const login = async () => {
        const body = {
            email: usermail,
            password: password
        }
        try{
            const res = await axios.post('https://us-central1-labenu-apis.cloudfunctions.net/labeX/darvas/login', body)
            console.log(res.data)
            goToAdminHomePage(history)
            window.localStorage.setItem('token', res.data.token)
            window.localStorage.setItem('user', JSON.stringify(res.data.user))
        }catch(error){
            console.log(error)
        }
    }


    return (
        <div>
            LogIn
            <input value={usermail} onChange= {handleMail} placeholder='email'/>
            <input value={password} onChange= {handlePassword} placeholder='senha'/>
            <button onClick={() => goToHomePage(history)}>Voltar</button>
            <button onClick={login} >Entrar</button>
        </div>
    );
}

export default LoginPage;