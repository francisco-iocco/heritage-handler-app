import { SearchResultContextProvider } from "contexts/SearchResultContext";
import ResultCreator from "pages/Search/components/ResultCreator";
import ResultsTable from "pages/Search/components/ResultsTable";

export default function Search() {
  return (
    <div className="section">
      <SearchResultContextProvider>
        <ResultCreator />
        <ResultsTable />
      </SearchResultContextProvider>
    </div>
  );
}
