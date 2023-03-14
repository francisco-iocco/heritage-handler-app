import useHandleResult from "hooks/useHandleResult";
import Spinner from "components/Spinner";
import StyledCreateForm from "./styles";
import { useState } from "react";

export default function CreateForm({ onSubmit, title, resultToUpdate }) {
  const {
    data: { description, amount, isPermanent, time },
    changeDescription,
    changeAmount,
    toggleIsPermanent,
    changeTime,
    createResult,
    editResult,
    errors,
    cleanError
  } = useHandleResult(resultToUpdate);
  const [ isLoading, setIsLoading ] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = { description, amount, isPermanent, time };
    data.type = (title.includes("remittance")) ? "remittance" : "income";

    setIsLoading(true);
    let hasError = false;
    hasError = resultToUpdate?.id
      ? await editResult({ ...data, resultId: resultToUpdate.id })
      : await createResult({ ...data });
    setIsLoading(false);

    !hasError && onSubmit();
  };

  if(isLoading) return <StyledCreateForm><Spinner /></StyledCreateForm>;

  return (
    <StyledCreateForm title={title}>
      <h2>{title}</h2>
      <input
        placeholder="Title"
        type="text"
        value={description}
        onChange={({ target: { value } }) => changeDescription(value)}
        onFocus={() => errors.description && cleanError("description")}
      />
      {errors.description && <p>{errors.description}</p>}
      <input
        placeholder="Amount"
        type="number"
        value={amount}
        onChange={({ target: { value } }) => changeAmount(value)}
        onFocus={() => errors.amount && cleanError("amount")}
      />
      {errors.amount && <p>{errors.amount}</p>}
      <div>
        <label htmlFor="permanent">Permanent</label>
        <input
          id="permanent"
          type="checkbox"
          onChange={toggleIsPermanent}
          value={isPermanent}
          checked={isPermanent}
          disabled={resultToUpdate}
        />
      </div>
      {isPermanent && (
        <select value={time} onChange={({ target: { value } }) => changeTime(value)} disabled={resultToUpdate}>
          <option>per day</option>
          <option>per month</option>
          <option>per year</option>
        </select>
      )}
      <button onClick={handleSubmit} type="submit">OK</button>
    </StyledCreateForm>
  );
}
