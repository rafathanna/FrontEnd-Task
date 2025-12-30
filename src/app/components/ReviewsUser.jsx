"use client";
import React from "react";

export default function ReviewsUser() {
  return (
    <section className="reviews-user">
      {Array(5)
        .fill(null)
        .map((_, index) => (
          <div className="user-info" key={index}>
            <div className="user-header">
              <h5 className="username">
                John Doe
                <span className="stars">
                  <span className="full">★★★</span>
                  <span className="half">★</span>
                  <span className="empty">★</span>
                </span>
              </h5>

              <span className="time">4 months ago</span>
            </div>

            <p className="review-text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
              voluptate blanditiis aut optio odio et tempore iste.
            </p>

          </div>
          
           
        ))}
         <button className="btn">View More Comments</button>
    </section>
  );
}
