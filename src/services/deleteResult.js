export default async function deleteResult({ type, id, JWT }) {
  await fetch(`http://localhost:4000/${JWT}/${type}s/${id}`, {
    method: "DELETE",
  });
}
