import React from "react";
import ReviewCard from "../components/organisms/ReviewCard";

const Reviews = () => {
  return (
    <section>
      <div className="w-8/12  mx-auto min-h-screen py-10 ">
        <h1 className="text-2xl text-gray-600">Your reviews</h1>
        <div className="py-3 ">
          <ReviewCard />
        </div>
      </div>
    </section>
  );
};

export default Reviews;
