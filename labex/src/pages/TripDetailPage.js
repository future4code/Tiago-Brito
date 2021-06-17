import axios from 'axios'
import {useEffect, useState} from 'react'
import {useHistory} from 'react-router-dom'
import useProtectedPage from '../hooks/useProtectedPage'
import {goToAdminHomePage} from '../routes/coordinator'

function TripDetailPage() {
    const history = useHistory()
    useProtectedPage()
    
    const [trip, setTrip] = useState({})

    useEffect(() => {
        getTripDetail()
    },[])

    const getTripDetail = async(id) => {
        const token = window.localStorage.getItem('token')

        try{
            const res = await axios.get(`https://us-central1-labenu-apis.cloudfunctions.net/labeX/darvas/trip/${id}`, {
                headers: {
                    auth: token
                }
            })
            setTrip(res.data.trip)
        }catch(error){
            console.log(error)
        }
    }
    
    return (
        <div>
            TripDetail
            <button onClick={() => goToAdminHomePage(history)}>Voltar</button>
        </div>
    );
}

export default TripDetailPage;