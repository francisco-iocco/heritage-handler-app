export default async function editResult({ data, id, type }) {
  await fetch(`http://localhost:4000/${type}s/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
}
