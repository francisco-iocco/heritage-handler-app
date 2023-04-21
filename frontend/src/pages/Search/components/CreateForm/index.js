import { useState, useReducer, useEffect } from "react";
import useHandleResult from "hooks/useHandleResult";
import Spinner from "components/Spinner";
import { IconCash, IconFileDots } from "@tabler/icons-react";
import {
  StyledInput,
  StyledForm,
  StyledCheckbox,
  StyledSelect,
} from "components/UserForm/styles";

const INITIAL_STATE = {
  description: "",
  amount: "",
  isPermanent: false,
  time: null,
};

const ACTIONS = {
  CHANGE_DESCRIPTION: "CHANGE_DESCRIPTION",
  CHANGE_AMOUNT: "CHANGE_AMOUNT",
  TOGGLE_IS_PERMANENT: "TOGGLE_IS_PERMANENT",
  CHANGE_TIME: "CHANGE_TIME",
};

function reducer(state, action) {
  switch (action.type) {
    case ACTIONS.CHANGE_DESCRIPTION:
      return { ...state, description: action.payload };
    case ACTIONS.CHANGE_AMOUNT:
      return { ...state, amount: action.payload };
    case ACTIONS.TOGGLE_IS_PERMANENT:
      return {
        ...state,
        isPermanent: !state.isPermanent,
        time: !state.isPermanent ? "per day" : null,
      };
    case ACTIONS.CHANGE_TIME:
      return { ...state, time: action.payload };
    default:
      break;
  }
}

export default function CreateForm({ onSubmit, title, resultToUpdate }) {
  const [{ description, amount, isPermanent, time }, dispatch] = useReducer(
    reducer,
    resultToUpdate ? resultToUpdate : INITIAL_STATE
  );
  const [animation, setAnimation] = useState("");
  const { 
    createResult,
    editResult,
    errors, 
    isLoading, 
    cleanError 
  } = useHandleResult(resultToUpdate);

  const changeDescription = ({ target: { value } }) =>
    dispatch({ type: ACTIONS.CHANGE_DESCRIPTION, payload: value });
  const changeAmount = ({ target: { value } }) =>
    dispatch({ type: ACTIONS.CHANGE_AMOUNT, payload: parseInt(value) });
  const toggleIsPermanent = () =>
    dispatch({ type: ACTIONS.TOGGLE_IS_PERMANENT });
  const changeTime = (time) =>
    dispatch({ type: ACTIONS.CHANGE_TIME, payload: time });

  const cleanMessage = async (error) => {
    setAnimation(error);
    await new Promise((res) => setTimeout(res, 500));
    cleanError(error);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setAnimation("click");
    const data = {
      description,
      amount,
      isPermanent,
      time,
      type: title.includes("remittance") ? "remittance" : "income",
    };

    let hasError = false;
    hasError = resultToUpdate?.id
      ? await editResult({ ...data, resultId: resultToUpdate.id })
      : await createResult({ ...data });
    
    !hasError && onSubmit();
  };

  if (isLoading) return (
    <StyledForm>
      <Spinner height="100%" size="2.618em" />
    </StyledForm>
  );

  return (
    <StyledForm
      animation={animation}
      autoComplete="off"
      onSubmit={handleSubmit}
      title={title}
      titleColor={title.includes("income") ? "#1ac31a" : "#ef0107"}
      onAnimationEnd={() => setAnimation("")}
    >
      <h3>{title}</h3>
      <StyledInput
        hasValue={description}
        hideText={animation === "description" && animation}
      >
        <div>
          <label htmlFor="description">
            <IconFileDots stroke={1} size="1.5rem" />
          </label>
          <input
            onChange={changeDescription}
            onFocus={() => errors.description && cleanMessage("description")}
            type="text"
            value={description}
            id="description"
          />
          <span>Description</span>
        </div>
        {errors.description && <p>{errors.description}</p>}
      </StyledInput>
      <StyledInput
        hasValue={!!amount}
        hideText={animation === "amount" && animation}
      >
        <div>
          <label htmlFor="amount">
            <IconCash stroke={1} size="1.5rem" />
          </label>
          <input
            onChange={changeAmount}
            onFocus={() => errors.amount && cleanMessage("amount")}
            type="number"
            value={amount}
            id="amount"
          />
          <span>Amount</span>
        </div>
        {errors.amount && <p>{errors.amount}</p>}
      </StyledInput>
      {(!resultToUpdate || resultToUpdate.isPermanent) && <StyledCheckbox>
        <input
          id="permanent"
          type="checkbox"
          onChange={toggleIsPermanent}
          value={isPermanent}
          checked={isPermanent}
          disabled={resultToUpdate}
        />
        <label htmlFor="permanent">Permanent</label>
      </StyledCheckbox>}
      {isPermanent && (
        <StyledSelect
          value={time}
          onChange={({ target: { value } }) => changeTime(value)}
          disabled={resultToUpdate}
        >
          <option>per day</option>
          <option>per month</option>
          <option>per year</option>
        </StyledSelect>
      )}
      <button type="submit">OK</button>
    </StyledForm>
  );
}
