export default async function editResult({
  amount,
  description,
  isPermanent,
  time,
  resultId,
  type,
  userId
}) {
  if (type === "remittance") amount = amount * -1;
  await fetch(`http://localhost:4000/${userId}/${type}s/${resultId}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ amount, description, isPermanent, time }),
  });
}
