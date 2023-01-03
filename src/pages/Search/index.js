import Nav from "components/Nav";
import ResultCreator from "pages/Search/components/ResultCreator";
import ResultsTable from "pages/Search/components/ResultsTable";
import { SearchContextProvider } from "contexts/SearchContext";

export default function Search() {
  return (
    <div className="section">
      <Nav />
      <SearchContextProvider>
        <ResultCreator />
        <ResultsTable />
      </SearchContextProvider>
    </div>
  );
}