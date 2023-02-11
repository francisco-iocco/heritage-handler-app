export default async function registerUser({ email, password, heritage }) {
  let userData = await fetch("http://localhost:4000/users", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ email, password, heritage })
  });
  userData = await userData.json();
  return userData;
}