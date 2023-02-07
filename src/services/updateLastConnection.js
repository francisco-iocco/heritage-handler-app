export default function updateLastConection({ lastConnection, JWT }) {
  fetch(`http://localhost:4000/users/${JWT}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ lastConnection }),
  });
}
