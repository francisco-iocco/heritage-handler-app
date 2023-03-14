export default async function getResults({ type, userId }) {
  let results = await fetch(`${process.env.REACT_APP_API_URL}/${userId}/${type}s`);
  results = await results.json();
  return results;
}