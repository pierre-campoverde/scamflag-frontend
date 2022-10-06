import { createBrowserRouter, RouterProvider } from "react-router-dom";
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
        element: <p>user</p>,
      },
    ],
  },
]);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
