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

  .accounts-grid > div:nth-of-type(2) ~ div:active {
    background-color: rgba(0, 0, 0, 0.1);
  }

  .accounts-grid > div {
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
`;

export default StyledAccountList;
