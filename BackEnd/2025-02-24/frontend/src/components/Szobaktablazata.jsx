import { useState, useEffect} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import Table from 'react-bootstrap/Table';
import { use } from 'react';

function Szobaktablazata() {
    const [data, setdata] = useState([]);
    useEffect(() => {
        axios.get("http://localhost:3001/szobak")
        .then((response) => {
          setdata(response.data);
        })
        .catch((err) => {
          console.log(err);
        });
    })


    return (
        <>
            <Table striped bordered hover>
            <thead>
                <tr>
                  <th>Szoba neve</th>
                  <th>Ágyak száma</th>
                </tr>
            </thead>
            <tbody>
              {data.map(szoba =>
                <tr>
                  <td>{szoba.sznev}</td>
                  <td>{szoba.agy}</td>
                </tr>
                )}
            </tbody>
            </Table>
        </>
    )
}

export default Szobaktablazata
