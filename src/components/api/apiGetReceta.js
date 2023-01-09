export default async function apiGetReceta(id) {
    return await fetch("http://localhost:8000/receta/" + id, {
      method: "GET",
    })
      .then((response) => response.json())
      .then((data) => {
        data.CantidadTotal = JSON.parse(data.CantidadTotal)
        data.ingredientes = JSON.parse(data.ingredientes)
        data.pasos = JSON.parse(data.pasos)
        return data
      })
      .catch((error) => console.log(error));
  }