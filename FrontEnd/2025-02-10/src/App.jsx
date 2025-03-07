import {Routes, Route } from "react-router-dom";
import {Home, About, Contact, Services}  from './components/pages';
import './App.css'


function App() {
    return (
        <>
        <div className='App'>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/about' element={<About />} />
                <Route path='/contact' element={<Contact />} />
                <Route path='/services' element={<Services />} />
            </Routes>
        </div>
     </>
    )
}

export default App