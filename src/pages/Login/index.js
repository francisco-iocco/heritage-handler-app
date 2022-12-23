import Form from "components/Form";
import "./index.css";

/**
 * TODO: finish the section below the login form
 */

export default function Login() {
  return (
    <>
      <div className="section-1">
        <header>
          <h1>Heritage Handler App</h1>
          <h2>Quick, smart, easy to use... All in one place!</h2>
        </header>
      </div>
      <div className="section-2">
        <Form title="Log into your account" />
        <div className="divider"></div>
        <button className="registerBtn">Create a new account</button>
      </div>
    </>
  )
}