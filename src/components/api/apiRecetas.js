import axios from "axios";
const baseUrl = "http://18.224.25.38:8000/receta/";

const getAll = () => {
  const request = axios.get(baseUrl);
  return request.then((response) => response.data).catch((err) => alert(err));
};

const getRecipeDetails = (id) => {
  const request = axios.get(baseUrl + id);
  return request.then((response) => response.data)
  .then((data) => {
    data.CantidadTotal = JSON.parse(data.CantidadTotal)
    data.ingredientes = JSON.parse(data.ingredientes)
    data.pasos = JSON.parse(data.pasos)
    return data
  })
  .catch((err) => alert(err));
};

const createRecipe = (recipe) => {
  const request = axios.post(baseUrl, recipe);
  return request
  .then((response) => response)
  .catch((err) => alert(err));
};

const apiReceta = {getAll, getRecipeDetails, createRecipe}

export default apiReceta