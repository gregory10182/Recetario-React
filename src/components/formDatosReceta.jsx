import React from "react";
import { useState } from "react";
import Inputs from "./Inputs";

const FormDatosReceta = ({ Agregar }) => {
  const [Nombre, setNombre] = useState("");
  const [Cantidad, setCantidad] = useState("");
  const [Unidad, setUnidad] = useState("");

  const AgregarDatosReceta = () => {
    let DatosReceta = {
      Nombre: Nombre,
      CantidadTotal: [Cantidad, Unidad],
    };

    Agregar(DatosReceta);
  };

  return (
    <div className="Card">
      <p>Nombre de Receta</p>
      <Inputs
        setDato={(nombre) => {
          setNombre(nombre);
        }}
      />
      <p>Cantidad Total</p>
      <Inputs
        Type="Doble"
        setDato1={(cantidad) => {
          setCantidad(cantidad);
        }}
        setDato2={(unidad) => {
          setUnidad(unidad);
        }}
      />

      <button
        className="Agregar"
        onClick={() => {
          AgregarDatosReceta();
        }}
      >
        Agregar
      </button>
    </div> //Fin de DatosReceta
  );
};

export default FormDatosReceta;
