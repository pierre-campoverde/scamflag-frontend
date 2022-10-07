import { Button, TextField } from "@mui/material";
import { FaFacebook, FaGoogle } from "react-icons/fa";

const LoginForm = () => {
  return (
    <div className="border rounded-xl shadow-md  p-4 w-5/12 mx-auto">
      <form action="" className="my-3">
        <div className="my-3">
          <TextField fullWidth label="Email" />
        </div>
        <div className="my-3">
          <TextField fullWidth label="Password" />
        </div>
        <Button variant="contained" fullWidth size="large">
          Log In
        </Button>
      </form>
      <div className="my-3">
        <span className="text-xs block text-center text-gray-600 font-semibold ">
          OR LOGIN WITH
        </span>
        <div className="my-3">
          <Button fullWidth startIcon={<FaGoogle />}>
            Google
          </Button>
        </div>
        <div className="my-3">
          <Button fullWidth startIcon={<FaFacebook />}>
            Facebook
          </Button>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
