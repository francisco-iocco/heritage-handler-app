import { useContext } from "react";
import CreateResultContext from "contexts/CreateResultContext";
import useHandleResult from "hooks/useHandleResult";
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
  const { createResult, editResult, errors, cleanError } = useHandleResult();

  const handleDescriptionValue = ({ target: { value } }) => {
    changeDescription(value);
  };
  const handleAmountValue = ({ target: { value } }) => changeAmount(parseInt(value));
  const handleTimeValue = ({ target: { value } }) => changeTime(value);

  const handleCloseForm = async (e) => {
    e.preventDefault();
    const data = { description, amount };
    if(isPermanent) {
      data.isPermanent = true;
      data.time = time;
    }
    data.type = (title.includes("remittance")) ? "remittance" : "income";


    let hasError = false;
    if(id) {
      hasError = await editResult({ ...data, resultId: id }) 
    } else {
      hasError = await createResult({ ...data }); 
    }

    if(!hasError) {
      reset();
      onSubmit();
    }
  };

  return (
    <StyledCreateForm title={title}>
      <h2>{title}</h2>
      <input
        placeholder="Title"
        type="text"
        value={description}
        onChange={handleDescriptionValue}
        onFocus={() => cleanError("description")}
      />
      {errors.description && <p>{errors.description}</p>}
      <input
        placeholder="Amount"
        type="number"
        value={amount}
        onChange={handleAmountValue}
        onFocus={() => cleanError("amount")}
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
