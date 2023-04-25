import styled from "@emotion/styled";

const StyledResultCreator = styled.div`
  background-color: #fff;
  border-bottom: 1px solid ${({ theme }) => theme.colors.tertiary};
  height: 100px;
  position: sticky;
  top: 0;
  z-index: 1;

  .filter-container {
    align-items: center;
    border-right: 1px solid ${({ theme }) => theme.colors.tertiary};
    display: inline-flex;
    height: 100%;
    justify-content: center;
    width: 20%;
  }

  .filter-container button {
    ${({ theme, searchFilters }) => searchFilters
      ? `background-color: transparent;
        box-shadow: 0 0 30px 0 #eee;`
      : `background-color: ${theme.colors.primary};`};
    transition: background-color .5s;
    align-items: center;
    background-color: ${({ theme, searchFilters }) => searchFilters
      ? "transparent" : theme.colors.primary};
    border-radius: 15px;
    border: none;
    color: #fff;
    display: flex;
    font-size: ${({ theme }) => theme.fontSizes.s};
    justify-content: center;
    padding: 30px;
    position: relative;
    overflow: hidden;
  }

  .filter-container button span {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    width: 100%;
    transition: transform .5s;
  }

  .filter-container button span:first-of-type {
    position: absolute;
    transform: ${({ searchFilters }) => searchFilters 
      ? "translateY(0)" : "translateY(-100%)"};
    color: ${({ theme }) => theme.colors.remittance};
  }

  .filter-container button span:last-of-type {
    position: absolute;
    transform: ${({ searchFilters }) => searchFilters 
      ? "translateY(-100%)" : "translateY(0)"};
  }

  .buttons-container {
    align-items: center;
    display: inline-flex;
    height: 100%;
    justify-content: space-evenly;
    vertical-align: top;
    width: 80%;
  }

  .buttons-container button {
    background-color: #fff;
    border-radius: 5px;
    border: 2px solid ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.primary};
    font-size: ${({ theme }) => theme.fontSizes.m};
    padding: 10px;
  }

  ${({ theme }) => theme.bps.laptops} {
    .filter-container button:hover {
      ${({ theme, searchFilters }) =>  searchFilters
        ? "box-shadow: 0 0 30px 0 #ddd;"
        : `background-color: ${theme.colors.primary}cc;`};
      
    }

    .buttons-container button:hover {
      background-color: ${({ theme }) => theme.colors.primary + "30"};
      transition: background-color .5s;
    }
  }
`;

export default StyledResultCreator;