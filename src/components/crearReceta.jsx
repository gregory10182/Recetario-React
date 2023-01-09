import React from "react";
import { useState } from "react";
import NavButtons from "./navButtons";
import FormDatosReceta from "./formDatosReceta";
import FormImg from "./formImg";
import FormIngredientes from "./formIngredientes";
import FormPasos from "./formPasos";
import Preview from "./preview";
import apiPost from "./api/apiPost";


const CrearReceta = () => {
  const [DatosReceta, setDatosReceta] = useState([]);
  const [ingredientes, setingredientes] = useState([]);
  const [pasos, setpasos] = useState([]);
  const [img, setimg] = useState();

  const AgregarReceta = () => {
    let Receta = new FormData();
    Receta.append("Nombre_receta", DatosReceta.Nombre);
    Receta.append("CantidadTotal", JSON.stringify(DatosReceta.CantidadTotal));
    Receta.append("ingredientes", JSON.stringify(ingredientes));
    Receta.append("pasos", JSON.stringify(pasos));
    Receta.append("img", img);

    apiPost(Receta);
  };

  return (
    <center>
      <div className="Container">
        <h1>Recetario de la Viejita</h1>
        <FormDatosReceta
          Agregar={(datos) => {
            setDatosReceta(datos);
          }}
        />
        <FormImg
          Agregar={(imagen) => {
            console.log(imagen);
            setimg(imagen);
          }}
        />
        <FormIngredientes
          Agregar={(ingrediente) => {
            setingredientes([...ingredientes, ingrediente]);
          }}
        />
        <FormPasos
          Agregar={(paso) => {
            setpasos([...pasos, paso]);
          }}
        />

        <div className="displays">
          {(ingredientes.length > 0 || pasos.length > 0 || img) && (
            <h1>
              Vista Previa {DatosReceta.Nombre && "de " + DatosReceta.Nombre}
            </h1>
          )}

          {ingredientes.length > 0 && (
            <Preview
              Datos={ingredientes}
              lista="Ingredientes"
              Borrar={(borrador) => {
                setingredientes(borrador);
              }}
            />
          )}

          {pasos.length > 0 && (
            <Preview
              Datos={pasos}
              lista="Pasos"
              Borrar={(borrador) => {
                setpasos(borrador);
              }}
            />
          )}

          {img && <Preview Type="img" Datos={img} />}
        </div>

        <NavButtons active="crear">
          {DatosReceta && ingredientes.length > 0 && pasos.length > 0 && img && (
            <button
              className="Button"
              onClick={() => {
                AgregarReceta();
              }}
            >
              Agregar Receta
            </button>
          )}
        </NavButtons>

        
        

      </div>
    </center>
  );
};

export default CrearReceta;
