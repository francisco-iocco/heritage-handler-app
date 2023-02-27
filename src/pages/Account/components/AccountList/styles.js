import styled from "@emotion/styled";

const StyledAccountList = styled.div`
  table {
    width: 100%;
  }

  tr {
    position: relative;
    display: block;
    padding: 10px;
    border-radius: 10px;
    box-shadow: 0 0 15px -5px #bbb;
    margin: 25px 0;
  }

  thead tr {
    margin-bottom: 0;
    margin-top: 0;
  }

  tr:active {
    background-color: rgba(0, 0, 0, 0.1);
  }
  
  th:first-of-type,
  td:first-of-type {
    display: inline-block;
    overflow: hidden;
    width: 60%;
    padding: 10px;
    border-right: 1px solid #bbb;
  }

  td:first-of-type button {
    position: absolute;
    top: 0;
    left: 0;
    transform: translate(25%, -50%);
    padding: 5px;
    border-radius: 10px;
    border: none;
    color: #fff;
    background-color: #f00;
  }

  th:last-of-type,
  td:last-of-type {
    text-align: center;
    display: inline-block;
    width: 40%;
    padding: 10px;
  }

  tbody tr:first-of-type {
    background-color: #1ac31a;
  }

  div.buttons-container {
    padding: 15px;
    box-shadow: none;
  }

  div.buttons-container {
    box-shadow: 0 0 15px -5px #bbb;
    border-radius: 10px;
    height: 125px;
    display: flex;
    justify-content: space-between;
    padding: 15px;
    position: relative;
  }

  div.buttons-container::after {
    content: "";
    height: 70%;
    width: 1px;
    display: inline-block;
    position: absolute;
    background-color: #808080;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%) rotate(40deg);
  }

  div.buttons-container button {
    color: #fff;
    padding: 10px;
    border-radius: 15px;
    border: none;
    width: 40%;
  }

  div.buttons-container button:first-of-type {
    align-self: flex-start;
    background-color: #2424d2;
  }

  div.buttons-container button:last-of-type {
    align-self: flex-end;
    background-color: #1ac31a;
  }
`;

export default StyledAccountList;
