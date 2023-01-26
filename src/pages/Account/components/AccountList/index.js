import { FaHistory } from "react-icons/fa"
import StyledAccountList from "./styles"

export default function ChangeAccount() {
    return (
        <StyledAccountList>
          <h2>Change Account</h2>
          <div className="accounts-grid">
            <div>
              <div>Account</div>
              <div>
                Last Conecction 
                <span><FaHistory/></span>
              </div>
            </div>
            <div className="active">
              <div className="account">franciscoiocco6@gmail.com</div>
              <div>Active</div>
            </div>
            <div> 
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
            </div>
          </div>
        </StyledAccountList>
    )
}