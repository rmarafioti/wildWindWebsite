import React from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { FaStar } from "react-icons/fa";

import { reviews } from "../content/reviews";

import "./styles/reviews.css";

/**
 *
 * @component Reviews features reviews by clients about the business by way of review.js
 */
export default function Reviews() {
  /**
   *
   * @function ReviewCard holds the information for each indiviual review
   *
   */
  function ReviewCard({ name, review }) {
    return (
      <li className="review">
        <h2>{`${name}`}</h2>
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
        <p className="clientReview">"{`${review}`}"</p>
      </li>
    );
  }

  return (
    <main id="reviewPage">
      <Helmet>
        <title>Reviews Page - wildwindtattoo.com</title>
        <meta
          name="description"
          content="This is the reviews page of wildwindtattoo.com."
        />
        <link rel="canonical" href="/reviews" />
      </Helmet>
      <h1 id="reviewHeader">REVIEWS</h1>
      <h3 id="reviewTag">
        Take a look at what our clients have to say about us!
      </h3>
      <ul id="reviews">
        {reviews.map((review) => (
          <ReviewCard
            key={review.id}
            name={review.name}
            review={review.review}
          />
        ))}
      </ul>
      <div id="reviewLinksContainer">
        <Link to="/aboutus" className="reviewLinks">
          <h3>About Us</h3>
        </Link>
        <a
          className="reviewLinks"
          href="https://www.google.com/maps/place/Wild+Wind+Tattoo/@41.9082771,-87.6899845,16z/data=!4m8!3m7!1s0x880fd2bad280228b:0x926cef0a3fd6c3cf!8m2!3d41.9082731!4d-87.6874096!9m1!1b1!16s%2Fg%2F11bw5xqdp7?entry=ttu"
        >
          <h3>Read Google Reviews</h3>
        </a>
      </div>
    </main>
  );
}
