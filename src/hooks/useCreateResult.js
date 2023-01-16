import { useContext } from "react";
import CreateResultContext from "contexts/CreateResultContext";

export default function useCreateResult() {
  const {
    description,
    amount,
    isPermanent,
    time,
    index,
    newResult,
    changeDescription,
    changeAmount,
    toggleIsPermanent,
    changeTime,
    reset,
    setIndex,
    setNewResult,
  } = useContext(CreateResultContext);

  return {
    description,
    amount,
    isPermanent,
    time,
    index,
    newResult,
    changeDescription,
    changeAmount,
    toggleIsPermanent,
    changeTime,
    reset,
    setIndex,
    setNewResult,
  };
}
