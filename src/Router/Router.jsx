import {
  createBrowserRouter,
} from "react-router-dom";
import RootLayout from "../Layouts/RootLayout";
import Home from "../Pages/Home/Home";
import Register from "../Pages/Register/Register";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout/>,
    children: [
        {
            index: true,
            element: <Home/>
        },
        {
          path: '/register',
          element: <Register/>
        }
    ]
  },
]);

export default router;