import { SearchResultContextProvider } from "contexts/SearchResultContext";
import { CreateResultContextProvider } from "contexts/CreateResultContext";
import SEO from "components/SEO";
import Nav from "components/Nav";
import ResultCreator from "pages/Search/components/ResultCreator";
import ResultsTable from "pages/Search/components/ResultsTable";

export default function Search() {
  return (
    <>
      <SEO />
      <div className="section">
        <Nav />
        <CreateResultContextProvider>
          <SearchResultContextProvider>
            <ResultCreator />
            <ResultsTable />
          </SearchResultContextProvider>
        </CreateResultContextProvider>
      </div>
    </>
  );
}