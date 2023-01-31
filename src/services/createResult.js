export default async function createResult({ data, type, JWT }) {
  if(type === "remittance") data.amount = data.amount * -1;
  await fetch(`http://localhost:4000/${JWT}/${type}s`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
}
