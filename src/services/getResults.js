export default async function getResults({ type, userId }) {
  let results = await fetch(`http://localhost:4000/${userId}/${type}s`);
  results = await results.json();
  return results;
}