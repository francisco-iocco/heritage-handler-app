import styled from "@emotion/styled";

const StyledSearchForm = styled.form`
  align-items: center;
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: space-evenly;
  padding: 10px;

  h2 {
    ${(props) => {
      if (props.title.includes("income")) {
        return "color: #1ac31a";
      } else if (props.title.includes("remittance")) {
        return "color: #dc1616";
      }
    }}
    color: ${({ theme }) => theme.colors.primary};
    font-size: 30px;
    letter-spacing: 2px;
    margin-bottom: 15px;
    text-align: center;
  }

  input[type="radio"] {
    align-items: center;
    appearance: none;
    border-radius: 50%;
    border: 2px solid #000;
    cursor: pointer;
    display: flex;
    height: 25px;
    justify-content: center;
    margin: 20px 10px;
    width: 25px;
  }

  input[type="radio"]::before {
    border-radius: 50%;
    content: "";
    height: 70%;
    transform: scale(0);
    transition: transform .5s;
    width: 70%;
  }

  input[type="radio"]:checked::before {
    background-color: #5632fa;
    transform: scale(1);
  }

  div {
    align-items: center;
    display: flex;
  }

  button {
    background-color: transparent;
    border: 2px solid ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.primary};
    font-size: 20px;
    margin: 10px;
    overflow: hidden;
    padding: 15px;
    position: relative;
    transition: background-color .5s;
  }

  ${({ theme }) => theme.bps.laptops} {
    button:hover {
      background-color: ${({ theme }) => theme.colors.primary + "30"};
    }
  }
`;

export default StyledSearchForm;
