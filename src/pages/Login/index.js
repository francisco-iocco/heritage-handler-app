import Form from "components/Form";
import "./index.css";

/**
 * TODO: finish the section below the login form
 */

export default function Login() {
  return (
    <>
      <div className="section-1">
        <div>
          <h1>Heritage Handler App</h1>
          <h2>Quick, smart, easy to use... All in one place!</h2>
        </div>
      </div>
      <div className="section-2">
        <Form title="Log into your account" />
      </div>
    </>
  )
}