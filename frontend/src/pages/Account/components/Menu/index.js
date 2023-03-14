import { memo } from "react";
import { FaRegUserCircle, FaCog, FaExchangeAlt, FaBell } from "react-icons/fa";

function Menu({ setSectionToRender, userData }) {
  return (
    <>
      <div className="presentation">
        <div className="bg-blue"></div>
        <div className="info">
          <span>
            <FaRegUserCircle />
          </span>
          <p>{userData.username}</p>
        </div>
      </div>
      <div className="menu">
        <button
          className="settings"
          onClick={() => setSectionToRender("settings")}
        >
          <FaCog />
        </button>
        <button className="list" onClick={() => setSectionToRender("list")}>
          <FaExchangeAlt />
        </button>
        <button
          className="link-request"
          onClick={() => setSectionToRender("link-requests")}
        >
          <FaBell />
        </button>
      </div>
    </>
  );
}

export default memo(Menu);
