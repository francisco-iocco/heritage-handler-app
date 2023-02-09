import { useState } from "react";
import { FaHistory } from "react-icons/fa";
import UserForm from "components/UserForm";
import Modal from "components/Modal";
import StyledAccountList from "./styles";

export default function ChangeAccount({ myEmail }) {
  const [ isLinkExistingModalActive, setIsLinkExistingModalActive ] = useState(false);
  const [ isLinkNewModalActive, setIsLinkNewModalActive ] = useState(false);

  const handleLinkExistingModal = () => setIsLinkExistingModalActive(!isLinkExistingModalActive);
  const handleLinkNewModal = () => setIsLinkNewModalActive(!isLinkNewModalActive);

  return (
    <>
    <StyledAccountList>
      <h2>Change Account</h2>
      <div className="accounts-grid">
        <div>
          <div>Account</div>
          <div>
            Last Conecction
            <span>
              <FaHistory />
            </span>
          </div>
        </div>
        <div className="active">
          <div className="account">{myEmail}</div>
          <div>Active</div>
        </div>
        <div className="buttons-container">
          <button onClick={handleLinkExistingModal}>Link existing account</button>
          <button onClick={handleLinkNewModal}>Create linked account</button>
        </div>
        {/* <div> 
              <div className="account">jjuarez@gmail.com</div>
              <div>6 Hours ago</div>
            </div>
            <div>
              <div className="account">benisan@gmail.com</div>
              <div>2 days ago</div>
            </div>
            <div>
              <div className="account">milibilboa@gmail.com</div>
              <div>3 months ago</div>
            </div> */}
      </div>
    </StyledAccountList>
    {
      isLinkExistingModalActive && <Modal onClose={handleLinkExistingModal}>
        <UserForm 
          title="Link existing account" 
          btnTitle="Send request" 
          usage="link-existing-account"
          note="You must wait for the other user to accept your request."
        />
      </Modal>
    }
    {
      isLinkNewModalActive && <Modal onClose={handleLinkNewModal}>
        <UserForm 
          title="Link new account" 
          btnTitle="Create and link" 
          usage="link-new-account"
          note={`This account will be linked with ${myEmail}.`}
        />
      </Modal>
    }
    </>
  );
}
