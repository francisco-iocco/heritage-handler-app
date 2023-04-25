import styled from "@emotion/styled";

const StyledAccountList = styled.div`
  table {
    width: 100%;
  }

  tr {
    border-radius: 10px;
    box-shadow: 0 0 30px 0 #eee;
    display: block;
    margin: 25px 0;
    padding: 10px;
    position: relative;
  }

  thead tr {
    margin: 0;
  }

  tr:not(:first-of-type):not(:has(button:active)):active {
    background-color: rgba(0, 0, 0, 0.1);
    transform: scale(1.01);
  }
  
  tbody tr:first-of-type {
    background-color: ${({ theme }) => theme.colors.secondary};
    color: #fff;
  }

  th:last-of-type {
    align-items: center;
    display: inline-flex;
    justify-content: center;
  }

  th:last-of-type span {
    margin-right: 5px;
  }
  
  th:first-of-type,
  td:first-of-type {
    border-right: 1px solid ${({ theme }) => theme.colors.tertiary};
    display: inline-block;
    overflow: hidden;
    padding: 10px;
    width: 60%;
  }

  th:last-of-type,
  td:last-of-type {
    display: inline-block;
    padding: 10px;
    text-align: center;
    width: 40%;
  }

  tbody tr:first-of-type td:first-of-type {
    border-right: 1px solid #fff;
  }

  td button {
    background-color: #f00;
    border-radius: 10px;
    border: none;
    color: #fff;
    left: 10px;
    padding: 5px;
    position: absolute;
    top: 0;
    transform: translateY(-50%);
  }

  td button:active {
    transform: translateY(-50%) scale(1.05);
  }

  td p {
    display: inline-block;
  }

  td .spinner {
    float: right;
  }

  .buttons-container {
    border-radius: 10px;
    box-shadow: 0 0 30px 0 #eee;
    display: flex;
    height: 125px;
    justify-content: space-around;
    margin: auto;
    max-width: 800px;
    padding: 15px;
    position: relative;
  }
  
  .buttons-container::after {
    background-color: ${({ theme }) => theme.colors.tertiary};
    content: "";
    display: inline-block;
    height: 70%;
    left: 50%;
    position: absolute;
    top: 50%;
    transform: translate(-50%, -50%);
    width: 1px;
  }

  .buttons-container button {
    background-color: ${({ theme }) => theme.colors.primary};
    border: none;
    color: #fff;
    font-size: ${({ theme }) => theme.fontSizes.m};
    max-width: 40%;
    padding: 10px;
  }

  .buttons-container button:first-of-type {
    align-self: flex-start;
  }

  .buttons-container button:last-of-type {
    align-self: flex-end;
    background-color: transparent;
    border: 2px solid ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.primary};
  }

  ${({ theme }) => theme.bps.laptops} {
    tr:not(:first-of-type) {
      transition: background-color .5s;
    }

    tr:not(:first-of-type):not(:has(button:hover)):hover {
      cursor: pointer;
      background-color: rgba(0, 0, 0, 0.1);
    }

    tr button {
      border: 2px solid ${({ theme }) => theme.colors.remittance};
      transition: all .5s;
    }

    tr button:hover {
      background-color: #fff;
      color: ${({ theme }) => theme.colors.remittance};
    }

    .buttons-container button {
      transition: background-color .5s;
    }

    .buttons-container button:first-of-type:hover {
      background-color: ${({ theme }) => theme.colors.primary + "cc"};
    }

    .buttons-container button:last-of-type:hover {
      background-color: ${({ theme }) => theme.colors.primary + "30"};
    }
  }
`;

export default StyledAccountList;
