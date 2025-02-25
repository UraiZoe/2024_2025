import { useState, useEffect} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import Table from 'react-bootstrap/Table';
import { use } from 'react';

function Szobakkihasznaltsaga() {
    const [data, setdata] = useState([]);
    useEffect(() => {
        axios.get("http://localhost:3001/SzobakFoglaltsaga")
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
                  <th>Vendégek száma</th>
                  <th>Vendégéjszakák száma</th>
                </tr>
            </thead>
            <tbody>
              {data.map(szoba =>
                <tr>
                  <td>{szoba.sznev}</td>
                  <td>{szoba.vendegekszama}</td>
                  <td>{szoba.szallasiIdo}</td>
                </tr>
                )}
            </tbody>
            </Table>
        </>
    )
}

export default Szobakkihasznaltsaga
