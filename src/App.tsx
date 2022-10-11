import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./routes/Login";
import Authetication from "./routes/Login";
import Review from "./routes/Review";
import Reviews from "./routes/Reviews";
import Root from "./routes/Root";
import Signup from "./routes/Signup";
import User from "./routes/User";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        element: <p>Search</p>,
        index: true,
      },
      {
        path: "write",
        element: <Review />,
        index: true,
      },
      {
        path: "users/:userId/reviews",
        element: <Reviews />,
      },
      {
        path: "users/:userId",
        element: <User />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "signup",
        element: <Signup />,
      },
    ],
  },
]);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
