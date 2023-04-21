import styled from "@emotion/styled";

export const StyledTable = styled.table`
  display: block;
  height: calc(100% - 100px);
  overflow-y: auto;

  thead, tbody, tr {
    display: block;
  }

  thead {
    position: sticky;
    top: 0px;
    transform: ${({ direction }) => direction === "down" ? "translateY(-100%)" : "translateY(0)"};
    transition: transform .5s;
    z-index: 10;
  }

  thead > tr.head-row {
    background-color: #fff;
  }

  th {
    display: inline-block;
    padding: 20px;
    text-align: center;
    width: 33.33%;
  }

  th span {
    border-bottom: 1px solid ${({ theme }) => theme.colors.secondary};
    padding-bottom: 5px;
  }

  .search-container {
    align-items: center;
    background-color: #fff;
    border-radius: 10px;
    bottom: 15%;
    display: flex;
    left: 50%;
    padding: 15px;
    position: fixed;
    transform: translateX(-50%);
  }

  .search-container input {
    outline: none;
    padding: 10px;
  }

  .search-container button {
    background-color: transparent;
    border-left: 1px solid #999;
    border: none;
    color: #808080;
    font-size: 20px;
    height: 50%;
    margin-left: 15px;
    padding-left: 15px;
  }
`;

export const StyledInput = styled.div`
  bottom: 20%;
  display: flex;
  left: 50%;
  position: absolute;
  transform: translateX(-50%);

  input {
    border-bottom: 2px solid ${({ theme }) => theme.colors.secondary};
    border: none;
    outline: none;
    padding: 15px;
  }

  button {
    background-color: #fff;
    border-radius: 5px;
    border: none;
    color: ${({ theme }) => theme.colors.secondary};
    display: grid;
    margin-left: 20px;
    padding: 5px;
    place-items: center;
  }
`;

export default StyledTable;
