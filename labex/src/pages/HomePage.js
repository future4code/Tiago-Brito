import { useHistory } from "react-router";
import {goToListTripPage, goToLoginPage} from '../routes/coordinator'

function HomePage() {
    const history = useHistory()

    return (
        <div>
            Home
            <button onClick={() => goToListTripPage(history)}>Suas Viagens</button>
            <button onClick={() => goToLoginPage(history)}>Área do Admin</button>
        </div>
    );
}

export default HomePage;