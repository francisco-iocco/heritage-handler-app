import styled from "@emotion/styled";

const StyledResult = styled.tr`
  position: relative;
  &:nth-of-type(odd) {
    background-color: #eee;
  }

  td div.permanent::before {
    content: "";
    display: block;
    background-color: ${props => props.index % 2 === 0 ? "#eee" : "#fff"};
    width: 20px;
    height: 20px;
    transform: rotate(45deg);
    position: absolute;
    top: 0;
    left: -10%;
  }

  td div.permanent {
    display: flex;
    align-items: center;
    justify-content: right;
    overflow: hidden;
    background-color: #2424d2;
    width: 30%;
    height: 20px;
    font-size: 4vw;
    text-align: right;
    padding: 10px 5px 10px 0;
    color: #fff;
    position: absolute;
    left: 0;
    top: 0;
  }

  td {
    display: inline-block;
    padding: 20px;
    text-align: center;
    width: 33.33%;
  }

  td.amount {
    color: ${props => props.amount >= 0 ? "#1ac31a" : "#dc1616"};
    border-left: 1px solid #999;
    border-right: 1px solid #999;
    height: 80%;
  }

  td:last-child {
    display: inline-flex;
    justify-content: space-evenly;
  }

  td:last-child button {
    border-radius: 5px;
    border: none;
    color: #fff;
    font-size: 16px;
    padding: 10px;
  }

  td:last-child button.edit {
    background-color: #2424d2;
  }

  td:last-child button.delete {
    background-color: #dc1616;
  }
`;

export default StyledResult;
