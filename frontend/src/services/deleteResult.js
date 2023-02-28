export default async function deleteResult({ userId, type, resultId }) {
  await fetch(`http://localhost:4000/${userId}/${type}s/${resultId}`, {
    method: "DELETE",
  });
}
