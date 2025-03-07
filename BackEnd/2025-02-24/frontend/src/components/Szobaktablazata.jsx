import { useState, useEffect} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import Table from 'react-bootstrap/Table';
import { use } from 'react';


function Szobaktablazata() {
    const [data, setdata] = useState([]);
    const [szobak, setSzobak] = useState(0);

    useEffect(() => {
        axios.get("http://localhost:3001/szobak")
        .then((response) => {
          setdata(response.data);

          const osszesFerohely = response.data.reduce((sum, szoba) => sum + szoba.agy, 0);
          setSzobak(osszesFerohely);
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
                  <td>{szoba.agy} ágyas</td>
                </tr>
                )}
            </tbody>
            </Table>
            <strong>A házban összesen {szobak} fő fér el.</strong>
        </>
    )
}

export default Szobaktablazata
