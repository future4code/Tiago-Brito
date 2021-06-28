import { useHistory } from 'react-router-dom'
import { useEffect } from 'react'
import { goToSignInPage } from '../routes/coordinator'

const useProtectedPage = () => {
    const history = useHistory()
    useEffect (() => {
        const token = localStorage.getItem('token')
        if (!token){
            goToSignInPage(history)
        }
    }, [history])
}

export default useProtectedPage