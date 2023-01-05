import StyledCreateForm from "./styles";

export default function CreateForm({ onSubmit, title, defaultValues }) {
  const handleCloseForm = (e) => {
    e.preventDefault();
    onSubmit();
  }
  return (
    <StyledCreateForm title={title}>
      <h2>{title}</h2>
      <input
        defaultValue={defaultValues ? defaultValues.description : ""}
        placeholder="Title"
        type="text"
      />
      <input
        defaultValue={defaultValues ? defaultValues.amount : ""}
        placeholder="Amount"
        type="number"
      />
      <button onClick={handleCloseForm} type="submit">
        OK
      </button>
    </StyledCreateForm>
  );
}