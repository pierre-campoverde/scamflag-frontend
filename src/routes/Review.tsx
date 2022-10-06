import { Alert, AlertTitle, Typography } from "@mui/material";
import React from "react";
import CreateReviewForm from "../components/organisms/CreateReviewForm";

const Review = () => {
  return (
    <section className=" h-screen ">
      <div className="w-9/12  mx-auto py-12">
        <h1 className="text-2xl font-semibold text-blue-900 dark:text-blue-200">
          Create a review so anyone can see it
        </h1>
        <div className="my-6 ">
          <Alert severity="info">
            <AlertTitle>How it works?</AlertTitle>
            Paste the url of the website, make a review and publish so the next
            time someone enters the website our extention will prompt your
            review.
          </Alert>
        </div>
        <CreateReviewForm />
      </div>
    </section>
  );
};

export default Review;
