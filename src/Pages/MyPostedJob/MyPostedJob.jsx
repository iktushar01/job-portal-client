import React, { Suspense, useContext } from "react";
import { AuthContext } from "../../Context/AuthContext/AuthContext";
import MyPostedJobList from "./MyPostedJobList";
import { jobsCreatedByPromise } from "../../api/jobsApi";

const MyPostedJob = () => {
  const { user } = useContext(AuthContext);

  return (
    <div>
      <h1 className="text-center">My Posted Jobs</h1>
      <Suspense>
        <MyPostedJobList jobsCreatedByPromise = {jobsCreatedByPromise(user.email)}></MyPostedJobList>
      </Suspense>
    </div>
  );
};

export default MyPostedJob;
