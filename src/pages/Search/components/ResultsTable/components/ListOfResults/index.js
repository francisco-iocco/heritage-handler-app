import { useState, useEffect } from "react";
import Result from "../Result";
import useSearchResult from "hooks/useSearchResult";
import useCreateResult from "hooks/useCreateResult";

// This is just Raw data which is used to start to know how the layout will be.

let results = [
  {
    description: "Car sold",
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
    isPermanent: true,
    time: "per year",
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
    isPermanent: true,
    time: "per month",
  },
  {
    description: "Travel ticket",
    amount: -1000,
  },
];

export default function ListOfResults({ searchInputValue }) {
  const { isPermanent, isIncome, isRemittance } = useSearchResult();
  const { newResult, setNewResult, index, setIndex } = useCreateResult();
  let [renderResults, setRenderResults] = useState([]);
  
  useEffect(
    () => {
      if(Object.keys(newResult)[0]) {
        if(index || index === 0) {
          results = results.map((result, _index) => _index === index ? newResult : result); 
        } else {
          results = [ newResult, ...results ];
        }
        setIndex(undefined)
        setNewResult({});
      }
      results = results.map((result) => {
        const type = result.amount > 0 ? "income" : "remittance";
        return { ...result, type };
      });
      setRenderResults(results);
    },
    [ newResult, index, setIndex, setNewResult ]
  );

  useEffect(() => {
    if (isPermanent || isIncome || isRemittance) {
      setRenderResults([]);

      if (isPermanent) {
        let permanents = results.filter((result) => result.isPermanent);

        if (isIncome) {
          permanents = permanents.filter((result) => result.type === "income");
        } else if (isRemittance) {
          permanents = permanents.filter(
            (result) => result.type === "remittance"
          );
        }

        setRenderResults((prevState) => [...prevState, ...permanents]);
      } else if (isIncome) {
        const incomes = results.filter((result) => result.type === "income");
        setRenderResults((prevState) => [...prevState, ...incomes]);
      } else if (isRemittance) {
        const remittances = results.filter(
          (result) => result.type === "remittance"
        );
        setRenderResults((prevState) => [...prevState, ...remittances]);
      }
    } else {
      setRenderResults(results);
    }
  }, [isPermanent, isIncome, isRemittance]);

  const handleDelete = (index) => {
    results = results.filter((results, _index) => _index !== index);
    setRenderResults(results);
  };

  if (searchInputValue) {
    renderResults = renderResults.filter((result) =>
      result.description.toLowerCase().includes(searchInputValue)
    );
  }

  return renderResults.map((result, index) => {
    return (
      <Result
        amount={result.amount}
        description={result.description}
        key={index}
        index={index}
        isPermanent={result.isPermanent}
        time={result.time}
        onDelete={() => handleDelete(index)}
      />
    );
  });
}
