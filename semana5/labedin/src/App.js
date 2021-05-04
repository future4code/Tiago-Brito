import React from 'react';
import './App.css';
import CardGrande from './components/CardGrande/CardGrande';
import ImagemButton from './components/ImagemButton/ImagemButton';
import CardPequeno from './components/CardPequeno/CardPequeno';
import Foto from './img/Foto.jpg';
import Email from './img/Email.png';
import Endereco from './img/endereco.png';
import Itx from './img/itx-logo.png';
import Equinix from './img/equinix-logo.png';
import styled from "styled-components"

const Container = styled.div`
display: flex;
    align-items: center;
    border: 1px solid black;
    padding: 20px 10px;
    margin-bottom: 10px;
    height: 200px;
`
function App() {
  return (
    <div className="App">
      <div className="page-section-container">
        <h2>Dados pessoais</h2>
        <CardGrande 
          imagem={Foto}
          nome="Tiago Pereira de Brito" 
          descricao="Oi, eu sou o Tiago.Profissional de TI dedicado com 7 anos de experiência. Tenho experiência em redes, sistemas operacionais, cabeamento estruturado e hardware. Atualmente estudante desenvolvimento Web na escola Labenu e com isso buscar uma oportunidade de Desenvolvedor em um futuro proximo."
        />
        
        <ImagemButton 
          imagem="https://image.flaticon.com/icons/png/512/117/117472.png" 
          texto="Ver mais"
        />
        <CardPequeno 
          imagem={Email} 
          nome="E-mail" 
          descricao="tiago000@gmail.com" 
        />
          <CardPequeno 
          imagem={Endereco}
          nome="Endereço" 
          descricao="Avenida Antonio Bardella, 13." 
        />

      </div>

      <div className="page-section-container">
        <h2>Experiências profissionais</h2>
        <CardGrande 
          imagem={Equinix}
          nome="Equinix" 
          descricao="Resolução de problemas em servidores, switches e sistemas de cliente, painéis de patch de cabos, instalação de sistemas operacionais, instalação de máquinas cliente de servidores blade Dell, configuração de desktops remotos, atualização de sistemas, switches de canal de fibra, construções e reparos de estações de trabalho." 
        />
        
        <CardGrande 
          imagem={Itx}
          nome="ITX Mídia Online" 
          descricao="Project Intern.•	Fornecendo suporte físico e virtual por meio de chamados técnicos em português e inglês no ambiente do data center. 
          •	Informava e solicitava feedback ao time de desenvolvimento.
          •	Fornecia suporte aos clientes e participava do desenvolvimento de novos sites, páginas, menus e layouts.
          " 
        />
      </div>

      <div className="page-section-container">
        <h2>Minhas redes sociais</h2>
        <ImagemButton 
          imagem="https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook-logo-3.png" 
          texto="Facebook" 
        />        

        <ImagemButton 
          imagem="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png" 
          texto="Twitter" 
        />        
      </div>
    </div>
  );
}

export default App;
