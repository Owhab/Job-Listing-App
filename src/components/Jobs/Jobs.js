import React, { useEffect, useState } from "react";

import jobsdata from "../../assets/data.json";
import Job from "../Job/Job";
console.log(jobsdata);

const Jobs = () => {
  const [jobs, setJobs] = useState([]);
  useEffect(() => {
    setJobs(jobsdata);
  }, [0]);
  console.log(jobs);
  return (
    <div>
      {jobs.map((job) => (
        <Job></Job>
      ))}
    </div>
  );
};

export default Jobs;
