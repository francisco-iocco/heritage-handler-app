export default async function getResults({ type }) {
  let results = await fetch(`http://localhost:4000/${type}s`);
  results = await results.json();
  return results;
}