import React from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { IoCheckmark } from "react-icons/io5";
import { FaStar } from "react-icons/fa";

/**
 *
 * @component Home features the main landing page of the web app with video and copy for SEO
 */
export default function Home() {
  return (
    <main id="home">
      <Helmet>
        <title>Wild Wind Tattoo - wildwindtattoo.com</title>
        <meta
          name="description"
          content="This is the home page of wildwindtattoo.com."
        />
      </Helmet>
      <h1 id="headerHome">Welcome to Wild Wind Tattoo</h1>
      <img
        id="shopPhoto"
        src="https://res.cloudinary.com/dzpne110u/image/upload/v1720321542/wildWindSite/shopPhotos/shopFront_j9y8hf.jpg"
      />
      <p className="contactParagraph">
        Book your appointment today or visit us at 1452 N. Western Ave. Chicago
        IL 60622.
      </p>
      <button id="contactHomeButton">Contact Us</button>
      <p className="contactParagraph" id="contactParagraphBottom">
        Have questions? Contact us at 773.230.0223 or wildwindtattoo@gmail.com.
      </p>
      <h2 className="headerTwo">
        Expert Tattooing in Chicago's Vibrant Wicker Park
      </h2>
      <p className="homeParagraph">
        Founded by Rich Marafioti in 2015, Wild Wind Tattoo has been a beacon of
        expert tattooing in Chicago. Located in the heart of Wicker Park, our
        studio offers a bright, welcoming, and relaxing space for clients to get
        tattooed. At Wild Wind Tattoo, beautiful tattoos are just part of what
        we do. We pride ourselves on creating a forward-thinking, art-centered
        environment where you will enjoy a positive experience that stays with
        you as long as your tattoo.
      </p>

      <h2 className="headerTwo">Community Engagement</h2>

      <p className="homeParagraph">
        Wild Wind Tattoo proudly serves and works with our strong community.
        Over the years, we have held fundraisers supporting families of Pulse
        Nightclub shooting victims, Project Fierce, and the Chicago Abortion
        Fund. Currently, we are partnered with the Chicago Therapy Collective's
        Hire Trans Now initiative. Our commitment to community and inclusivity
        is at the core of our mission.
      </p>

      <Link to="/aboutus" className="homeLink">
        <h4>Learn more</h4>
      </Link>
      <h2 className="headerTwo">Expert Tattoo Services</h2>
      <ul id="tattooServices">
        <li>
          <h3 className="headerThree">Variety and Customization:</h3>
          <p className="homeParagraph">
            We offer various tattoo styles, from small walk-ins to larger custom
            pieces. Whether you have a design in mind or need inspiration, our
            talented artists are here to bring your vision to life. Just ask!
          </p>
        </li>
        <li>
          <h3 className="headerThree">Comfort and Professionalism:</h3>
          <p className="homeParagraph">
            At Wild Wind Tattoo, you can expect to be treated with respect and
            care. We communicate all aspects of your tattoo experience, from
            consultation to aftercare. Enjoy a clean, creative, and artistic
            environment while you get tattooed in our inclusive, safe space.
          </p>
        </li>
      </ul>

      <Link to="/tattoos" className="homeLink">
        <h4>View tattoos</h4>
      </Link>

      <h2 className="headerTwo">Why Choose Wild Wind Tattoo?</h2>

      <ul id="whyChoose">
        <li>
          <h3 className="headerThree">
            <IoCheckmark className="checkmark" />
            Experienced Artists:
          </h3>
          <p className="homeParagraph">
            Our team brings years of expertise and passion to every tattoo.
          </p>
        </li>
        <li>
          <h3 className="headerThree">
            <IoCheckmark className="checkmark" />
            Community Focus:
          </h3>
          <p className="homeParagraph">
            We actively engage with and support our local community through
            various initiatives and partnerships.
          </p>
        </li>
        <li>
          <h3 className="headerThree">
            <IoCheckmark className="checkmark" />
            Inclusive Space:
          </h3>
          <p className="homeParagraph">
            We are committed to providing a welcoming environment for all
            clients, ensuring everyone feels comfortable and respected.
          </p>
        </li>
      </ul>

      <h2 className="headerTwo">Client Testimonials</h2>
      <li className="homeReview">
        <h2>Margaux S.</h2>
        <div id="ratingSection">
          <h3 className="rating">Rating: </h3>
          <h3 className="stars">
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
          </h3>
        </div>
        <p className="homeParagraph" id="homeParagraphReview">
          {" "}
          "This place is fantastic! I loved my experience working with Rich. He
          had such passion and he's very helpful guiding the experience. I
          relied on his expertise when I was getting two tattoos covered up with
          a bigger tattoo. He was great to talk with, I loved the relaxing jazz
          music in the shop and the vibrant art was so cheerful, so inviting.
          Rich and I kept in touch and he checked my tattoo out a month later to
          see how it healed. I've told my friends to go see Rich and I can't
          recommend enough! Thank you!"
        </p>
      </li>
      <div id="homeLinksContainer">
        <Link to="/reviews" className="homeLink">
          <h4>Read more reviews</h4>
        </Link>
      </div>
    </main>
  );
}
