export default function createResult({ data }) {
  fetch(`http://localhost:4000/incomes`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
}
