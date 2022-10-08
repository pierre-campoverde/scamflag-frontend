import { Link } from "react-router-dom";
import LoginForm from "../components/organisms/LoginForm";

const Login = () => {
  return (
    <section className="border min-h-full flex flex-col justify-center">
      <LoginForm />
      <div className="w-full my-3">
        <span className="text-center block text-gray-600">
          You don't have a account yet?{" "}
          <Link className="text-blue-600 " to={"/signup"}>
            Register here
          </Link>
        </span>
      </div>
    </section>
  );
};

export default Login;
