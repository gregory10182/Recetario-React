import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import apiGetReceta from "./api/apiGetReceta";
import NavButtons from "./navButtons";

const DetalleReceta = () => {
  let { id } = useParams();

  
  const [Nombre, setNombre] = useState();
  const [CantidadTotal, setCantidadTotal] = useState([]);
  const [ingredientes, setingredientes] = useState([]);
  const [pasos, setpasos] = useState([]);
  const [cantidadMod, setcantidadMod] = useState(0);

  useEffect(() => {
    apiGetReceta(id).then((res) => {
      setNombre(res.Nombre_receta);
      setCantidadTotal(res.CantidadTotal);
      setingredientes(res.ingredientes);
      setpasos(res.pasos);

    });
  }, [id]);





  const ModificarTotal = () => {

      let escala = cantidadMod / CantidadTotal[0]
      let ingredientesMod = ingredientes.map((ingrediente) => {
        ingrediente.Cantidad[0] = (ingrediente.Cantidad[0] * escala).toFixed(2)
        console.log(ingrediente)
        ingrediente.Texto = ingrediente.Cantidad[0] + " " + ingrediente.Cantidad[1] + " de " + ingrediente.Nombre
        return ingrediente
      })
      console.log(ingredientesMod)
      setingredientes(ingredientesMod)
      setCantidadTotal([cantidadMod])
}

  return (
    <center>
      <div className="Container">
        <h1>{Nombre}</h1>

        <div className="datos">
          <div className="ingredientes">
            <h2>Ingredientes</h2>
            {ingredientes &&
              ingredientes.map((ingrediente, i) => (
                <p key={i}>{ingrediente.Texto}</p>
              ))}
          </div>

          <div className="pasos">
            <h2>Pasos</h2>
            {pasos &&
              pasos.map((paso, i) => (
                <p key={i}>{i + 1 + ". " + paso}</p>
              ))}
          </div>
        </div>

        <div className="CantidadTotal">
            <p>Cantidad Total:</p>
            <input type="number" defaultValue={CantidadTotal && CantidadTotal[0]} onChange={(e) => {
                setcantidadMod(e.target.value)            
            }} />
            <button onClick={() => {
              ModificarTotal()
            }}>Ajustar</button>
        </div>

        <NavButtons />
      </div>
    </center>
  );
};

export default DetalleReceta;
