export default async function registerUser({ username, password, heritage, idToBeLinked }) {
  let userData = await fetch("${process.env.REACT_APP_API_URL}/users", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ username, password, heritage, idToBeLinked })
  });
  userData = await userData.json();
  return userData;
}