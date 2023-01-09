import React from "react";
import { useState } from "react";
import Inputs from "./Inputs";

const FormIngredientes = ({ Agregar }) => {
  const [Nombre, setNombre] = useState("");
  const [Cantidad, setCantidad] = useState("");
  const [Unidad, setUnidad] = useState("");

  const AgregarIngrediente = () => {
    let Ingrediente = {
      Nombre: Nombre,
      Cantidad: [Cantidad, Unidad],
      Texto: "",
    };

    if (Unidad === "") {
      if (Nombre.charAt(Nombre.length - 1) === "s") {
        Ingrediente.Texto = Cantidad + " " + Nombre;
      } else {
        Ingrediente.Texto = Cantidad + " " + Nombre + "s";
      }
    } else {
      Ingrediente.Texto = Cantidad + " " + Unidad + " de " + Nombre;
    }

    Agregar(Ingrediente);
  };

  return (
    <div className="Card">
      <p>Nombre de Ingrediente: </p>
      <Inputs setDato={setNombre} />
      <p>Cantidad: </p>
      <Inputs Type="Doble" setDato1={setCantidad} setDato2={setUnidad} />
      <button
        className="Agregar"
        onClick={() => {
          AgregarIngrediente();
        }}
      >
        Agregar
      </button>
    </div>
  );
};

export default FormIngredientes;
