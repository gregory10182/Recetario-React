import React from "react";
import { useState } from "react";

const FormPasos = ({ Agregar }) => {
  const [paso, setPaso] = useState("");

  const agregarPaso = () => {
    if (paso) {
      Agregar(paso);
      setPaso("");
      alert("Paso agregado exitosamente");
    } else {
      alert("No se pudo agregar el paso porque no ha escrito");
    }
  };

  return (
    <div className="Card">
      <p>Paso:</p>
      <div className="Input">
        <textarea
          onChange={(e) => {
            setPaso(e.target.value);
          }}
          name=""
          id=""
          cols="30"
          rows="10"
          value={paso}
        ></textarea>
      </div>

      <button
        className="Agregar"
        onClick={() => {
          agregarPaso();
        }}
      >
        Agregar
      </button>
    </div>
  );
};

export default FormPasos;
