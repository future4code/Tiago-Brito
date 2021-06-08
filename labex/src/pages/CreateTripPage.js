import {useHistory} from 'react-router-dom'
import useProtectedPage from '../hooks/useProtectedPage'
import {goToAdminHomePage} from '../routes/coordinator'

function CreateTripPage() {
    const history = useHistory()
    useProtectedPage()
    
    return (
        <div>
            CreateTrip
            <button onClick={() => goToAdminHomePage(history)}>Voltar</button>
            <button>Criar</button>
        </div>
    );
}

export default CreateTripPage;