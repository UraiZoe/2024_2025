import { useState, useEffect} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import Form from 'react-bootstrap/Form';
import { use } from 'react';

function Valasztott() {
    const [data, setdata] = useState([]);
    useEffect(() => {
        axios.get("http://localhost:3001/torpe/1")
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
                  <th>Érkezés dátuma</th>
                  <th>Távozás dátuma</th>
                </tr>
            </thead>
            <tbody>
              {data.map(valasztott =>
                <tr>
                  <td>{valasztott.vnev}</td>
                  <td>{valasztott.erk} fő</td>
                  <td>{valasztott.tav} éjszaka</td>
                </tr>
                )}
            </tbody>
            </Table>
        </>
    )
}

export default Valasztott
