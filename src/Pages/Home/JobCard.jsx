import React from "react";

const JobCard = ({ job }) => {
  const {
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
    status,
    hr_email,
    hr_name,
    company_logo,
  } = job;

  return (
    <div className="card bg-base-100 shadow-md hover:shadow-lg transition-shadow duration-300">
      <figure className="bg-base-200 p-4">
        <img src={company_logo} alt={company} className="w-24 h-24 rounded-full object-contain" />
      </figure>
      <div className="card-body space-y-2">
        <h2 className="card-title justify-between">
          {title}
          <div className="badge badge-success capitalize">{status}</div>
        </h2>
        <p className="text-sm text-gray-600">{description}</p>
        
        <div className="flex flex-wrap gap-2 mt-2">
          <div className="badge badge-outline">{location}</div>
          <div className="badge badge-outline">{jobType}</div>
          <div className="badge badge-outline">{category}</div>
        </div>

        <div className="mt-2">
          <p className="text-sm font-semibold">Salary:</p>
          <p className="text-sm text-gray-700">
            {salaryRange.min.toLocaleString()} - {salaryRange.max.toLocaleString()} {salaryRange.currency.toUpperCase()}
          </p>
        </div>

        <div>
          <p className="text-sm font-semibold">Apply before:</p>
          <p className="text-sm text-red-600">{applicationDeadline}</p>
        </div>

        <div>
          <p className="text-sm font-semibold">Requirements:</p>
          <ul className="list-disc list-inside text-sm text-gray-600">
            {requirements.map((req, idx) => (
              <li key={idx}>{req}</li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-sm font-semibold">Responsibilities:</p>
          <ul className="list-disc list-inside text-sm text-gray-600">
            {responsibilities.map((res, idx) => (
              <li key={idx}>{res}</li>
            ))}
          </ul>
        </div>

        <div className="mt-2">
          <p className="text-sm font-semibold">Company:</p>
          <p className="text-sm">{company}</p>
        </div>

        <div>
          <p className="text-sm font-semibold">HR Contact:</p>
          <p className="text-sm text-gray-600">{hr_name} (<a href={`mailto:${hr_email}`} className="text-blue-500 underline">{hr_email}</a>)</p>
        </div>

        <div className="card-actions justify-end mt-4">
          <button className="btn btn-sm btn-primary">Apply Now</button>
        </div>
      </div>
    </div>
  );
};

export default JobCard;
