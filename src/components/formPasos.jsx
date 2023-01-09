import React from "react";
import { useState } from "react";
import Inputs from "./Inputs";

const FormPasos = ({ Agregar }) => {
  const [paso, setPaso] = useState("");

  const AgregarPaso = () => {
    Agregar(paso);
  };

  return (
    <div className="Card">
      <p>Paso:</p>
      <Inputs Type="TextArea" setDato={setPaso} />

      <button
        className="Agregar"
        onClick={() => {
          AgregarPaso();
        }}
      >
        Agregar
      </button>
    </div>
  );
};

export default FormPasos;
