import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import axion from 'axios';
import Table from 'react-bootstrap/Table';

function Szobaktablazata() {
    const [data, setdata] = useState([]);
    axios.get("http://localhost:3001/szobak")
      .then((response) => {
        setdata(response.data);
      })
      .catch((err) => {
        console.log(err);
      });

    return (
        <>
            <Table striped bordered hover>
            <thead>
                <tr>

                </tr>
            </thead>
            <tbody>

            </tbody>
            </Table>
        </>
    )
}

export default Szobaktablazata
