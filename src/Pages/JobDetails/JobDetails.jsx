import React from "react";
import { Link, useLoaderData } from "react-router";

const JobDetails = () => {
  const { _id, title, company } = useLoaderData();
  return (
    <div>
      <h1>{title}</h1>
      <h1>{company}</h1>
      <Link to={`/jobs/jobApply/${_id}`}>
        <button className="btn btn-primary">apply now</button>
      </Link>
    </div>
  );
};

export default JobDetails;
