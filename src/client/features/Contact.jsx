import React from "react";
import { Link } from "react-router-dom";

import "./contact.css";

export default function Contact() {
  return (
    <main id="contact">
      <h1 id="header">Contact Us</h1>
      <section id="contactHeader">
        <h3 className="headerTagline">
          Reach out to request an appointment or inquire about day of
          availability
        </h3>
        <h4 className="headerTaglineTwo">
          For general questions please review our{" "}
          <Link id="reviewLink" to="/faqs">
            FAQs
          </Link>{" "}
          first
        </h4>
      </section>
      <section>
        <Link className="contactLink" to="/requestappt">
          <h3 className="contactButtons">Request an appointment</h3>
        </Link>
        <Link className="contactLink">
          <h3 className="contactButtons" id="contactButtonBottom">
            Check today's availability
          </h3>
        </Link>
      </section>
      <section id="contactInfoContainer">
        <p className="contactInfo">
          ADDRESS:
          <div className="contactInfoValue">
            <a href="https://www.google.com/maps/place/Wild+Wind+Tattoo/@41.9082731,-87.6874096,15z/data=!4m6!3m5!1s0x880fd2bad280228b:0x926cef0a3fd6c3cf!8m2!3d41.9082731!4d-87.6874096!16s%2Fg%2F11bw5xqdp7?entry=ttu">
              {" "}
              1452 N. Western Ave. Chicago, IL 60622
            </a>
          </div>
        </p>
        <section id="hoursContainer">
          <p className="contactInfo" id="hour">
            HOURS:{" "}
          </p>
          <div id="hours">
            <p className="times" id="timesTop">
              <b id="bold">Friday - Monday:</b> 12 pm - 8 pm
            </p>
            <p className="times">
              <b id="bold">Tuesday:</b> 12 pm - 4 pm
            </p>
          </div>
        </section>
        <p className="contactInfo">
          PHONE:
          <div className="contactInfoValue">
            <a href="tel:+7732272027"> 773.227.2027</a>
          </div>
        </p>
        <p className="contactInfo">
          EMAIL:
          <div className="contactInfoValue">
            <a href="mailto:wildwindtattoo@gmail.com">
              wildwindtattoo@gmail.com
            </a>
          </div>
        </p>
      </section>
    </main>
  );
}