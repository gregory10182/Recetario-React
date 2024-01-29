import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import apiReceta from "../components/api/apiRecetas";
import NavButtons from "../components/navButtons";
import { Link } from "react-router-dom";

const DetalleReceta = () => {
  let { id } = useParams();

  const [Nombre, setNombre] = useState();
  const [CantidadTotal, setCantidadTotal] = useState([]);
  const [ingredientes, setingredientes] = useState([]);
  const [pasos, setpasos] = useState([]);
  const [cantidadMod, setcantidadMod] = useState(0);
  const [check, setCheck] = useState(false);
  const [unitMode, toggleUnitMode] = useState(false);
  const [unidades, setUnidades] = useState(1);
  const [cantidadU, setCantidadU] = useState();

  useEffect(() => {
    apiReceta.getRecipeDetails(id).then((res) => {
      setNombre(res.Nombre_receta);
      setCantidadTotal(res.CantidadTotal);
      setingredientes(res.ingredientes);
      setpasos(res.pasos);
    });
  }, [id]);

  useEffect(() => {
    if (cantidadU !== 0) {
      setcantidadMod((unidades * cantidadU).toFixed());
    }
  }, [unidades, cantidadU]);

  const ModificarTotal = () => {
    if (cantidadMod > 0) {
      let escala = cantidadMod / CantidadTotal[0];
      let ingredientesMod = ingredientes.map((ingrediente) => {
        ingrediente.Cantidad[0] = parseFloat(ingrediente.Cantidad[0]) * escala;
        ingrediente.Texto =
          parseFloat(ingrediente.Cantidad[0]).toFixed() +
          " " +
          ingrediente.Cantidad[1] +
          " de " +
          ingrediente.Nombre;
        return ingrediente;
      });
      setingredientes(ingredientesMod);
      setCantidadTotal([cantidadMod]);
    } else {
      alert("Hay algun Campo Vacio");
    }
  };

  return (
    <div className="Container">
      <h1>{Nombre}</h1>

      <div className="datos">
        <div className="ingredientes">
          <h2>Ingredientes</h2>
          {ingredientes &&
            ingredientes.map((ingrediente, i) => (
              <p key={i}>{ingrediente.Texto}</p>
            ))}
        </div>

        <div className="pasos">
          <h2>Pasos</h2>
          {pasos &&
            pasos.map((paso, i) => <p key={i}>{i + 1 + ". " + paso}</p>)}
        </div>
      </div>

      {check && (
        <div className="CantidadTotal">
          <h3 className="TituloModal">Modificar</h3>
          <div className="ContainerOpciones">
            <button
              className={`OpcionesAjuste ${!unitMode && "Seleccionada"}`}
              onClick={() => toggleUnitMode(false)}
            >
              Cantidad Total
            </button>
            <button
              className={`OpcionesAjuste ${unitMode && "Seleccionada"}`}
              onClick={() => toggleUnitMode(true)}
            >
              Unidades
            </button>
          </div>
          {!unitMode ? (
            <>
              <label className="LabelMod" htmlFor="CantidadTotal">
                Cantidad Total:{" "}
              </label>
              <input
                key={"CantidadTotal"}
                id="CantidadTotal"
                type="number"
                defaultValue={CantidadTotal && CantidadTotal[0]}
                required
                onChange={(e) => {
                  setcantidadMod(e.target.value);
                }}
              />
            </>
          ) : (
            <>
              <label className="LabelMod" htmlFor="Unidades">
                Unidades:{" "}
              </label>
              <input
                key={"unidades"}
                id="Unidades"
                type="number"
                defaultValue={unidades ? unidades : 1}
                onChange={(e) => {
                  setUnidades(e.target.value);
                }}
              />
              <label className="LabelMod" htmlFor="CantidadU">
                Cantidad c/u:{" "}
              </label>
              <input
                key={"Cantidad"}
                id="CantidadU"
                type="number"
                defaultValue={cantidadU && cantidadU}
                onChange={(e) => {
                  setCantidadU(e.target.value);
                }}
              />
            </>
          )}

          <button
            onClick={() => {
              ModificarTotal();
            }}
          >
            Ajustar
          </button>
        </div>
      )}

      <NavButtons>
        <button
          className="Button Balanza"
          onClick={() => {
            setCheck(!check);
          }}
        >
          <img
            src="https://cdn-icons-png.flaticon.com/512/3833/3833784.png"
            alt=""
          />
        </button>

        <Link to={`/editarReceta/${id}`}>
          <button className="Button">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="icon icon-tabler icon-tabler-edit"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M7 7h-1a2 2 0 0 0 -2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2 -2v-1" />
              <path d="M20.385 6.585a2.1 2.1 0 0 0 -2.97 -2.97l-8.415 8.385v3h3l8.385 -8.415z" />
              <path d="M16 5l3 3" />
            </svg>
          </button>
        </Link>
      </NavButtons>
    </div>
  );
};

export default DetalleReceta;
