export default async function getHeritage({ JWT }) {
  let heritage = await fetch(`http://localhost:4000/${JWT}/heritage`);
  heritage = await heritage.json();
  return heritage;
}
