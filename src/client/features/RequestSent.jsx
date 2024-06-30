import { Link } from "react-router-dom";

import "./form.css";

export default function RequestSent() {
  return (
    <main id="requestSent">
      <div id="requestSentContainer">
        <h1 id="requestSentMessage">Thank you for your message!</h1>
        <h3 className="requestMessage" id="requestMessageTop">
          Your request has been sent
        </h3>
        <h3 className="requestMessage">
          You can expect a response within 1-3 days. We are excited to work with
          you soon!
        </h3>
        <h3 className="messageTag">Best,</h3>
        <h3 className="messageTag" id="messageTagBottom">
          Wild Wind Tattoo
        </h3>
      </div>
      <Link id="returnLink" to="/">
        <h4 id="returnHome">Return Home</h4>
      </Link>
    </main>
  );
}
