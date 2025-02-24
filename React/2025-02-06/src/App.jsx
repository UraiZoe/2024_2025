import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import { BrowserRouter, Router } from 'react-router-dom';

function App() {

  return (
    <>
      <h1>Tz</h1>
      <div>
        <BrowserRouter>        
          <Router>
            <p>Ez a fő oldal.</p>
          </Router>
        </BrowserRouter>
      </div>
    </>
  )
}

export default App
