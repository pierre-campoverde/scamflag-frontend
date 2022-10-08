import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./routes/Login";
import Authetication from "./routes/Login";
import Review from "./routes/Review";
import Root from "./routes/Root";
import Signup from "./routes/Signup";
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
        path: "reviews",
        element: <p>reviews</p>,
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
