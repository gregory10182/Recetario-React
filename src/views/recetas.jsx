import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import apiReceta from "../components/api/apiRecetas";
import NavButtons from "../components/navButtons";

const Recetas = () => {
  const [recetas, setrecetas] = useState([]);

  useEffect(() => {
    apiReceta.getAll().then((res) => {
      setrecetas(res);
      console.log(res);
    });
  }, []);

  return (
    <div className="Container">
      <div className="recetas">
        {(recetas &&
          recetas.map((receta, i) => (
            <Link
              key={receta._id}
              className="receta"
              to={"/detalleReceta/" + receta._id}
            >
              <p>{receta.Nombre_receta}</p>
              <img src={receta.img.secure_url} alt={receta.Nombre_receta} />
            </Link>
          ))) || <p>No hay recetas</p>}
      </div>

      <NavButtons active="ver" />
    </div>
  );
};

export default Recetas;
