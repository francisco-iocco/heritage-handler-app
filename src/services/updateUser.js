export default async function updateUser({
  userId,
  email,
  password,
  heritage,
  lastConnection,
  emailToBeLinked,
  linkedUserResponse
}) {
  await fetch(`http://localhost:4000/users/${userId}`, {
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
      linkedUserResponse
    })
  });
}
