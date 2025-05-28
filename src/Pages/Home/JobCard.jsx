import React from "react";
import { Link } from "react-router";

const JobCard = ({ job }) => {
  const {
    _id,
    title,
    location,
    jobType,
    category,
    applicationDeadline,
    salaryRange,
    description,
    company,
    status,
    company_logo,
  } = job;

  return (
    <div className="bg-base-100 rounded-2xl shadow-md hover:shadow-xl hover:scale-[1.02] transition-all duration-300 ease-in-out overflow-hidden">
      <div className="flex items-center gap-4 p-4 border-b border-base-300">
        <img
          src={company_logo}
          alt={company}
          className="w-16 h-16 rounded-full object-contain border border-base-300 bg-base-200"
        />
        <div className="flex-1">
          <h2 className="text-xl font-semibold text-base-content">{title}</h2>
          <div className="text-sm text-base-content/70">{company}</div>
        </div>
        <span className="badge badge-success capitalize px-3 py-1 text-xs">{status}</span>
      </div>

      <div className="p-4 space-y-3">
        <p className="text-sm text-base-content/70">{description}</p>

        <div className="flex flex-wrap gap-2 text-xs">
          <span className="bg-base-200 px-3 py-1 rounded-full text-base-content/80">{location}</span>
          <span className="bg-base-200 px-3 py-1 rounded-full text-base-content/80">{jobType}</span>
          <span className="bg-base-200 px-3 py-1 rounded-full text-base-content/80">{category}</span>
        </div>

        <div className="text-sm">
          <p className="font-medium text-base-content">Salary:</p>
          <p className="text-base-content/70">
            {salaryRange.min.toLocaleString()} - {salaryRange.max.toLocaleString()}{" "}
            {salaryRange.currency.toUpperCase()}
          </p>
        </div>

        <div className="text-sm">
          <p className="font-medium text-base-content">Apply before:</p>
          <p className="text-error">{applicationDeadline}</p>
        </div>

        <div className="pt-2 text-right">
          <Link to={`/jobs/${job._id}`}>
          <button className="btn btn-sm btn-primary hover:scale-105 transition-transform">
            Show Details
          </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default JobCard;
