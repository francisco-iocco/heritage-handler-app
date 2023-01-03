import Result from "./Result";

// This is just Raw data which is used to start to know how the layout will be.

let results = [
  {
    description: "Car selled",
    amount: 1000,
  },
  {
    description: "Hair cut",
    amount: -50,
  },
  {
    description: "Travel ticket",
    amount: -1000,
  },
  {
    description: "Car selled",
    amount: 1000,
  },
  {
    description: "Hair cut",
    amount: -50,
  },
  {
    description: "Travel ticket",
    amount: -1000,
  },
  {
    description: "Car selled",
    amount: 1000,
  },
  {
    description: "Hair cut",
    amount: -50,
  },
  {
    description: "Travel ticket",
    amount: -1000,
  },
];

export default function ListOfResults({ searchInputValue }) {
  if (searchInputValue) {
    return results
      .filter((result) => {
        if (
          result.description
            .toLowerCase()
            .includes(searchInputValue)
        ) {
          return true;
        }
      })
      .map((result, index) => (
        <Result
          key={index}
          description={result.description}
          amount={result.amount}
        />
      ));
  }
  return results.map((result, index) => (
    <Result
      key={index}
      description={result.description}
      amount={result.amount}
    />
  ));
}
