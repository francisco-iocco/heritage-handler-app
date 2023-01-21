export default async function editResult({ data, id }) {
  await fetch(`http://localhost:4000/incomes/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
}
