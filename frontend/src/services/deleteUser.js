export default async function deleteUser({ userId }) {
  let data = await fetch(`${process.env.REACT_APP_API_URL}/users/${userId}`, {
    method: "DELETE",
  });
  if(data.status !== 204) {
    data = await data.json();
    return data;
  }
}
