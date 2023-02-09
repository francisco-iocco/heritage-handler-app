import styled from "@emotion/styled";

const StyledAccountList = styled.div`
  .accounts-grid {
    display: grid;
    row-gap: 20px;
  }

  .accounts-grid > div:first-of-type {
    border: 1px solid #bbb;
    box-shadow: none;
    padding: 15px;
  }

  .accounts-grid > div:first-of-type > div:first-of-type {
    border-right: 1px solid #000;
    margin: 15px;
  }
  .accounts-grid div:first-of-type span {
    display: block;
    margin-top: 5px;
  }

  .accounts-grid > div:not(.buttons-container) {
    align-items: center;
    border-radius: 15px;
    box-shadow: 0 0 15px -5px #bbb;
    display: grid;
    grid-template-columns: 65% auto;
    text-align: center;
  }

  .accounts-grid div.account {
    border-right: 1px solid #000;
    margin: 20px;
    overflow: hidden;
    text-align: left;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  .accounts-grid div.active {
    background-color: #1ac31a;
    grid-row: 2;
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
