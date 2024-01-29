import React, { useEffect, useState } from "react";
import { useNavigate, useLocation, useParams } from "react-router-dom";
import NavButtons from "../components/navButtons";
import FormGReceta from "../components/formGReceta";
import FormImg from "../components/formImg";
import FormPasos from "../components/formPasos";
import Preview from "../components/preview";
import BarraProgreso from "../components/BarraProgreso";
import apiReceta from "../components/api/apiRecetas";

const CrearReceta = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { id } = useParams();
  const [DatosReceta, setDatosReceta] = useState([]);
  const [ingredientes, setingredientes] = useState([]);
  const [pasos, setpasos] = useState([]);
  const [img, setimg] = useState();
  const [pasoActual, setPasoActual] = useState(0);
  const [edit, setEdit] = useState(false);

  const datoPorPaso = [DatosReceta, img, ingredientes, pasos];

  useEffect(() => {
    if (location.pathname.includes("editarReceta")) {
      setEdit(true);
      apiReceta.getRecipeDetails(id).then((res) => {
        const DatosReceta = {
          Nombre: res.Nombre_receta,
          CantidadTotal: [res.CantidadTotal[0], res.CantidadTotal[1]],
        };
        console.log(typeof res.img);
        setDatosReceta(DatosReceta);
        setimg(res.img);
        setingredientes(res.ingredientes);
        setpasos(res.pasos);
      });
    }
  }, [id, location]);

  const comprobarPaso = () => {
    if (!datoPorPaso?.[pasoActual] || datoPorPaso?.[pasoActual]?.length === 0) {
      alert(`El paso ${pasoActual + 1} no ha sido completado`);
    } else {
      if (pasoActual < pasosForm.length - 1) setPasoActual(pasoActual + 1);
    }
  };

  const AgregarReceta = () => {
    let Receta = new FormData();
    Receta.append("Nombre_receta", DatosReceta.Nombre);
    Receta.append("CantidadTotal", JSON.stringify(DatosReceta.CantidadTotal));
    Receta.append("ingredientes", JSON.stringify(ingredientes));
    Receta.append("pasos", JSON.stringify(pasos));
    Receta.append("img", img);

    apiReceta.createRecipe(Receta).then((Response) => {
      if (Response.status === 201) {
        alert("Receta Creada Exitosamente");
        setDatosReceta([]);
        setingredientes([]);
        setpasos([]);
        setimg("");
        return navigate("/ver");
      }
    });
  };

  const EditarReceta = () => {
    let Receta = new FormData();
    Receta.append("Nombre_receta", DatosReceta.Nombre);
    Receta.append("CantidadTotal", JSON.stringify(DatosReceta.CantidadTotal));
    Receta.append("ingredientes", JSON.stringify(ingredientes));
    Receta.append("pasos", JSON.stringify(pasos));
    Receta.append("img", JSON.stringify(img));

    for (const pair of Receta.entries()) {
      console.log(pair[0], pair[1]);
    }
    apiReceta.updateRecipe(id, Receta).then((Response) => {
      if (Response.status === 200) {
        alert("Receta Creada Exitosamente");
        setDatosReceta([]);
        setingredientes([]);
        setpasos([]);
        setimg("");
        return navigate("/ver");
      }
    });
  };

  const pasosForm = [
    <FormGReceta
      DatosReceta={DatosReceta}
      Agregar={(datos) => {
        setDatosReceta(datos);
      }}
      fIR="Nombre de Receta"
      sIR="Cantidad Total"
    />,
    <FormImg
      savedImg={img}
      Agregar={(imagen) => {
        setimg(imagen);
      }}
    />,
    <>
      <FormGReceta
        Agregar={(ingrediente) => {
          setingredientes([...ingredientes, ingrediente]);
        }}
        fIR="Nombre de Ingrediente"
        sIR="Cantidad"
        type="ing"
      />
      {ingredientes.length > 0 && (
        <Preview
          Datos={ingredientes}
          lista="Ingredientes"
          Borrar={(borrador) => {
            setingredientes(borrador);
          }}
        />
      )}
    </>,
    <>
      <FormPasos
        Agregar={(paso) => {
          setpasos([...pasos, paso]);
        }}
      />
      {pasos.length > 0 && (
        <Preview
          Datos={pasos}
          lista="Pasos"
          Borrar={(borrador) => {
            setpasos(borrador);
          }}
        />
      )}
    </>,
    <div className="displays">
      {(ingredientes.length > 0 || pasos.length > 0 || img) && (
        <h1>Vista Previa {DatosReceta.Nombre && "de " + DatosReceta.Nombre}</h1>
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
    </div>,
  ];

  return (
    <div className="Container">
      {/* <FormGReceta
        Agregar={(datos) => {
          setDatosReceta(datos);
        }}
        fIR="Nombre de Receta"
        sIR="Cantidad Total"
      />
      <FormImg
        Agregar={(imagen) => {
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
      /> */}

      {pasosForm[pasoActual]}

      <NavButtons active="crear">
        {pasoActual < pasosForm.length - 1 && (
          <button className="Button" onClick={() => comprobarPaso()}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="icon icon-tabler icon-tabler-arrow-right"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              fill="none"
              linecap="round"
              linejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M5 12l14 0" />
              <path d="M13 18l6 -6" />
              <path d="M13 6l6 6" />
            </svg>
          </button>
        )}

        {pasoActual > 0 && (
          <button
            className="Button"
            onClick={() => pasoActual > 0 && setPasoActual(pasoActual - 1)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="icon icon-tabler icon-tabler-arrow-left"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              fill="none"
              linecap="round"
              linejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M5 12l14 0" />
              <path d="M5 12l6 6" />
              <path d="M5 12l6 -6" />
            </svg>
          </button>
        )}

        {pasoActual === pasosForm.length - 1 && (
          <button
            className="Button"
            onClick={() => {
              !edit ? AgregarReceta() : EditarReceta();
            }}
          >
            <img
              src="https://cdn-icons-png.flaticon.com/512/4743/4743125.png"
              alt=""
            />
          </button>
        )}
      </NavButtons>

      <BarraProgreso numeroPasos={pasosForm.length} pasoActual={pasoActual} />
    </div>
  );
};

export default CrearReceta;
