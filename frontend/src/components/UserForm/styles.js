import styled from "@emotion/styled";

export const StyledForm = styled.form`
  ${({ title }) => title === "Log into your account" && "box-shadow: 0 0 20px 0 #eee"};
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  padding: 25px;

  h3 {
    display: inline-block;
    font-size: ${({ theme }) => theme.fontSizes.l};
    margin: 15px 0;
    padding-bottom: 10px;
    text-align: center;
    border-bottom-width: 1px;
    border-bottom-style: solid;
    ${({ title, theme }) => 
      title === "Delete account" 
        ? `border-bottom-color: ${theme.colors.remittance};
           color: ${theme.colors.remittance};
          `
        : `border-bottom-color: ${theme.colors.primary};`
    }
  }

  button {
    background-color: ${({ title, theme }) => 
      title === "Delete account"
        ? theme.colors.remittance
        : theme.colors.primary
    };
    border: 2px solid ${({ title, theme }) => 
      title === "Delete account"
        ? theme.colors.remittance
        : theme.colors.primary
    };
    color: #fff;
    font-size: 1.2rem;
    margin: 15px 0;
    padding: 10px;
    width: 100%;
  }
  
  p.note {
    color: ${({ title, theme }) => 
      title === "Delete account"
        ? theme.colors.remittance
        : theme.colors.tertiary
    };
    font-size: 15px;
    line-height: 0.8;
    margin-bottom: 15px;
  }

  p.note span {
    vertical-align: middle;
  }

  ${({ theme }) => theme.bps.laptops} {
    button {
      cursor: pointer;
      transition: background-color .5s;
    }

    button:hover {
      border-color: transparent;
      background-color: ${({ title, theme }) => 
        (title === "Delete account"
          ? theme.colors.remittance
          : theme.colors.primary) + "cc"
      };
    }
  }
`;

export const StyledInput = styled.div`
  margin: 15px 0;
  width: 100%;

  div {
    height: 50px;
    position: relative;
  }

  label {
    align-items: center;
    box-shadow: 0 0 20px 0 #eee;
    color: ${({ theme }) => theme.colors.primary};
    display: flex;
    float: left;
    height: 100%;
    justify-content: center;
    width: 20%;
  }

  input {
    background-color: #fff;
    border: 1px solid ${({ theme }) => theme.colors.tertiary};
    box-shadow: 0 0 0 1000px #fff inset;
    color: ${({ theme }) => theme.colors.tertiary};
    float: right;
    height: 100%;
    outline: none;
    padding: 15px;
    width: 80%;
  }

  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  
  input[type=number] {
    -moz-appearance: textfield;
    appearance: textfield;
  }

  input:focus {
    border-color: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.primary};
  }

  input + span {
    background-color: #fff;
    color: ${({ theme }) => theme.colors.tertiary};
    font-size: 1rem;
    margin-left: 10px;
    padding: 0 5px;
    pointer-events: none;
    position: absolute;
    top: ${({ hasValue }) => hasValue ? "0" : "50%"};
    transform: translateY(-50%);
    transition: top .5s;
  }

  input:focus + span {
    color: ${({ theme }) => theme.colors.primary};
    top: 0;
  }
  
  p {
    animation: ${({ hideText }) => !hideText
      ? "showText .5s linear 0s forwards"
      : "hideText .5s linear 0s reverse"
    };
    color: red;
    font-size: 15px;
    margin-top: 10px;
    opacity: 0;
    transform: translateY(-50%);
  }

  p:first-letter {
    text-transform: capitalize;
  }

  @keyframes ${({ hideText }) => !hideText ? "showText" : "hideText"} {
    from {
      transform: translateY(-50%);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

export const StyledCheckbox = styled.div`
  align-items: center;
  display: flex;
  margin-bottom: 15px;

  label {
    font-size: ${({ theme }) => theme.fontSizes.m};
  }

  input[type="checkbox"] {
    -webkit-appearance: none;
    appearance: none;
    border: 2px solid #000;
    display: grid;
    height: 25px;
    margin: 0 10px;
    place-items: center;
    width: 25px;
  }

  input[type="checkbox"]:disabled {
    background-color: ${({ theme }) => theme.colors.tertiary};
    border-color:${({ theme }) => theme.colors.tertiary};
    color: gray;
  }

  input[type="checkbox"]:disabled:checked::before {
    background-color: gray;
  }

  input[type="checkbox"]:disabled + label {
    color: gray;
  }
  
  input[type="checkbox"]::before {
    border-radius: 2px;
    content: "";
    height: 70%;
    transform: scale(0);
    transition: transform .5s;
    width: 70%;
  }

  input[type="checkbox"]:checked::before {
    background-color: #5632fa;
    transform: scale(1);
  }

  ${({ theme }) => theme.bps.laptops} {
    input[type="checkbox"] {
      cursor: pointer;
    }
  }
`;

export const StyledSelect = styled.select`
  background-color: #fff;
  border: 1px solid ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.primary};
  outline: none;
  padding: 10px;

  :disabled {
    background-color: ${({ theme }) => theme.colors.tertiary};
    border-color:${({ theme }) => theme.colors.tertiary};
    color: gray;
  }

  ${({ theme }) => theme.bps.laptops} {
    cursor: pointer;
  }
`