export default function createResult({ data, type, JWT }) {
  fetch(`http://localhost:4000/${JWT}/${type}s`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
}
