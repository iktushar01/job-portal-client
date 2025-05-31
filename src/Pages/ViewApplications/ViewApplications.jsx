import React from "react";
import { useParams } from "react-router-dom";

const ViewApplications = () => {
  const { job_id } = useParams();
  console.log(job_id);

  return (
    <div>
      <h1>{job_id}</h1>
    </div>
  );
};

export default ViewApplications;
