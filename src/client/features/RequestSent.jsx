import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

import "./styles/form.css";

/**
 *
 * @component RequestSent features a message to the user when the form on RequestAppt.jsx is successfully sent
 */
export default function RequestSent() {
  return (
    <main id="requestSent">
      <Helmet>
        <title>Request Sent Page - wildwindtattoo.com</title>
        <meta
          name="description"
          content="This is the request sent page of wildwindtattoo.com."
        />
        <link rel="canonical" href="/requestsent" />
      </Helmet>
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
