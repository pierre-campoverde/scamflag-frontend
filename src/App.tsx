import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Authetication from "./routes/Authetication";
import Review from "./routes/Review";
import Root from "./routes/Root";
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
        path: "account",
        element: <Authetication />,
      },
    ],
  },
]);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
