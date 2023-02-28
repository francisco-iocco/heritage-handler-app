import { useState, useContext } from "react";
import { FaRegUserCircle, FaCog, FaExchangeAlt, FaBell } from "react-icons/fa";
import UserDataContext from "contexts/UserDataContext";
import Spinner from "components/Spinner";
import Settings from "./components/Settings";
import AccountList from "./components/AccountList";
import LinkRequests from "./components/LinkRequests";
import StyledAccount from "./styles";

export default function Account() {
  const { userData, isLoading } = useContext(UserDataContext);
  const [ sectionToRender, setSectionToRender ] = useState("settings");

  return (
    <>
      {isLoading 
        ? <Spinner />
        : (
          <StyledAccount className="section" sectionToRender={sectionToRender}>
            <div className="account-presentation">
              <div className="bg-blue"></div>
              <div className="account-info">
                <span>
                  <FaRegUserCircle />
                </span>
                <p>{userData.username}</p>
              </div>
            </div>
            <div className="account-configuration">
              <div className="icons-bar">
                <button
                  className="settings"
                  onClick={() => setSectionToRender("settings")}
                >
                  <FaCog />
                </button>
                <button
                  className="account-list"
                  onClick={() => setSectionToRender("account-list")}
                >
                  <FaExchangeAlt />
                </button>
                <button
                  className="link-request"
                  onClick={() => setSectionToRender("link-requests")}
                >
                  <FaBell />
                </button>
              </div>
              <div className="content">
                {sectionToRender === "settings" && <Settings />}
                {sectionToRender === "account-list" && (
                  <AccountList myUsername={userData.username} />
                )}
                {sectionToRender === "link-requests" && <LinkRequests />}
              </div>
            </div>
          </StyledAccount>
        )
      }
    </>
  );
}
