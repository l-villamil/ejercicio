import logo from './logo.svg';
import './App.css';
import Espacios from './Espacios.js';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Detalle from "./Detalle.js"
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Espacios/>}/>
        <Route path="/espacios" element={<Espacios/>}/>
        <Route path="/espacios/:espacioId" element={<Detalle />}/>

      </Routes>
    </BrowserRouter>
  );
}

export default App;
