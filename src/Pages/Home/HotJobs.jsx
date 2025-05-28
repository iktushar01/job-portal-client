import React, { useEffect, useState } from 'react';
import JobCard from './JobCard';

const HotJobs = ({ jobsPromise }) => {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    jobsPromise
      .then((data) => {
        setJobs(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error('Failed to load jobs:', err);
        setLoading(false);
      });
  }, [jobsPromise]);

  if (loading) {
    return <div className="p-4 text-lg font-semibold text-center">Loading hot jobs...</div>;
  }

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">🔥 Current Hot Jobs</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {jobs.map((job) => (
          <JobCard key={job._id} job={job} />
        ))}
      </div>
    </div>
  );
};

export default HotJobs;
