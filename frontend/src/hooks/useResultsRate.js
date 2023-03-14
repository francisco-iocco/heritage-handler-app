import { useReducer, useEffect } from "react";

const INITIAL_STATE = {
  incomesAmount: 0,
  remittancesAmount: 0,
  incomesPercentaje: 0,
  remittancesPercentaje: 0,
};

const ACTIONS = {
  CHANGE_INCOMES_AMOUNT: "CHANGE_INCOMES_AMOUNT",
  CHANGE_REMITTANCES_AMOUNT: "CHANGE_REMITTANCES_AMOUNT",
  CHANGE_INCOMES_PERCENTAJE: "CHANGE_INCOMES_PERCENTAJE",
  CHANGE_REMITTANCES_PERCENTAJE: "CHANGE_REMITTANCES_PERCENTAJE",
};

function reducer(state, action) {
  switch (action.type) {
    case ACTIONS.CHANGE_INCOMES_AMOUNT:
      return { ...state, incomesAmount: action.payload };
    case ACTIONS.CHANGE_REMITTANCES_AMOUNT:
      return { ...state, remittancesAmount: action.payload };
    case ACTIONS.CHANGE_INCOMES_PERCENTAJE:
      return { ...state, incomesPercentaje: action.payload };
    case ACTIONS.CHANGE_REMITTANCES_PERCENTAJE:
      return { ...state, remittancesPercentaje: action.payload };
    default:
      return state;
  }
}

export default function useResultsRate(results) {
  const [
    {
      incomesAmount,
      remittancesAmount,
      incomesPercentaje,
      remittancesPercentaje,
    },
    dispatch,
  ] = useReducer(reducer, INITIAL_STATE);
  useEffect(() => { setResultsTime({ target: { value: "This day" } }) }, []);
  
  const currentDate = new Date();

  const prevMondayDate = (date) => {
    let difference;
    switch (date.getDay()) {
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
      default:
        break;
    }
    return new Date(date.getTime() - difference * 86400000);
  };

  const filterResultsByTime = (time, results) => {
    let filteredResults = results.filter(result => !result.isPermanent);
    switch (time) {
      case "This day":
        filteredResults = filteredResults.filter((result) => {
          const resultDate = new Date(result.lastAdd || result.created_at);
          return (
            resultDate.getDate() === currentDate.getDate() &&
            resultDate.getMonth() === currentDate.getMonth() &&
            resultDate.getFullYear() === currentDate.getFullYear()
          )
        });
        break;
      case "This week":
        filteredResults = filteredResults.filter((result) => {
          const resultPrevMondayDate = prevMondayDate(
            new Date(result.lastAdd || result.created_at)
          );
          const currentDatePrevMonday = prevMondayDate(currentDate);
          return (
            resultPrevMondayDate.getDate() ===
              currentDatePrevMonday.getDate() &&
            resultPrevMondayDate.getMonth() ===
              currentDatePrevMonday.getMonth() &&
            resultPrevMondayDate.getFullYear() ===
              currentDatePrevMonday.getFullYear()
          );
        });
        break;
      case "This month":
        filteredResults = filteredResults.filter((result) => {
          const resultDate = new Date(result.lastAdd || result.created_at);
          return (
            resultDate.getMonth() === currentDate.getMonth() &&
            resultDate.getFullYear() === currentDate.getFullYear()
          );
        });
        break;
      case "This year":
        filteredResults = filteredResults.filter((result) => {
          const resultDate = new Date(result.lastAdd || result.created_at);
          return resultDate.getFullYear() === currentDate.getFullYear();
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

  function setResultsTime ({ target: { value } }) {
    const remittancesSum = filterResultsByTime(
      value,
      results.filter((result) => result.type === "remittance")
    );
    const incomesSum = filterResultsByTime(
      value,
      results.filter((result) => result.type === "income")
    );

    const totalSum = incomesSum + remittancesSum;

    dispatch({
      type: ACTIONS.CHANGE_INCOMES_AMOUNT,
      payload: incomesSum,
    });
    dispatch({
      type: ACTIONS.CHANGE_REMITTANCES_AMOUNT,
      payload: remittancesSum,
    });

    if (totalSum) {
      dispatch({
        type: ACTIONS.CHANGE_REMITTANCES_PERCENTAJE,
        payload: ((remittancesSum / totalSum) * 100).toFixed(1),
      });
      dispatch({
        type: ACTIONS.CHANGE_INCOMES_PERCENTAJE,
        payload: ((incomesSum / totalSum) * 100).toFixed(1),
      });
    } else {
      dispatch({ type: ACTIONS.CHANGE_REMITTANCES_PERCENTAJE, payload: 0 });
      dispatch({ type: ACTIONS.CHANGE_INCOMES_PERCENTAJE, payload: 0 });
    }
  };

  return {
    remittancesAmount,
    remittancesPercentaje,
    incomesAmount,
    incomesPercentaje,
    setResultsTime,
  };
}
