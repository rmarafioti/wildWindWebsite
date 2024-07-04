import React from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

/**
 *
 * @component Home features the main landing page of the web app with video and copy for SEO
 */
export default function Home() {
  return (
    <main id="home">
      <Helmet>
        <title>Home Page - wildwindtattoo.com</title>
        <meta
          name="description"
          content="This is the home page of wildwindtattoo.com."
        />
      </Helmet>
      <h1 id="headerHome">HOME</h1>
      <Link id="contactContainer" to="/contact">
        <button id="contactHomeButton">Contact Us</button>
        <p>
          Ready to get inked? Book your appointment today or visit us at 1452 N.
          Western Ave. Chicago IL 60622. Have questions? Contact us at
          773.230.0223 or wildwindtattoo@gmail.com.
        </p>
      </Link>
      <h2>
        Welcome to Wild Wind Tattoo – Expert Tattooing in Chicago's Vibrant
        Wicker Park
      </h2>
      <p>
        Founded by Rich Marafioti in 2015, Wild Wind Tattoo has been a beacon of
        expert tattooing in Chicago. Located in the heart of Wicker Park, our
        studio offers a bright, welcoming, and relaxing space for clients to get
        tattooed. At Wild Wind Tattoo, beautiful tattoos are just part of what
        we do. We pride ourselves on creating a forward-thinking, art-centered
        environment where you will enjoy a positive experience that stays with
        you as long as your tattoo.
      </p>
      <h2>Community Engagement</h2>
      <p>
        Wild Wind Tattoo proudly serves and works with our strong community.
        Over the years, we have held fundraisers supporting families of Pulse
        Nightclub shooting victims, Project Fierce, and the Chicago Abortion
        Fund. Currently, we are partnered with the Chicago Therapy Collective's
        Hire Trans Now initiative. Our commitment to community and inclusivity
        is at the core of our mission.
      </p>
      <h2>Expert Tattoo Services</h2>
      <ul>
        <li>
          <h3>Variety and Customization</h3>
          <p>
            We offer various tattoo styles, from small walk-ins to larger custom
            pieces. Whether you have a design in mind or need inspiration, our
            talented artists are here to bring your vision to life. Just ask!
          </p>
        </li>
        <li>
          <h3>Comfort and Professionalism</h3>
          <p>
            At Wild Wind Tattoo, you can expect to be treated with respect and
            care. We communicate all aspects of your tattoo experience, from
            consultation to aftercare. Enjoy a clean, creative, and artistic
            environment while you get tattooed in our inclusive, safe space.
          </p>
        </li>
      </ul>
      <h2>Why Choose Wild Wind Tattoo?</h2>
      <ul>
        <li>
          <h3>Experienced Artists:</h3>
          <p>
            Our team, led by founder Rich Marafioti, brings years of expertise
            and passion to every tattoo.
          </p>
        </li>
        <li>
          <h3>Community Focus:</h3>
          <p>
            We actively engage with and support our local community through
            various initiatives and partnerships.
          </p>
        </li>
        <li>
          <h3>Inclusive Space:</h3>
          <p>
            We are committed to providing a welcoming environment for all
            clients, ensuring everyone feels comfortable and respected.
          </p>
        </li>
      </ul>
      <h2>Client Testimonials</h2>
    </main>
  );
}
