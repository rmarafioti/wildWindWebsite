import { Link } from "react-router-dom";
import "./styling/form.css";

export default function RequestSent() {
  return (
    <main id="requestSent">
      <h1 id="requestSentMessage">Thank you for your message!</h1>
      <h3>Your request has been sent</h3>
      <h3 id="requestMessage">
        You can expect a response within 1-3 days. We are excited to work with
        you soon!
      </h3>
      <h3 className="messageTag">Best,</h3>
      <h3 className="messageTag">Wild Wind Tattoo</h3>
      <Link id="returnLink" to="/">
        <h4 id="returnHome">Return Home</h4>
      </Link>
    </main>
  );
}
