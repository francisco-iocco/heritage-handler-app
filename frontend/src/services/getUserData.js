export default async function getUserData({ userId }) {
  let userData = await fetch(`http://localhost:4000/users/${userId}`);
  userData = await userData.json();
  return userData;
}
