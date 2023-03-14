import styled from "@emotion/styled";

const StyledSettings = styled.div`
  div {
    margin: 30px 0;
  }

  div:first-of-type, div:first-of-type h3 {
    margin-top: 0;
  } 
  
  h3 {
    border-bottom: 1px solid #2424d2;
    display: inline-block;
    margin: 15px 0;
    padding: 10px 0;
  }

  p {
    color: #111;
    margin: 10px 0;
  }

  p span {
    color: #2424d2;
  }
  
  p span:hover {
    text-decoration: underline;
  }

  button {
    background-color: #2424d2;
    border-radius: 10px;
    border: none;
    color: #fff;
    margin-top: 15px;
    padding: 15px;
  }

  .delete-container h3 {
    border-bottom-color: #f85149;
    color: #f85149;
  } 
  
  .delete-container button {
    background-color: #f85149;
  }
`;

export default StyledSettings;