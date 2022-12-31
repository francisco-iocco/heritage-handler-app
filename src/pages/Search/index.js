import Nav from "components/Nav";
import ResultCreator from "pages/Search/components/ResultCreator";
import ResultsTable from "pages/Search/components/ResultsTable";

export default function Search() {
  return (
    <div className="section">
      <Nav />
      <ResultCreator />
      <ResultsTable />
    </div>
  );
}