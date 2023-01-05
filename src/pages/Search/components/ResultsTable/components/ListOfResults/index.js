import Result from "./Result";
import { useContext } from "react";
import SearchContext from "contexts/SearchContext";

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
    description: "Software Developer",
    amount: 80000,
    permanent: true,
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
    description: "Rent",
    amount: -1000,
    permanent: true
  },
  {
    description: "Travel ticket",
    amount: -1000,
  },
];

results = results.map((result) => {
  const type = result.amount > 0 ? "income" : "remittance";
  return { ...result, type };
});

export default function ListOfResults({ searchInputValue }) {
  const { isPermanent, isIncome, isRemittance } = useContext(SearchContext);
  let renderResults = results;

  if (isPermanent || isIncome || isRemittance) {
    renderResults = [];
    if (isPermanent) {
      let permanents = results.filter((result) => result.permanent);
      if(isIncome) {
        permanents = permanents.filter(result => result.type === "income");
      } else if(isRemittance) {
        permanents = permanents.filter(result => result.type === "remittance");
      }
      renderResults = [...renderResults, ...permanents];
    } else if (isIncome) {
      const incomes = results.filter(result => result.type === "income");
      renderResults = [...renderResults, ...incomes];
    } else if (isRemittance) {
      const remittances = results.filter((result) => result.type === "remittance");
      renderResults = [...renderResults, ...remittances];
    }
  }

  if (searchInputValue) {
    renderResults = renderResults.filter((result) =>
      result.description.toLowerCase().includes(searchInputValue)
    );
  }

  return renderResults.map((result, index) => {
    return (
      <Result
        key={index}
        description={result.description}
        amount={result.amount}
      />
    );
  });
}
