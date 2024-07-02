import React from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

import "./styles/contact.css";

/**
 * @component Contact features general static business info and links to outside sites
 */
export default function Contact() {
  return (
    <main id="contact">
      <Helmet>
        <title>Contact Page - wildwindtattoo.com</title>
        <meta
          name="description"
          content="This is the contact page of wildwindtattoo.com."
        />
      </Helmet>
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
      </section>
      <section id="contactInfoContainer">
        <div className="contactInfo">
          ADDRESS:
          <p className="contactInfoValue">
            <a href="https://www.google.com/maps/place/Wild+Wind+Tattoo/@41.9082731,-87.6874096,15z/data=!4m6!3m5!1s0x880fd2bad280228b:0x926cef0a3fd6c3cf!8m2!3d41.9082731!4d-87.6874096!16s%2Fg%2F11bw5xqdp7?entry=ttu">
              {" "}
              1452 N. Western Ave. Chicago, IL 60622
            </a>
          </p>
        </div>
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
        <div className="contactInfo">
          PHONE:
          <p className="contactInfoValue">
            <a href="tel:+7732272027"> 773.227.2027</a>
          </p>
        </div>
        <div className="contactInfo">
          EMAIL:
          <p className="contactInfoValue">
            <a href="mailto:wildwindtattoo@gmail.com">
              wildwindtattoo@gmail.com
            </a>
          </p>
        </div>
      </section>
    </main>
  );
}
