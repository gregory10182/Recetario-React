import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import apiGet from "./api/apiGetRecetas";
import NavButtons from "./navButtons";

const Recetas = () => {
  const [recetas, setrecetas] = useState([]);

  useEffect(() => {
    apiGet().then((res) => {
      setrecetas(res);
    });
  }, []);

  return (
      <div className="Container">
        <h1>Recetas</h1>

        {(recetas &&
          recetas.map((receta, i) => (
            <Link key={receta._id} className="receta" to={"/detalleReceta/" + receta._id}>
                <p>{receta.Nombre_receta}</p>
                <img src={receta.img.secure_url} alt={receta.Nombre_receta} />
            </Link>
          ))) || <p>No hay recetas</p>}

        <NavButtons active="ver" /> 
      </div>

      
  );
};

export default Recetas;
