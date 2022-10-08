import { Button, TextField } from "@mui/material";
import React from "react";
import { FaFacebook, FaGoogle } from "react-icons/fa";

const SignupForm = () => {
  return (
    <div className="w-5/12 mx-auto p-4 border rounded-xl shadow-lg">
      <form action="">
        <div className="my-3">
          <TextField fullWidth label="Username" />
        </div>
        <div className="my-3">
          <TextField fullWidth label="Email" />
        </div>
        <div className="my-3">
          <TextField fullWidth label="Confirm password" />
        </div>
        <div className="my-3">
          <Button fullWidth variant="contained">
            Sign Up
          </Button>
        </div>
      </form>
      <span className="font-semibold text-xs block text-center text-gray-600">
        OR LOGIN WITH
      </span>
      <div className="my-3">
        <Button fullWidth startIcon={<FaGoogle />}>
          Sign up with Google
        </Button>
      </div>
      <div className="my-3">
        <Button fullWidth startIcon={<FaFacebook />}>
          Sign up with Facebook
        </Button>
      </div>
    </div>
  );
};

export default SignupForm;
