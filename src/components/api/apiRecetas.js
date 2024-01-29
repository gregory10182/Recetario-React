import axios from "axios";
// const baseUrl = "http://localhost:8000/receta/";
const baseUrl = "https://gregorypf.site/receta/";

const getAll = () => {
  const request = axios.get(baseUrl);
  return request.then((response) => response.data).catch((err) => alert(err));
};

const getRecipeDetails = (id) => {
  const request = axios.get(baseUrl + id);
  return request
    .then((response) => response.data)
    .then((data) => {
      data.CantidadTotal = JSON.parse(data.CantidadTotal);
      data.ingredientes = JSON.parse(data.ingredientes);
      data.pasos = JSON.parse(data.pasos);
      return data;
    })
    .catch((err) => alert(err));
};

const createRecipe = (recipe) => {
  const request = axios.post(baseUrl, recipe);
  return request.then((response) => response).catch((err) => alert(err));
};

const updateRecipe = (id, recipe) => {
  const request = axios.put(`${baseUrl}${id}`, recipe);
  return request.then((response) => response).catch((err) => alert(err));
};

const apiReceta = { getAll, getRecipeDetails, createRecipe, updateRecipe };

export default apiReceta;
