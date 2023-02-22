export default async function updateUser({
  userId,
  email,
  password,
  heritage,
  lastConnection,
  emailToBeLinked,
  idToBeUnlinked,
  linkUserResponse
}) {
  let data = await fetch(`http://localhost:4000/users/${userId}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ 
      email,
      password,
      heritage,
      lastConnection,
      emailToBeLinked,
      idToBeUnlinked,
      linkUserResponse
    })
  });
  if(data.status !== 204) {
    data = await data.json();
    return data;
  }
}
