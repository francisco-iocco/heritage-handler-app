export default async function getResults({ type, JWT }) {
  let results = await fetch(`http://localhost:4000/${JWT}/${type}s`);
  results = await results.json();
  return results;
}