export default async function deleteUser({ userId }) {
  let data = await fetch(`http://localhost:4000/users/${userId}`, {
    method: "DELETE",
  });
  if(data.status !== 204) {
    data = await data.json();
    return data;
  }
}
