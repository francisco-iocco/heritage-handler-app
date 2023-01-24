export default async function deleteResult({ type, id }) {
  await fetch(`http://localhost:4000/${type}s/${id}`, { method: "DELETE" });
}