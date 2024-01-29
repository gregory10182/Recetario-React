import React from "react";

const Preview = ({ Type, Datos, Borrar, lista }) => {
  if (Type === "img") {
    let img = "";
    if (!Datos?.secure_url) {
      img = URL.createObjectURL(Datos) || "";
    } else {
      img = Datos.secure_url;
    }

    return (
      <div className="display">
        <p>Imagen</p>
        <hr />
        <img className="image" src={img} alt="" />
      </div>
    );
  }
  return (
    <div className="display">
      <p>Lista de {lista}</p>
      <hr />
      {Datos.map((Dato, index) => {
        return (
          <div className="Informacion" key={index}>
            <p className="indice">{index + 1}</p>
            <p>{Dato.Texto || Dato}</p>
            <button
              onClick={() => {
                let borrador = Datos.filter((ingrediente, i) => i !== index);
                Borrar(borrador);
              }}
            >
              <img
                src="https://cdn-icons-png.flaticon.com/512/9283/9283099.png"
                alt=""
              />
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default Preview;
