import './App.css';
import CrearReceta from './components/crearReceta';
import Recetas from './components/recetas';
import DetalleReceta from './components/detalleReceta';
import { Route, Routes } from 'react-router-dom';



function App() {
  return (
    <div className="App">
      <div className="logo">
          <img src="https://res.cloudinary.com/dmf4n14wf/image/upload/v1673472860/Iconos%20y%20logos/Diana_Cocina_sin_fondo_nu1gco.png" alt="" />
      </div>
      <Routes>
        <Route path='/' element={<CrearReceta />} />
        <Route path='/ver' element={<Recetas />} />
        <Route path='/detalleReceta/:id' element={<DetalleReceta />} />
      </Routes>

      

    </div>
  );
}

export default App;
