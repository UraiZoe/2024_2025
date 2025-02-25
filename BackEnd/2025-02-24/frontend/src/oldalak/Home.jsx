import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'tachyons'
import { Container } from 'react-bootstrap';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import logoKep from "/img/logo.png"
import holloKo from "/img/holloko_masolata.jpg"
import ketAgyas from "/img/ketagyas.jpg"
import Szobaktablazata from '../components/Szobaktablazata';

function Home() {

  return (
    <>
     <Container>
        <div>
            <Row>
                <Col>
                <article class="cf ph3 ph8-ns pv4">
                    <header class="fn fl-ns w-90-ns pr4-ns">
                        <h3 class="mb4 mt0 lh-title">Napraforgós Nemzeti Tanúsító Védjegy célja</h3>
                    </header>
                    <div class="w-80-ns">
                        <p class="lh-copy measure mt4 mt0-ns">
                        A falusi szálláshelyek napraforgós Nemzeti Tanúsító Védjegye a FATOSZ által több mint tíz éve létrehozott,
                        és működtetett minősítési rendszer alapjaira épülve 2011 óta a minőségi falusi turizmus szimbóluma.
                        A védjegy alapvető célja, hogy – összhangban az egyes szálláshelyek működtetéséről szóló 239/2009. Korm.
                        rendeletben foglaltakkal – garanciát nyújtson a szálláshely szolgáltatás minőségének megfelelő színvonalára. 
                        A falusi vendégházak 1-4 napraforgós besorolást nyerhetnek el a külső, belső megjelenés, a felszereltség, a
                        szolgáltatások színvonala, valamint a szállásadó személyes felkészültségének, szakmai képzettségének függvényében.
                        </p>
                        <a href="https://falusiturizmus.eu/">Tájékoztató oldal</a>
                        <img src={logoKep} alt="Logo"/>
                        <p>p </p>
                        <img src={holloKo} alt="Hollo kő"/>
                    </div>
                </article>
                </Col>
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
                <article class="cf ph3 ph8-ns pv4">
                    <header class="fn fl-ns w-90-ns pr4-ns">
                        <h3 class="mb3 mt0 lh-title">A hét törpe fogadó</h3>
                    </header>
                    <div class="w-80-ns">
                        <Szobaktablazata/>
                        <b>Feszültségünk:</b><br/>
                        
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
    </>
  )
}

export default Home
