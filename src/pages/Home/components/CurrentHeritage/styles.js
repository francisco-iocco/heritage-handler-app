import styled from "@emotion/styled";

const StyledDiv = styled.div`
  align-items: center;
  border-top: 1px solid #999;
  display: flex;
  flex-direction: column;
  height: 25%;
  justify-content: space-evenly;

  & h3 {
    font-size: 25px;
    border-bottom: 1px solid lightblue;
    padding: 5px;
  }

  & p {
    font-size: 20px;
  }
`;

export default StyledDiv;
