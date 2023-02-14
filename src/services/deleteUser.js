export default async function deleteUser({ userId }) {
  await fetch(`http://localhost:4000/users/${userId}`, {
    method: "DELETE",
  });
}
