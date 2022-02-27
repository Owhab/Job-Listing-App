import React, { useEffect, useState } from "react";

import jobsdata from "../../assets/data.json";
import Job from "../Job/Job";

const Jobs = () => {
  const [jobs, setJobs] = useState([]);
  useEffect(() => {
    setJobs(jobsdata);
  }, []);

  return (
    <div>
      {jobs.map((job) => (
        <Job key={job.id} job={job}></Job>
      ))}
    </div>
  );
};

export default Jobs;
