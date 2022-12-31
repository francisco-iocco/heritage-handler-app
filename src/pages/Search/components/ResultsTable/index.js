import StyledResultsTable from "./styles";
import ListOfResults from "./components/ListOfResults";

export default function ResultsTable() {
  return (
    <StyledResultsTable>
      <thead>
        <tr className="head-row">
          <th>
            <span>Title</span>
          </th>
          <th>
            <span>Amount</span>
          </th>
          <th>
            <span>Actions</span>
          </th>
        </tr>
      </thead>
      <tbody>
        <ListOfResults />
      </tbody>
    </StyledResultsTable>
  );
}
