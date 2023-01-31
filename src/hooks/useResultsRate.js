import { useState } from "react";

export default function useResultsRate(results) {
  const [ remittancesAmount, setRemittancesAmount ] = useState([]);
  const [ remittancesPercentaje, setRemittancesPercentaje ] = useState([]);
  const [ incomesAmount, setIncomesAmount ] = useState([]);
  const [ incomesPercentaje, setIncomesPercentaje ] = useState([]);
  const currentDate = new Date();

  const prevMondayDate = (weekday, monthDay) => {
    let difference;
    switch (weekday) {
      case 0:
        difference = 6;
        break;
      case 1:
        difference = 0;
        break;
      case 2:
        difference = 1;
        break;
      case 3:
        difference = 2;
        break;
      case 4:
        difference = 3;
        break;
      case 5:
        difference = 4;
        break;
      case 6:
        difference = 5;
        break;
    }
    return monthDay - difference;
  };

  const filterResultsByTime = (time, results) => {
    let filteredResults = results;
    switch (time) {
      case "This day":
        filteredResults = filteredResults.filter((result) => {
          const resultDay = new Date(result.created_at).getDate();
          const resultMonth = new Date(result.created_at).getMonth();
          const resultYear = new Date(result.created_at).getFullYear();
          if (
            resultDay === currentDate.getDate() &&
            resultMonth === currentDate.getMonth() &&
            resultYear === currentDate.getFullYear()
          ) return true;
          return false;
        });
        break;
      case "This week":
        filteredResults = filteredResults.filter((result) => {
          const resultWeekday = new Date(result.created_at).getDay();
          const resultMonthDay = new Date(result.created_at).getDate();
          const resultPrevMonday = prevMondayDate(
            resultWeekday,
            resultMonthDay
          );
          const resultMonth = new Date(result.created_at).getMonth();
          const resultYear = new Date(result.created_at).getFullYear();

          const currentDateWeekday = currentDate.getDay();
          const currentDateMonthDay = currentDate.getDate();
          const currentDatePrevMonday = prevMondayDate(
            currentDateWeekday,
            currentDateMonthDay
          );

          if (
            resultPrevMonday === currentDatePrevMonday &&
            resultMonth === currentDate.getMonth() &&
            resultYear === currentDate.getFullYear()
          ) return true;
          return false;
        });
        break;
      case "This month":
        filteredResults = filteredResults.filter((result) => {
          const resultMonth = new Date(result.created_at).getMonth();
          const resultYear = new Date(result.created_at).getFullYear();

          if (
            resultMonth === currentDate.getMonth() &&
            resultYear === currentDate.getFullYear()
          ) return true;
          return false;
        });
        break;
      case "This year":
        filteredResults = filteredResults.filter((result) => {
          const resultYear = new Date(result.created_at).getFullYear();

          if (resultYear === currentDate.getFullYear()) return true;
          return false;
        });
        break;
      default:
        break;
    }

    return filteredResults.reduce(
      (accumulator, result) => accumulator + result.amount,
      0
    );
  };

  const setResultsTime = ({ target: { value } }) => {
    const remittancesSum = filterResultsByTime(value, results.filter((result) => result.amount < 0)) * -1;
    const incomesSum = filterResultsByTime(value, results.filter((result) => result.amount > 0));
    const totalSum = incomesSum + remittancesSum;

    setRemittancesAmount(remittancesSum);
    setRemittancesPercentaje(((remittancesSum / totalSum) * 100).toFixed(1));
    setIncomesAmount(incomesSum);
    setIncomesPercentaje(((incomesSum / totalSum) * 100).toPrecision(3))
  };

  return {
    remittancesAmount,
    remittancesPercentaje,
    incomesAmount,
    incomesPercentaje,
    setResultsTime
  };
}
