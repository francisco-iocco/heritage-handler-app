export default async function editResult({ data, id, type, JWT }) {
  if(type === "remittance") data.amount = data.amount * -1;
  await fetch(`http://localhost:4000/${JWT}/${type}s/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
}
