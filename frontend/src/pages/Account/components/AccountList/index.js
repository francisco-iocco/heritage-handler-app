import { useState, useContext } from "react";
import UserDataContext from "contexts/UserDataContext";
import useHandleUser from "hooks/useHandleUser";
import { IconHistory } from "@tabler/icons-react";
import UserForm from "components/UserForm";
import Modal from "components/Modal";
import Spinner from "components/Spinner";
import StyledAccountList from "./styles";

export default function ChangeAccount({ myUsername }) {
  const {
    userData: { linkedAccounts },
  } = useContext(UserDataContext);
  const { changeUser, updateLastConnection, unlinkUser } = useHandleUser();
  const [showLinkExistingModal, setShowLinkExistingModal] = useState(false);
  const [showLinkNewModal, setShowLinkNewModal] = useState(false);
  const [whichUnlinkLoading, setWhichUnlinkLoading] = useState("");
  const [whichChangeLoading, setWhichChangeLoading] = useState("");

  const changeAccount = async (userId) => {
    setWhichChangeLoading(userId);
    await updateLastConnection({ lastConnection: new Date() });
    await changeUser({ userId });
    setWhichChangeLoading(userId);
  };

  const deleteAccount = async (e, userId) => {
    e.stopPropagation();
    setWhichUnlinkLoading(userId);
    await unlinkUser({ idToBeUnlinked: userId });
    setWhichUnlinkLoading(userId);
  };

  const handleLinkExistingModal = () =>
    setShowLinkExistingModal(!showLinkExistingModal);
  const handleLinkNewModal = () => setShowLinkNewModal(!showLinkNewModal);

  return (
    <>
      <StyledAccountList>
        <h2>Change Account</h2>
        <table>
          <thead>
            <tr>
              <th>Account</th>
              <th>
                <span>Last Conecction</span>
                <IconHistory />
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <p>{myUsername}</p>
              </td>
              <td>Active</td>
            </tr>
            {linkedAccounts.map((linkedAccount) => (
              <tr
                key={linkedAccount._id}
                onClick={() => changeAccount(linkedAccount._id)}
              >
                <td>
                  <button onClick={(e) => deleteAccount(e, linkedAccount._id)}>
                    {whichUnlinkLoading === linkedAccount._id
                      ? <Spinner
                          height="100%" 
                          size="1em" 
                          color="inherit"
                          showText={false}
                        />
                      : "Unlink"
                    }
                  </button>
                  <p>{linkedAccount.username}</p>
                  {whichChangeLoading === linkedAccount._id && 
                    <div className="spinner">
                      <Spinner
                        height="100%" 
                        size="1em" 
                        color="#b7bbc7"
                        showText={false}
                      />
                    </div>
                  }
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
          <button onClick={handleLinkNewModal}>Create linked account</button>
        </div>
      </StyledAccountList>

      {showLinkExistingModal && (
        <Modal onClose={handleLinkExistingModal}>
          <UserForm
            title="Link existing account"
            btnTitle="Send request"
            usage="link-existing"
            inputs={{ username: true }}
            note="You must wait for the other user to accept your request."
            onSubmit={handleLinkExistingModal}
          />
        </Modal>
      )}

      {showLinkNewModal && (
        <Modal onClose={handleLinkNewModal}>
          <UserForm
            title="Link new account"
            btnTitle="Create and link"
            usage="register-and-link"
            inputs={{ username: true, password: true, heritage: true }}
            note={`This account will be linked with ${myUsername}.`}
            onSubmit={handleLinkNewModal}
          />
        </Modal>
      )}
    </>
  );
}
