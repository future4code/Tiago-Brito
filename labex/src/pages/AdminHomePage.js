import { useHistory } from "react-router";
import useProtectedPage from '../hooks/useProtectedPage'
import {goToHomePage, goToCreateTripPage, goToTripDetailPage, goToLoginPage} from '../routes/coordinator'

function AdminHomePage() {
    const history = useHistory()
    useProtectedPage()


    const logout = () => {
        window.localStorage.removeItem('token')
        goToLoginPage(history)
    }

    return (
        <div>
            AdminHomePage
            <button onClick={() => goToHomePage(history)}>Voltar</button>
            <button onClick={() => goToCreateTripPage(history)}>Criar Viagem</button>
            <button onClick={logout}>Logout</button>
            <button onClick={() => goToTripDetailPage(history)}>"Viagem Criada"</button>
        </div>
    );
}

export default AdminHomePage;