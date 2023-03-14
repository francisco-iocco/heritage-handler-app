import { useState, useContext } from "react";
import UserDataContext from "contexts/UserDataContext";
import Spinner from "components/Spinner";
import Menu from "./components/Menu";
import Settings from "./components/Settings";
import AccountList from "./components/AccountList";
import LinkRequests from "./components/LinkRequests";
import StyledAccount from "./styles";

export default function Account() {
  const { userData, isLoading } = useContext(UserDataContext);
  const [ sectionToRender, setSectionToRender ] = useState("settings");

  if (isLoading) return <Spinner />;
  return (
    <StyledAccount className="section" sectionToRender={sectionToRender}>
      <Menu setSectionToRender={setSectionToRender} userData={userData} />
      <div className="configuration">
        <div>
          {sectionToRender === "settings" && <Settings />}
          {sectionToRender === "list" && (
            <AccountList myUsername={userData.username} />
          )}
          {sectionToRender === "link-requests" && <LinkRequests />}
        </div>
      </div>
    </StyledAccount>
  );
}
