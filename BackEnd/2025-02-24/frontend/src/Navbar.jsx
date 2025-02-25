import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container} from "react-bootstrap";
import navbarKep from "../public/img/top.jpg"
import "../src/Navbar.css"

function Navbar() {

  return (
    <>
    <div>
        <Container>
            <img id="navBarkep" src={navbarKep} alt=""/>
        </Container>
    </div>
    </>
  )
}

export default Navbar
