import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import {
  FaMapMarkerAlt,
  FaBriefcase,
  FaMoneyBillWave,
  FaBuilding,
  FaEnvelope,
  FaUserTie,
  FaCalendarAlt
} from "react-icons/fa";

const JobDetails = () => {
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
    requirements,
    responsibilities,
    hr_email,
    hr_name,
    company_logo
  } = useLoaderData();

  return (
    <div className="max-w-4xl mx-auto p-6 space-y-6 bg-base-100 text-base-content shadow-lg rounded-lg mt-10">
      <div className="flex items-center gap-4">
        <img src={company_logo} alt="Company Logo" className="w-16 h-16 rounded-full" />
        <div>
          <h1 className="text-2xl font-bold">{title}</h1>
          <p className="flex items-center gap-1"><FaBuilding /> {company}</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <p className="flex items-center gap-2"><FaMapMarkerAlt /> <span>Location:</span> {location}</p>
        <p className="flex items-center gap-2"><FaBriefcase /> <span>Job Type:</span> {jobType}</p>
        <p className="flex items-center gap-2"><FaMoneyBillWave /> <span>Salary:</span> ৳{salaryRange.min} – ৳{salaryRange.max}</p>
        <p className="flex items-center gap-2"><FaCalendarAlt /> <span>Deadline:</span> {applicationDeadline}</p>
        <p className="flex items-center gap-2"><FaUserTie /> <span>Category:</span> {category}</p>
        <p className="flex items-center gap-2"><FaEnvelope /> <span>HR Email:</span> {hr_email}</p>
        <p className="flex items-center gap-2"><FaUserTie /> <span>HR Name:</span> {hr_name}</p>
      </div>

      <div>
        <h2 className="text-xl font-semibold mt-4">Job Description</h2>
        <p>{description}</p>
      </div>

      <div>
        <h2 className="text-xl font-semibold mt-4">Requirements</h2>
        <ul className="list-disc ml-6">
          {requirements.map((req, i) => (
            <li key={i}>{req}</li>
          ))}
        </ul>
      </div>

      <div>
        <h2 className="text-xl font-semibold mt-4">Responsibilities</h2>
        <ul className="list-disc ml-6">
          {responsibilities.map((res, i) => (
            <li key={i}>{res}</li>
          ))}
        </ul>
      </div>

      <div className="flex justify-end">
        <Link to={`/jobs/jobApply/${_id}`}>
          <button className="btn btn-primary">Apply Now</button>
        </Link>
      </div>
    </div>
  );
};

export default JobDetails;
