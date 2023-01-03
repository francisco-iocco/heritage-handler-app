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
    width: 33.33%;
    padding: 20px;
    text-align: center;
  }

  th span {
    border-bottom: 1px solid lightblue;
    padding-bottom: 5px;
  }

  td.amount {
    border-left: 1px solid #999;
    height: 80%;
    border-right: 1px solid #999;
  }

  td:last-child {
    display: inline-flex;
    justify-content: space-evenly;
  }

  td:last-child button {
    border: none;
    padding: 10px;
    font-size: 16px;
    border-radius: 5px;
    color: #fff;
  }

  td:last-child button.edit {
    background-color: #2424d2;
  }

  td:last-child button.delete {
    background-color: #dc1616;
  }

  .search-container {
    border-radius: 10px;
    display: flex;
    align-items: center;
    position: fixed;
    background-color: #fff;
    padding: 15px;
    bottom: 15%;
    left: 50%;
    transform: translateX(-50%);
  }

  .search-container input {
    padding: 10px;
    outline: none;
  }

  .search-container button {
    background-color: transparent;
    font-size: 20px;
    border: none;
    margin-left: 15px;
    border-left: 1px solid #999;
    height: 50%;
    padding-left: 15px;
    color: #808080;
  }
`;

export default StyledResultsDiv;