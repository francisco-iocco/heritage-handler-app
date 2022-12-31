import StyledResultsForm from "./styles";

export default function ResultsForm({ title, onClose, defaultValues = {} }) {
  return (
    <StyledResultsForm title={title}>
      <h1>{title}</h1>
      <input type="text" placeholder="Title" defaultValue={defaultValues ? defaultValues.description : ""} />
      <input type="number" placeholder="Amount" defaultValue={defaultValues ? defaultValues.amount : ""} />
      <button type="submit" onClick={onClose}>
        OK
      </button>
    </StyledResultsForm>
  );
}
