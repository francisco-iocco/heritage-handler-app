export default async function logUser({ username, password }) {
  let response = await fetch(
    `${process.env.REACT_APP_API_URL}/users?username=${username}&password=${password}`
  );
  response = await response.json();
  return response;
}