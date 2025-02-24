import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './oldalak/Home'
import Regiok from './oldalak/Regiok'

function App() {

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/regiok' element={<Regiok/>} />
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
