import React from "react";
import { FaStar } from "react-icons/fa";

import { reviews } from "../content/reviews";

export default function Reviews() {
  function ReviewCard({ name, rating, review }) {
    return (
      <article>
        <h1>{`${name}`}</h1>
        <h3>
          {`${rating}`}
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStar />
        </h3>
        <p>{`${review}`}</p>
      </article>
    );
  }

  return (
    <main>
      <h1>REVIEWS</h1>
      <ul id="reviews">
        {reviews.map((review) => (
          <ReviewCard
            key={review.id}
            name={review.name}
            rating={review.rating}
            review={review.review}
          />
        ))}
      </ul>
    </main>
  );
}
