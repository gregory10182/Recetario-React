export default async function apiGet() {
    return await fetch("http://localhost:8000/receta/", {
      method: "GET",
    })
      .then((response) => response.json())
      .then((data) => {return data})
      .catch((error) => console.log(error));
  }