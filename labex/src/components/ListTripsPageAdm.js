import React, { useState, useEffect } from "react";
import axios from "axios";
import { Header,ButtonHeader,DivH1Header,H2Home,DivContainerList,CreateButton} from "./styled";
import { useProtectPage } from "./hooks/useProtectPage";
import { useHistory, useParams } from "react-router-dom";

function ListTripsPageAdm() {
  const { id } = useParams();
  const [trips, setTrips] = useState([]);
  const history = useHistory();

  const goToHomeAdm = () => {
    history.push("/homeadm");

  };

  const goToApproval = (tripId) => {
    history.push(`/aprovarinscricoes/${tripId}`);
  };

  useEffect(() => {
    getTrip();
  }, []);


  useProtectPage();

  

  const getTrip = () => {
    axios
      .get(
        `https://us-central1-labenu-apis.cloudfunctions.net/labeX/tiago-brito-paiva/trips/`,
        {
          headers: {
            auth: localStorage.getItem("token"),
          },
        }
      )
      .then((response) => {
        setTrips(response.data.trips);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  return (
    <DivContainerList>
      <Header>
        <DivH1Header>
          <h1>Labe-X</h1>
        </DivH1Header>
        <ButtonHeader onClick={goToHomeAdm}> Voltar para Home </ButtonHeader>
      </Header>
      <H2Home>Lista das Viagens Disponíveis</H2Home>

      {trips.length === 0 ? (
        <p>Nenhuma viagem cadastrada</p>
      ) : (
        trips.map(trip=> 
          <div>
            

            <p>Nome: {trip.name}</p>
            <p>Planeta: {trip.planet}</p>
            <p>Duração da viagem: {trip.durationInDays} dias</p>
            <p>Data da viagem: {trip.date}</p>
            <p>Descrição: {trip.description}</p>
            <br></br>
            <CreateButton onClick={() => goToApproval(trip.id)}>
              Aprovar inscrições
            </CreateButton>
          </div>
        ))
      }
    </DivContainerList>
  );
}

export default ListTripsPageAdm;
