import { SearchResultContextProvider } from "contexts/SearchResultContext";
import { CreateResultContextProvider } from "contexts/CreateResultContext";
import ResultCreator from "pages/Search/components/ResultCreator";
import ResultsTable from "pages/Search/components/ResultsTable";

export default function Search() {
  return (
    <div className="section">
      <CreateResultContextProvider>
        <SearchResultContextProvider>
          <ResultCreator />
          <ResultsTable />
        </SearchResultContextProvider>
      </CreateResultContextProvider>
    </div>
  );
}