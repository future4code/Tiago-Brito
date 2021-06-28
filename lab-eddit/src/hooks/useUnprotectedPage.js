  
import { useHistory } from 'react-router-dom'
import { useEffect } from 'react'
import { goToAddPostPage } from '../routes/coordinator'

const useUnportectedPage = () => {
    const history = useHistory()
    useEffect(() => {
        const token = localStorage.getItem('token')
        if (token){
            goToAddPostPage(history)
        }
    }, [history])
}

export default useUnportectedPage