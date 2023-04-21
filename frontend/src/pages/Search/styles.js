import styled from "@emotion/styled";

const StyledSearch = styled.div`
  font-size: 18px;
  height: calc(100% - 100px);
  width: 100%;

  ${({ theme }) => theme.bps.tablets} { font-size: 22px; }
  ${({ theme }) => theme.bps.laptops} {
    font-size: 24px;
    height: 100%;
    margin-left: 150px;
    width: calc(100% - 150px);
  }
  ${({ theme }) => theme.bps.desktops} { font-size: 26px; }
`

export default StyledSearch;