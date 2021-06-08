import {useHistory} from 'react-router-dom'
import {useEffect} from 'react'
import { goToLoginPage } from '../routes/coordinator'

export const useProtectedPage = () => {
    const history = useHistory()
    useEffect(() => {
        const token = window.localStorage.getItem('token')
            if (!token){ // if (token === null)
                goToLoginPage()
            } 
    },[history])
}

export default useProtectedPage