import React, { use } from "react";
import { Link } from "react-router-dom";

const MyPostedJobList = ({ jobsCreatedByPromise }) => {
  const jobs = use(jobsCreatedByPromise);
  return (
    <div>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>#</th>
              <th>Title</th>
              <th>company</th>
              <th>applicationDeadline </th>
            </tr>
          </thead>
          <tbody>
            {jobs.map((job, index) => (
              <tr key={job._id} className="hover:bg-base-300">
                <th>{index + 1}</th>
                <td>{job.title}</td>
                <td>{job.company}</td>
                <td>{job.applicationDeadline}</td>
              <td>
  <Link to={`/application/${job._id}`}>
    <button className="btn">View Application</button>
  </Link>
</td>

              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyPostedJobList;
