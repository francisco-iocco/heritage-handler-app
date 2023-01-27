export default function createResult({ data, type }) {
  fetch(`http://localhost:4000/${type}s`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
}
