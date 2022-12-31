import Result from "./Result";

const results = [
  {
    title: "Car washed",
    amount: 100,
  },
  {
    title: "Hair cut",
    amount: 50,
  },
  {
    title: "Travel ticket",
    amount: 1000,
  },
];

export default function ListOfResults() {
  return results.map((result, index) => (
    <Result key={index} title={result.title} amount={result.amount} />
  ));
}
