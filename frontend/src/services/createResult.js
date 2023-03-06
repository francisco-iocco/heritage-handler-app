export default async function createResult({ 
  amount,
  description,
  isPermanent,
  time,
  type,
  userId
}) {
  if(type === "remittance") amount = amount * -1;
  await fetch(`${process.env.REACT_APP_API_URL}/${userId}/${type}s`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ amount, description, isPermanent, time })
  });
}
