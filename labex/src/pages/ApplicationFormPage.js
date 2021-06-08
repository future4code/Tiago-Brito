import { useHistory } from "react-router";
import { goToListTripPage} from '../routes/coordinator'

function ApplicationFormPage() {
    const history = useHistory()

    return (
        <div>
            ApplyForm
            <button onClick={() => goToListTripPage(history)}>Voltar</button>
            <button>Enviar</button>
        </div>
    );
}

export default ApplicationFormPage;