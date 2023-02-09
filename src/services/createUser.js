export default async function createUser({ data }) {
  let userData = await fetch("http://localhost:4000/users", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
  });
  userData = await userData.json();
  return userData;
}