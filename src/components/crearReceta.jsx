import React, { useState } from "react";
import NavButtons from "./navButtons";
import FormGReceta from "./formGReceta";
import FormImg from "./formImg";
import FormPasos from "./formPasos";
import Preview from "./preview";
// import apiPost from "./api/apiPost";
import apiReceta from "./api/apiRecetas";


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

    apiReceta.createRecipe(Receta)
    .then((Response) => {
      if(Response.status === 201){
        alert("Receta Creada Exitosamente")
        setDatosReceta([])
        setingredientes([])
        setpasos([])
        setimg("")
      }
    })
  };

  return (
      <div className="Container">
        
        <FormGReceta
          Agregar={(datos) => {
            setDatosReceta(datos);
          }}
          fIR="Nombre de Receta"
          sIR="Cantidad Total"
        />
        <FormImg
          Agregar={(imagen) => {
            console.log(imagen);
            setimg(imagen);
          }}
        />
        <FormGReceta
          Agregar={(ingrediente) => {
            setingredientes([...ingredientes, ingrediente]);
          }}
          fIR="Nombre de Ingrediente"
          sIR="Cantidad"
          type="ing"
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

          {img && <Preview Type="img" Datos={img} />}

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

          
        </div>

        <NavButtons active="crear">
          {DatosReceta && ingredientes.length > 0 && pasos.length > 0 && img && (
            <button
              className="Button"
              onClick={() => {
                AgregarReceta();
              }}
            >
              <img src="https://cdn-icons-png.flaticon.com/512/4743/4743125.png" alt="" />
            </button>
          )}
        </NavButtons>

        
        

      </div>
  );
};

export default CrearReceta;
