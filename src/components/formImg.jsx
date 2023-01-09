import React from "react";
import { useState } from "react";
import Inputs from "./Inputs";

const FormImg = ({ Agregar }) => {
  const [Img, setImg] = useState("");

  const AgregarImg = (File) => {
    setImg(File);
    console.log(Img);
  };

  return (
    <div className="Card">
      <p>Imagen</p>
      <Inputs Type="File" setDato={AgregarImg} />
      <button
        className="Agregar"
        onClick={() => {
          Agregar(Img);
        }}
      >
        Agregar
      </button>
    </div>
  );
};

export default FormImg;
