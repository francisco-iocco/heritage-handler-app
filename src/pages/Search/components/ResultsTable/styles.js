import styled from "@emotion/styled";

const StyledResultsDiv = styled.div`
  width: 100%;

  table {
    width: 100%;
  }

  tr:nth-of-type(odd) {
    background-color: #eee;
  }

  thead > tr.head-row {
    background-color: #fff;
  }

  th, td {
    display: inline-block;
    padding: 20px;
    text-align: center;
    width: 33.33%;
  }

  th span {
    border-bottom: 1px solid lightblue;
    padding-bottom: 5px;
  }

  td.amount {
    border-left: 1px solid #999;
    border-right: 1px solid #999;
    height: 80%;
  }

  td:last-child {
    display: inline-flex;
    justify-content: space-evenly;
  }

  td:last-child button {
    border-radius: 5px;
    border: none;
    color: #fff;
    font-size: 16px;
    padding: 10px;
  }

  td:last-child button.edit {
    background-color: #2424d2;
  }

  td:last-child button.delete {
    background-color: #dc1616;
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

export default StyledResultsDiv;
