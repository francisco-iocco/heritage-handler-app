export default async function updateUser({
  userId,
  username,
  password,
  heritage,
  lastConnection,
  usernameToBeLinked,
  idToBeUnlinked,
  linkUserResponse
}) {
  let data = await fetch(`${process.env.REACT_APP_API_URL}/users/${userId}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ 
      username,
      password,
      heritage,
      lastConnection,
      usernameToBeLinked,
      idToBeUnlinked,
      linkUserResponse
    })
  });
  if(data.status !== 204) {
    data = await data.json();
    return data;
  }
}
