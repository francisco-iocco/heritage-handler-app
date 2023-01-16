import useCreateResult from "hooks/useCreateResult";
import StyledCreateForm from "./styles";

export default function CreateForm({ onSubmit, title }) {
  const {
    description,
    amount,
    isPermanent,
    time,
    changeDescription,
    changeAmount,
    toggleIsPermanent,
    changeTime,
    reset,
    setNewResult,
  } = useCreateResult();

  const handleDescriptionValue = ({ target: { value } }) => {
    changeDescription(value);
  };

  const handleAmountValue = ({ target: { value } }) => {
    let amount = value;
    if (title.includes("remittance")) {
      amount = amount.startsWith("-") ? amount : `-${amount}`;
    }
    changeAmount(amount);
  };

  const handleTimeValue = ({ target: { value } }) => changeTime(value);

  const handleCloseForm = (e) => {
    e.preventDefault();
    isPermanent
      ? setNewResult({ description, amount, isPermanent, time })
      : setNewResult({ description, amount });
    reset();
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
          checked={isPermanent}
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
