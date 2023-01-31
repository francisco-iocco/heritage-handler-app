import { useContext } from "react";
import CreateResultContext from "contexts/CreateResultContext";
import useCreateResult from "hooks/useCreateResult";
import useEditResult from "hooks/useEditResult";
import StyledCreateForm from "./styles";

export default function CreateForm({ onSubmit, title }) {
  const {
    description,
    amount,
    isPermanent,
    time,
    id,
    changeDescription,
    changeAmount,
    toggleIsPermanent,
    changeTime,
    reset,
  } = useContext(CreateResultContext);
  const { createResult } = useCreateResult();
  const { editResult } = useEditResult();

  const handleDescriptionValue = ({ target: { value } }) => {
    changeDescription(value);
  };

  const handleAmountValue = ({ target: { value } }) => changeAmount(parseInt(value));

  const handleTimeValue = ({ target: { value } }) => changeTime(value);

  const handleCloseForm = async (e) => {
    e.preventDefault();
    const type = (title.includes("remittance")) ? "remittance" : "income";
    const data = isPermanent
      ? { description, amount, isPermanent, time }
      : { description, amount, isPermanent, time: null };
    console.log(id);
    id
      ? await editResult({ data, id, type }) 
      : await createResult({ data, type }); 
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
