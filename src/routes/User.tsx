import { Button, ButtonGroup } from "@mui/material";

const User = () => {
  return (
    <section className="flex items-center min-h-screen ">
      <div className="border w-5/12 rounded-3xl p-4 mx-auto">
        <div className="flex justify-center">
          <span className="rounded-ful h-24 w-24 rounded-full bg-gray-200"></span>
        </div>
        <div className="text-center text-xl my-2">
          <span>Name</span>
        </div>
        <div className="flex flex-col my-2 w-6/12 mx-auto justify-center">
          <ButtonGroup orientation="vertical">
            <Button variant="contained" fullWidth>
              Log Out
            </Button>
            <Button variant="contained" color="error" fullWidth>
              Delete account
            </Button>
          </ButtonGroup>
        </div>
      </div>
    </section>
  );
};

export default User;
