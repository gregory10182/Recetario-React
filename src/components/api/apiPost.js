export default async function apiPost(data) {
  return await fetch("http://localhost:8000/receta/", {
    method: "POST",
    body: data,
  })
    .then((response) => response.json())
    .catch((error) => console.log(error));
}
