import { memo } from "react";
import { IconSettings, IconExchange, IconBell, IconUserCircle } from "@tabler/icons-react";

function Menu({ sectionToRender, setSectionToRender, userData }) {

  const changeSection = (section) => {
    (sectionToRender != section) && setSectionToRender(section);
  }

  return (
    <>
      <div className="presentation">
        <div className="info">
          <div>
            <IconUserCircle size="1em" />
          </div>
          <p>{userData.username}</p>
        </div>
      </div>
      <div className="menu">
        <button
          className="settings"
          onClick={() => changeSection("settings")}
        >
          <IconSettings size="1em" />
        </button>
        <button className="list" onClick={() => changeSection("list")}>
          <IconExchange size="1em" />
        </button>
        <button
          className="link-requests"
          onClick={() => changeSection("link-requests")}
        >
          <IconBell size="1em" />
        </button>
      </div>
    </>
  );
}

export default memo(Menu);
