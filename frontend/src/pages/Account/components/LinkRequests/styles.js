import styled from "@emotion/styled";

const StyledLinkRequests = styled.table`
width: 100%;

tr {
  display: block;
  box-shadow: 0 0 15px -5px #bbb;
  margin: 15px 0;
  border-radius: 10px;
}

thead tr {
  margin: 0;
}

th, td {
  width: 50%;
  padding: 20px;
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

td:first-of-type p span {
  display: inline-block;
  width: 100%;
  position: relative;
  animation: 7s linear infinite alternate slide-and-show;
}

td:last-of-type {
  justify-content: space-evenly;
}

td:last-of-type button {
  padding: 10px;
  border-radius: 15px;
  border: none;
  color: #fff;
}

.btn-accept {
  background-color: #1ac31a;
}

.btn-deny {
  background-color: #dc1616;
}

@keyframes slide-and-show {
  0% {
    left: 0%;
  }
  20% {
    left: 0%;
  }
  80% {
    left: -100%;
  }
  100% {
    left: -100%;
  }
}
`

export default StyledLinkRequests;