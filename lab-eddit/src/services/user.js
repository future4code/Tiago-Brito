import axios from 'axios'
import {BASE_URL} from '../constants/url'
import { goToAddPostPage } from '../routes/coordinator'

export const login = (body, clear, history, setLoginButtonText) => {
    axios.post(`${BASE_URL}/login`, body)
    .then ((res) => {
        localStorage.setItem('token', res.data.token)
        clear()
        goToAddPostPage(history)
        setLoginButtonText('Logout')
    })
    .catch((err) => {
        alert(err.response.data.message)
    })

}

export const signUp = (body, clear, history, setLoginButtonText) => {
    axios.post(`${BASE_URL}/signup`, body)
    .then((res) => {
        localStorage.setItem('token', res.data.token)
        clear()
        goToAddPostPage(history)
        setLoginButtonText('Logout')
    })
    .catch((err) => alert(err.response.data.message)
    )
}