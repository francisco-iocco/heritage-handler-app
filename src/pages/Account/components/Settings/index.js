import StyledSettings from "./styles";

export default function Settings() {
  return (
    <StyledSettings>
      <h2>Settings</h2>
      <div>
        <h3>Change Email</h3>
        <p>Do it if you aren't satisfied with your current one!</p>
        <button>Change email</button>
      </div>
      <div>
        <h3>Change Password</h3>
        <p>Be careful! try to choose one you are able to remeber.</p>
        <button>Change password</button>
      </div>
      <div className="delete-container">
        <h3>Delete Account</h3>
        <p>Once you've deleted it, you can't go back.</p>
        <button>Delete account</button>
      </div>
    </StyledSettings>
  );
}
