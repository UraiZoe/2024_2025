//használt elemek
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react'
import axios from "axios"
import 'tachyons'
//css
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css'
//Elemek
import { Container } from 'react-bootstrap';
import Table from 'react-bootstrap/Table';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
//Képek
import ketAgyas from "/img/ketagyas.jpg";
//Komponensek
import Szobaktablazata from '../components/Szobaktablazata';




function Valasztottszoba() {
  const { id } = useParams()
  const [vendegek, setVendegek] = useState([]);
  useEffect(() => {
      axios.get(`http://localhost:3001/Szobafoglalatsag/` + id)
          .then(function (response) {
              setVendegek(response.data);
              //console.log(response);
          })
          .catch(function (error) {
              console.log(error);
          });
  }, []);
  console.log(vendegek);
  
  return (
    <>
     <Container>
        <div>
            <Row>
                <Col>
                <article class="cf ph3 ph8-ns pv4">
                    <header class="fn fl-ns w-90-ns pr4-ns">
                        <h3 class="mb3 mt0 lh-title">Falusi szálláshely fajtái</h3>
                    </header>
                    <div class="w-80-ns">
                        <ul class="lh-copy measure mt4 mt0-ns">
                            <li>Vendégszoba: a vendégek rendelkezésére bocsátható önálló lakóegység, amely egy lakóhelyiségből, és a minősítéstől függően a hozzátartozó mellékhelyiségekből áll.</li>
                            <li>Lakrész: önálló épület kettő, illetve több szobából álló lehatárolt része a minősítéstől függően hozzátartozó mellékhelyiségekkel együtt</li>
                            <li>Vendégház: önálló épület, több szobával, mellékhelyiségekkel és főzési lehetőséggel rendelkező lakó-, illetve üdülőegység, családok vagy kisebb csoportok elszállásolására.</li>
                            <li>Sátorozóhely: csak valamelyik falusi szálláshely típus mellett, mintegy azt kiegészítve üzemeltethető az előírt feltételek megléte esetén. Pl.: falusi vendégház sátorozóhellyel.</li>
                        </ul>
                        <img src={ketAgyas} alt="Két ágyas"/>
                    </div>
                </article>
                </Col>
                <Col>
                <article id="doboz" class="cf ph3 ph8-ns pv4 bg-green">
                    <header class="fn fl-ns w-90-ns pr4-ns">
                        <h3 class="mb3 mt0 lh-title">A hét törpe fogadó</h3>
                    </header>
                    <div class="w-80-ns">
                        <Szobaktablazata/>
                        <br/>
                        <strong>Feszültségünk:</strong><br/>
                        <ol>
                            <li>Ruhásszekrény</li>
                            <li>Saját fürdőszoba zuhanytálca</li>
                            <li>WC (fürdőszobával egyben)</li>
                        </ol>
                    </div>
                </article>
                </Col>
           </Row>
        </div>
      </Container>
      <Table striped bordered hover>
            <thead>
                <tr>
                  <th>Szoba neve</th>
                  <th>Érkezés dátuma</th>
                  <th>Távozás dátuma</th>
                </tr>
            </thead>
            <tbody>
              {vendegek.map(valasztott =>
                <tr>
                  <td>{valasztott.vnev}</td>
                  <td>{valasztott.erk}</td>
                  <td>{valasztott.tav}</td>
                </tr>
                )}
            </tbody>
            </Table>
    </>
  )
}

export default Valasztottszoba
