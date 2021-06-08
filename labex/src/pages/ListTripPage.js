import { useHistory } from "react-router";
import {goToApplicationFormPage, goToHomePage} from '../routes/coordinator'

function ListTripPage() {
    const history = useHistory()

    return (
        <div>
            ListTrip
            <button onClick={() => goToHomePage(history)}>Voltar</button>
            <button onClick={() => goToApplicationFormPage(history)}>Inscreva-se</button>
        </div>
    );
}

export default ListTripPage;