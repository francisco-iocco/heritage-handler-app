import { useEffect } from "react";
import useCreateResultContext from "hooks/useCreateResult";
import StyledCreateForm from "./styles";

export default function CreateForm({ onSubmit, title, defaultValues }) {
  const {
    description,
    amount,
    isPermanent,
    time,
    changeDescription,
    changeAmount,
    toggleIsPermanent,
    changeTime,
    setNewResult,
  } = useCreateResultContext();

  useEffect(() => {
    if (defaultValues) {
      changeDescription(defaultValues.description);
      changeAmount(defaultValues.amount);
    }
  }, [defaultValues, changeDescription, changeAmount]);

  const handleDescriptionValue = ({ target: { value } }) => {
    changeDescription(value);
  };

  const handleAmountValue = ({ target: { value } }) => {
    let amount = value;
    if (title.includes("remittance")) {
      amount = amount.includes("-") ? amount : `-${amount}`;
    }
    changeAmount(amount);
  };

  const handleTimeValue = ({ target: { value } }) => changeTime(value);

  const handleCloseForm = (e) => {
    e.preventDefault();
    isPermanent
      ? setNewResult({ description, amount, isPermanent, time })
      : setNewResult({ description, amount });
    onSubmit();
  };

  return (
    <StyledCreateForm title={title}>
      <h2>{title}</h2>
      <input
        placeholder="Title"
        type="text"
        value={description}
        onChange={handleDescriptionValue}
      />
      <input
        placeholder="Amount"
        type="number"
        value={amount}
        onChange={handleAmountValue}
      />
      <div>
        <label htmlFor="permanent">Permanent</label>
        <input
          id="permanent"
          type="checkbox"
          onChange={toggleIsPermanent}
          value={isPermanent}
        />
      </div>
      {isPermanent && (
        <select value={time} onChange={handleTimeValue}>
          <option>per day</option>
          <option>per month</option>
          <option>per year</option>
        </select>
      )}
      <button onClick={handleCloseForm} type="submit">
        OK
      </button>
    </StyledCreateForm>
  );
}
