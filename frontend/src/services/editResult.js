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
  await fetch(`${process.env.REACT_APP_API_URL}/${userId}/${type}s/${resultId}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ amount, description, isPermanent, time }),
  });
}
