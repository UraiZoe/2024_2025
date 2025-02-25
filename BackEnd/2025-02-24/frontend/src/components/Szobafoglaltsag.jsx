import { useState, useEffect} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import Form from 'react-bootstrap/Form';
import { use } from 'react';

function Szobakfoglaltsaga() {
    const [data, setdata] = useState([]);
    useEffect(() => {
        axios.get("http://localhost:3001/SelectSzobak")
        .then((response) => {
          setdata(response.data);
        })
        .catch((err) => {
          console.log(err);
        });
    })


    return (
        <>
            <div>
                <Form.Select arial-label="Default select example">
                    {data.map(szoba => 
                        <option value={szoba.szazon}> {szoba.sznev}</option>
                    )}

                </Form.Select>
                <button type="submit">Küldés</button>
            </div>
        </>
    )
}

export default Szobakfoglaltsaga
