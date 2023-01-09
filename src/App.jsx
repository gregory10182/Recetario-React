import './App.css';
import CrearReceta from './components/crearReceta';
import Recetas from './components/recetas';
import DetalleReceta from './components/detalleReceta';
import { Route, Routes } from 'react-router-dom';



function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<CrearReceta />} />
        <Route path='/ver' element={<Recetas />} />
        <Route path='/detalleReceta/:id' element={<DetalleReceta />} />
      </Routes>

      

    </div>
  );
}

export default App;
