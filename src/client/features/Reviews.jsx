import React from "react";
import { FaStar } from "react-icons/fa";

import { reviews } from "../content/reviews";

import "./reviews.css";

export default function Reviews() {
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
      <a
        href="https://www.google.com/maps/place/Wild+Wind+Tattoo/@41.9082771,-87.6899845,16z/data=!4m8!3m7!1s0x880fd2bad280228b:0x926cef0a3fd6c3cf!8m2!3d41.9082731!4d-87.6874096!9m1!1b1!16s%2Fg%2F11bw5xqdp7?entry=ttu"
        id="readMoreLink"
      >
        <h3 id="readMore">Read more reviews</h3>
      </a>
    </main>
  );
}
