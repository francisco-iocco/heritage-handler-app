export default async function getUserData({ userId }) {
  let userData = await fetch(`${process.env.REACT_APP_API_URL}/users/${userId}`);
  userData = await userData.json();
  return userData;
}
