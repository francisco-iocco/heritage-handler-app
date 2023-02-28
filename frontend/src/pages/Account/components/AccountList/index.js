import { useState, useContext } from "react";
import UserDataContext from "contexts/UserDataContext";
import useHandleUser from "hooks/useHandleUser";
import { FaHistory } from "react-icons/fa";
import UserForm from "components/UserForm";
import Modal from "components/Modal";
import StyledAccountList from "./styles";

export default function ChangeAccount({ myUsername }) {
  const { userData: { linkedAccounts } } = useContext(UserDataContext);
  const { changeUser, updateUser } = useHandleUser();
  const [
    isLinkExistingModalActive, 
    setIsLinkExistingModalActive
  ] = useState(false);
  const [
    isLinkNewModalActive, 
    setIsLinkNewModalActive
  ] = useState(false);

  const changeAccount = async (userId) => {
    await updateUser({ lastConnection: new Date() });
    changeUser({ userId });
  }

  const deleteAccount = async (e, userId) => {
    e.stopPropagation();
    await updateUser({ idToBeUnlinked: userId });
  }

  const handleLinkExistingModal = () =>
    setIsLinkExistingModalActive(!isLinkExistingModalActive);
  const handleLinkNewModal = () =>
    setIsLinkNewModalActive(!isLinkNewModalActive);

  return (
    <>
      <StyledAccountList>
        <h2>Change Account</h2>
        <table>
          <thead>
            <tr>
              <th>Account</th>
              <th>Last Conecction <FaHistory /></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><p>{myUsername}</p></td>
              <td>Active</td>
            </tr>
            {linkedAccounts.map((linkedAccount) => (
              <tr key={linkedAccount._id} onClick={() => changeAccount(linkedAccount._id)}>
                <td>
                  <button onClick={(e) => deleteAccount(e, linkedAccount._id)}>Unlink</button>
                  <p>{linkedAccount.username}</p>
                </td>
                <td>{linkedAccount.lastConnection}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="buttons-container">
          <button onClick={handleLinkExistingModal}>
            Link existing account
          </button>
          <button onClick={handleLinkNewModal}>
            Create linked account
          </button>
        </div>
      </StyledAccountList>

      {isLinkExistingModalActive && (
        <Modal onClose={handleLinkExistingModal}>
          <UserForm
            title="Link existing account"
            btnTitle="Send request"
            usage="link-existing"
            note="You must wait for the other user to accept your request."
            onSubmit={handleLinkExistingModal}
          />
        </Modal>
      )}

      {isLinkNewModalActive && (
        <Modal onClose={handleLinkNewModal}>
          <UserForm
            title="Link new account"
            btnTitle="Create and link"
            usage="register-and-link"
            note={`This account will be linked with ${myUsername}.`}
            onSubmit={handleLinkNewModal}
          />
        </Modal>
      )}
    </>
  );
}
