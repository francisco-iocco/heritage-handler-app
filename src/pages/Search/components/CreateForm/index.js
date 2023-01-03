import StyledCreateForm from "./styles";

export default function CreateForm({ defaultValues, title, onClose }) {
  return (
    <StyledCreateForm title={title}>
      <h2>{title}</h2>
      <input
        type="text"
        placeholder="Title"
        defaultValue={defaultValues ? defaultValues.description : ""}
      />
      <input
        type="number"
        placeholder="Amount"
        defaultValue={defaultValues ? defaultValues.amount : ""}
      />
      <button type="submit" onClick={onClose}>
        OK
      </button>
    </StyledCreateForm>
  );
}

// import CreateContent from "./components/CreateContent";
// import SearchContent from "./components/SearchContent";

// export default function ResultsForm({
//   title,
//   onClose,
//   defaultValues = {},
//   forSearching,
// }) {
//   return (
//     <StyledResultsForm title={title}>
//       <h2>{title}</h2>
//       {forSearching ? (
//         <SearchContent />
//       ) : (
//         <CreateContent defaultValues={defaultValues} />
//       )}
//       <button type="submit" onClick={onClose}>
//         OK
//       </button>
//     </StyledResultsForm>
//   );
// }
