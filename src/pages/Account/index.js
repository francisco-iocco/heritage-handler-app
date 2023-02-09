import { useState, useContext } from "react";
import UserDataContext from "contexts/UserDataContext";
import { FaRegUserCircle, FaCog, FaExchangeAlt } from "react-icons/fa";
import Nav from "components/Nav";
import Settings from "./components/Settings";
import AccountList from "./components/AccountList";
import StyledAccount from "./styles";

export default function Account() {
  const [ sectionToRender, setSectionToRender ] = useState("settings");
  const { userData } = useContext(UserDataContext);

  return (
    <StyledAccount className="section" sectionToRender={sectionToRender}>
      <div className="account-presentation">
        <div className="bg-blue"></div>
        <div className="account-info">
          <span>
            <FaRegUserCircle />
          </span>
          <p>{userData.email}</p>
        </div>
      </div>
      <div className="account-configuration">
        <div className="icons-bar">
          <button className="settings" onClick={() => setSectionToRender("settings")}><FaCog /></button>
          <button className="account-list" onClick={() => setSectionToRender("account-list")}><FaExchangeAlt /></button>
        </div>
        <div className="content">
          {sectionToRender === "settings" && <Settings />}
          {sectionToRender === "account-list" && <AccountList myEmail={userData.email}/>}
        </div>
      </div>
      <Nav />
    </StyledAccount>
  )
}