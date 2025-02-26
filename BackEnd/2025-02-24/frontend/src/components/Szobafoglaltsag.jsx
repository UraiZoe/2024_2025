import { useState, useEffect} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import Form from 'react-bootstrap/Form';
import { use } from 'react';
import { useNavigate } from 'react-router-dom';

const Szobakfoglaltsaga = (props) => {
    const [data, setdata] = useState([]);
    const [selectedRoom, setSelectedRoom] = useState('');
    let navigate = useNavigate()
    useEffect(() => {
        axios.get("http://localhost:3001/SelectSzobak")
        .then((response) => {
          setdata(response.data);
        })
        .catch((err) => {
          console.log(err);
        });
    })
    const oldalAtiranyit = (event) => {
        event.preventDefault();
        navigate('/Valasztottszoba/' + selectedRoom);
    }

    return (
        <>
            <div>
                <form onSubmit={oldalAtiranyit}>
                <select value={selectedRoom} onChange={e => setSelectedRoom(e.target.value)}>
                {data.map(szoba =>
                        <option value={szoba.szazon}>{szoba.sznev}</option>
                    )}
                </select>
                <button type="submit">Küldés</button>
                </form>
            </div>
        </>
    )
}

export default Szobakfoglaltsaga
