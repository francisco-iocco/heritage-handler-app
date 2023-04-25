import { useContext, useState } from "react";
import UserDataContext from "contexts/UserDataContext";
import StyledLinkRequests from "./styles";
import useHandleUser from "hooks/useHandleUser";
import Spinner from "components/Spinner";

export default function LinkRequests() {
  const { userData: { linkRequests } } = useContext(UserDataContext);
  const { handleUserResponse, isLoading } = useHandleUser();
  const [btnLoad, setBtnLoad] = useState("");

  const acceptRequest = (id) => {
    setBtnLoad("accept");
    handleUserResponse({ linkUserResponse: { id, accepted: true } });
  }

  const denyRequest = (id) => {
    setBtnLoad("deny");
    handleUserResponse({ linkUserResponse: { id, accepted: false } });
  }

  return (
    <StyledLinkRequests>
      <h2>Link Requests</h2>
      {linkRequests.length
        ? (
          <table>
            <thead>
              <tr>
                <th>Link request from</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {linkRequests && linkRequests.map((linkRequest) => (
                <tr key={linkRequest._id}>
                  <td>
                    <p>{linkRequest.username}</p>
                  </td>
                  <td>
                    <button className="accept" onClick={() => acceptRequest(linkRequest._id)}>
                      {btnLoad === "accept"
                        ? <Spinner height="100%" size="1em" showText={false} color="#inherit" />
                        : "Accept"
                      }
                    </button>
                    <button className="deny" onClick={() => denyRequest(linkRequest._id)}>
                      {btnLoad === "deny"
                        ? <Spinner height="100%" size="1em" showText={false} color="inherit" />
                        : "Deny"
                      }
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )
        : <p className="no-req">There aren't any link requests!</p>
      }

    </StyledLinkRequests>
  );
}
