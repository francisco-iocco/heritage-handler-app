export default async function deleteResult({ userId, type, resultId }) {
  await fetch(`${process.env.REACT_APP_API_URL}/${userId}/${type}s/${resultId}`, {
    method: "DELETE",
  });
}
