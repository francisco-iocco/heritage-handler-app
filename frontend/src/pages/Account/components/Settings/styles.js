import styled from "@emotion/styled";

const StyledSettings = styled.div`
  div {
    margin: 30px 0;
  }

  div:first-of-type, div:first-of-type h3 {
    margin-top: 0;
  } 
  
  h3 {
    border-bottom: 1px solid ${({ theme }) => theme.colors.primary};
    display: inline-block;
    margin: 15px 0;
    padding: 10px 0;
  }

  p {
    color: #111;
    margin: 10px 0;
  }
  
  div > button {
    background-color: ${({ theme }) => theme.colors.primary};
    border-radius: 10px;
    border: none;
    color: #fff;
    margin-top: 15px;
    padding: 15px;
  }

  p button {
    background-color: transparent;
    border: none;
    color: ${({ theme }) => theme.colors.secondary};
    font-size: 1em;
  }

  .delete-container h3 {
    border-bottom-color: ${({ theme }) => theme.colors.remittance};
    color: ${({ theme }) => theme.colors.remittance};
  } 
  
  .delete-container button {
    background-color: ${({ theme }) => theme.colors.remittance};
  }

  ${({ theme }) => theme.bps.laptops} {
    div > button {
      transition: background-color .5s;
    }

    div > button:hover {
      background-color: ${({ theme }) => theme.colors.primary + "cc"};
    }

    .delete-container button:hover {
      background-color: ${({ theme }) => theme.colors.remittance + "cc"};
    }

    p button:hover {
      text-decoration: underline;
    }
  }
`;

export default StyledSettings;