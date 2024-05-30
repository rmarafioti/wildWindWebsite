import React from "react";
import { Link } from "react-router-dom";
import DropDown from "./DropDown";

export default function Faq() {
  return (
    <>
      <h1>FAQS</h1>
      <DropDown title="Does Wild Wind Tattoo accept walk-ins?">
        <p>
          WWT strives to accommodate all clients and may accept walk-ins if
          openings are available. We recommend calling ahead on the day you plan
          to visit to check availability. Walk-ins are ideal for smaller tattoos
          that require minimal preparation. Please note that walk-ins are
          first-come, first-served, and there may be a wait if you don’t have an
          appointment.
        </p>
      </DropDown>
      <DropDown title="What is the shop minimum?">
        <p>
          Our shop minimum is $100. The final price of any tattoo will be
          determined in person based on the design.
        </p>
      </DropDown>
      <DropDown title="Is the shop cash only?">
        <p>
          No, we accept all major credit cards and cash. Please note that we do
          not accept checks, Venmo, Square Cash, Chase Quick Pay, or similar
          payment methods.
        </p>
      </DropDown>
      <DropDown title="Do you give price quotes via email or phone?">
        <p>
          We do not provide valid price quotes via email or phone. We can offer
          a general price range, but this is only an estimate. The final price
          depends on the tattoo's size, detail, and placement, which we'll
          discuss during your in-person visit.
        </p>
      </DropDown>
      <DropDown title="What is the wait time for getting an appointment?">
        <p>
          Wait times vary as each artist manages their own schedule, but
          typically, we schedule appointments within a two to three-week
          timeframe.
        </p>
      </DropDown>
      <DropDown title="How can I make an appointment?">
        <p>
          Begin booking by filling out our
          <Link to="/contact"> contact form</Link> with basic information about
          your desired tattoo. We will respond within 1-3 business days. After
          an artist responds to your request, you can email them with reference
          photos and a design description. All tattoo appointments require a
          deposit. Once a date and time are agreed upon, you will be directed to
          complete our deposit form to secure your appointment.
        </p>
      </DropDown>
      <DropDown title="Do I have to leave a deposit to make an appointment?">
        <p>
          Yes, a $60 deposit is required for each appointment. Once the date and
          time are arranged, you will be directed to our deposit form. Your
          appointment is not confirmed until we receive your deposit. This
          deposit will be deducted from the cost of your tattoo when it is
          completed, or if your tattoo requires multiple sessions, it will be
          deducted during the last session.
        </p>
      </DropDown>
      <DropDown title="Can I see my tattoo design before my appointment?">
        <p>
          We do not send out or show tattoo designs via email before
          appointments, as we believe the best collaboration between client and
          artist occurs in person. Your design will be ready for review on the
          day of your appointment, and we will set aside enough time to make any
          revisions or changes you might want.
        </p>
      </DropDown>
      <DropDown title="What is your cancellation policy?">
        <p>
          If you cancel your appointment with at least 24 hours notice, we will
          honor your $60 deposit for a future appointment. Cancellations made
          with less than 24 hours notice will result in the forfeiture of your
          deposit. To reschedule, you may be required to place another deposit.
        </p>
      </DropDown>
    </>
  );
}
