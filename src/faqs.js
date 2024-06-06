import { Link } from "react-router-dom";

const questionOne = (
  <>
    <p className="popQuestion">"Does Wild Wind Tattoo accept walk-ins?"</p>
    <p className="popAnswer">
      WWT strives to accommodate all clients and may accept walk-ins if openings
      are available. We recommend calling ahead on the day you plan to visit to
      check availability. Walk-ins are ideal for smaller tattoos that require
      minimal preparation. Please note that walk-ins are first-come,
      first-served, and there may be a wait if you don’t have an appointment.
    </p>
  </>
);

const questionTwo = (
  <>
    <div className="buttonSection"></div>
    <p className="popQuestion">"What is the shop minimum?"</p>
    <p className="popAnswer">
      Our shop minimum is $100. The final price of any tattoo will be determined
      in person based on the design.
    </p>
  </>
);

const questionThree = (
  <>
    <div className="buttonSection"></div>
    <p className="popQuestion">"Is the shop cash only?"</p>
    <p className="popAnswer">
      No, we accept all major credit cards and cash. Please note that we do not
      accept checks, Venmo, Square Cash, Chase Quick Pay, or similar payment
      methods.
    </p>
  </>
);

const questionFour = (
  <>
    <div className="buttonSection"></div>
    <p className="popQuestion">
      "Do you give price quotes via email or phone?"
    </p>
    <p className="popAnswer">
      We do not provide valid price quotes via email or phone. We can offer a
      general price range, but this is only an estimate. The final price depends
      on the tattoo's size, detail, and placement, which we'll discuss during
      your in-person visit.
    </p>
  </>
);

const questionFive = (
  <>
    <div className="buttonSection"></div>
    <p className="popQuestion">
      "What is the wait time for getting an appointment?"
    </p>
    <p className="popAnswer">
      Wait times vary as each artist manages their own schedule, but typically,
      we schedule appointments within a two to three-week timeframe.
    </p>
  </>
);

const questionSix = (
  <>
    <div className="buttonSection"></div>
    <p className="popQuestion">"How can I make an appointment?"</p>
    <p className="popAnswer">
      Begin booking by filling out our
      <Link to="/contact"> contact form</Link> with basic information about your
      desired tattoo. We will respond within 1-3 business days. After an artist
      responds to your request, you can email them with reference photos and a
      design description. All tattoo appointments require a deposit. Once a date
      and time are agreed upon, you will be directed to complete our deposit
      form to secure your appointment.
    </p>
  </>
);

const questionSeven = (
  <>
    <div className="buttonSection"></div>
    <p className="popQuestion">
      "Do I have to leave a deposit to make an appointment?"
    </p>
    <p className="popAnswer">
      Yes, a $60 deposit is required for each appointment. Once the date and
      time are arranged, you will be directed to our deposit form. Your
      appointment is not confirmed until we receive your deposit. This deposit
      will be deducted from the cost of your tattoo when it is completed, or if
      your tattoo requires multiple sessions, it will be deducted during the
      last session.
    </p>
  </>
);

const questionEight = (
  <>
    <div className="buttonSection"></div>
    <p className="popQuestion">
      "Can I see my tattoo design before my appointment?"
    </p>
    <p className="popAnswer">
      We do not send out or show tattoo designs via email before appointments,
      as we believe the best collaboration between client and artist occurs in
      person. Your design will be ready for review on the day of your
      appointment, and we will set aside enough time to make any revisions or
      changes you might want.
    </p>
  </>
);

const questionNine = (
  <>
    <div className="buttonSection"></div>
    <p className="popQuestion">"What is your cancellation policy?"</p>
    <p className="popAnswer">
      If you cancel your appointment with at least 48 hours notice, we will
      honor your $60 deposit for a future appointment. Cancellations made with
      less than 48 hours notice will result in the forfeiture of your deposit.
      To reschedule, you may be required to place another deposit.
    </p>
  </>
);

export {
  questionOne,
  questionTwo,
  questionThree,
  questionFour,
  questionFive,
  questionSix,
  questionSeven,
  questionEight,
  questionNine,
};
