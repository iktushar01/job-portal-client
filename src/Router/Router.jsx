import { createBrowserRouter } from "react-router-dom";
import RootLayout from "../Layouts/RootLayout";
import Home from "../Pages/Home/Home";
import Register from "../Pages/Register/Register";
import Login from "../Pages/Login/Login";
import JobDetails from "../Pages/JobDetails/JobDetails";
import PrivateRoutes from "../Routes/PrivateRoutes";
import JobApply from "../Pages/JobApply/JobApply";
import Myapplications from "../Pages/Myapplications/Myapplications";
import AddJob from "../Pages/AddJob/AddJob";
import MyPostedJob from "../Pages/MyPostedJob/MyPostedJob";
import ViewApplications from "../Pages/ViewApplications/ViewApplications";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/jobs/:id",
        element: <JobDetails />,
        loader: ({ params }) =>
          fetch(`http://localhost:4000/jobs/${params.id}`),
      },
      {
        path: "/jobs/jobApply/:id",
        element: (
          <PrivateRoutes>
            <JobApply></JobApply>
          </PrivateRoutes>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:4000/jobs/${params.id}`),
      },
      {
        path: "/myApplication",
        element: (
          <PrivateRoutes>
            <Myapplications></Myapplications>
          </PrivateRoutes>
        ),
      },
      {
        path : '/application/:job_id',
        element : <PrivateRoutes>
          <ViewApplications></ViewApplications>
        </PrivateRoutes>
      },
      {
        path : "/addjob",
        element: (
          <PrivateRoutes>
            <AddJob></AddJob>
          </PrivateRoutes>
        )
      },
      {
        path : "/myPostJobs",
        element : (
            <PrivateRoutes>
              <MyPostedJob></MyPostedJob>
            </PrivateRoutes>
        )
      }
    ],
  },
]);

export default router;
