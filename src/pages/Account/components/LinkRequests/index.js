import { useContext } from "react";
import UserDataContext from "contexts/UserDataContext";
import StyledLinkRequests from "./styles";
import useHandleUser from "hooks/useHandleUser";

export default function LinkRequests() {
  const { userData: { linkRequests } } = useContext(UserDataContext);
  const { updateUser } = useHandleUser();

  const acceptRequest = (id) => {
    updateUser({ linkUserResponse: { id, accepted: true } });
  }

  const denyRequest = (id) => {
    updateUser({ linkUserResponse: { id, accepted: false } });
  }

  return (
    <>
      <h2>Link Requests</h2>
      <StyledLinkRequests>
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
                <p><span>{linkRequest.username}</span></p>
              </td>
              <td>
                <button className="btn-accept" onClick={() => acceptRequest(linkRequest._id)}>Accept</button>
                <button className="btn-deny" onClick={() => denyRequest(linkRequest._id)}>Deny</button>
              </td>
            </tr>
          ))}
        </tbody>
      </StyledLinkRequests>
    </>
  );
}
