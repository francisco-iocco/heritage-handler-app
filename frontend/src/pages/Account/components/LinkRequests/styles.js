import styled from "@emotion/styled";

const StyledLinkRequests = styled.div`
width: 100%;

table {
  width: 100%;
}

tr {
  border-radius: 10px;
  box-shadow: 0 0 30px 0 #eee;
  display: block;
  margin: 15px 0;
}

thead tr {
  margin: 0;
}

th, td {
  padding: 20px;
  width: 50%;
}

th {
  display: inline-block;
  text-align: center;
}

td {
  display: inline-flex;
}

td:first-of-type, th:first-of-type {
  border-right: 1px solid #bbb;
  margin: 10px 0;
}

td:first-of-type p {
  overflow: hidden;
  width: 100%;
}

td:last-of-type {
  justify-content: space-evenly;
}

td:last-of-type button {
  background-color: transparent;
  max-width: 200px;
  padding: 10px;
  width: 45%;
}

p.no-req {
  color: #bbb;
  margin: 20px;
  text-align: center;
}

button.accept {
  border: 2px solid ${({ theme }) => theme.colors.income};
  color: ${({ theme }) => theme.colors.income};
}

button.deny {
  border: 2px solid ${({ theme }) => theme.colors.remittance};
  color: ${({ theme }) => theme.colors.remittance};
}

${({ theme }) => theme.bps.laptops} {
  button {
    transition: all .5s;
  }
  
  button.accept:hover {
    background-color: ${({ theme }) => theme.colors.income};
    color: #fff;
  }

  button.deny:hover {
    background-color: ${({ theme }) => theme.colors.remittance};
    color: #fff;
  }
}
`

export default StyledLinkRequests;