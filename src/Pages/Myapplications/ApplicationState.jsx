import React from "react";

const ApplicationState = () => {
  return (
    <div className="flex justify-center items-center min-h-[20vh]">
      <div className="stats stats-vertical lg:stats-horizontal shadow bg-base-100">
        <div className="stat">
          <div className="stat-title">Total Applications</div>
          <div className="stat-value text-primary">1,560</div>
          <div className="stat-desc">From all users</div>
        </div>

        <div className="stat">
          <div className="stat-title">Approved Applications</div>
          <div className="stat-value text-success">420</div>
          <div className="stat-desc">↗︎ +12% this month</div>
        </div>

        <div className="stat">
          <div className="stat-title">Pending Applications</div>
          <div className="stat-value text-warning">1,100</div>
          <div className="stat-desc">↘︎ 5% decrease</div>
        </div>
      </div>
    </div>
  );
};

export default ApplicationState;
