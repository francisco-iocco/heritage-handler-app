import { useContext } from "react";
import { SearchResultContextProvider } from "contexts/SearchResultContext";
import ResultsContext from "contexts/ResultsContext";
import Spinner from "components/Spinner";
import ResultCreator from "pages/Search/components/ResultCreator";
import ResultsTable from "pages/Search/components/ResultsTable";
import StyledSearch from "./styles";

export default function Search() {
  const { isLoading } = useContext(ResultsContext);

  return (
    <StyledSearch>
      {isLoading 
        ? <Spinner size="2.618em" height="100%" />
        : (
          <SearchResultContextProvider>
            <ResultCreator />
            <ResultsTable />
          </SearchResultContextProvider>
        )
      }
    </StyledSearch>
  );
}
