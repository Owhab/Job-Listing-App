import React, { useEffect, useState } from "react";

import jobsdata from "../../assets/data.json";
import Job from "../Job/Job";

const Jobs = () => {
  const [jobs, setJobs] = useState([]);
  const [filters, setFilters] = useState(["CSS"]);

  useEffect(() => {
    setJobs(jobsdata);
  }, []);

  const filterFunc = (role, level, tools, languages) => {
    if (filters.length === 0) {
      return true;
    }
    const tags = [role, level];

    if (tools) {
      tags.push(...tools);
    }
    if (languages) {
      tags.push(...languages);
    }

    return tags.some((tag) => filters.includes(tag));
  };

  const handleTagClick = (tag) => {
    if (filters.includes(tag)) return;

    setFilters([...filters, tag]);
  };
  const handleFilterClick = (passedFilter) => {
    setFilters(filters.filter((f) => f !== passedFilter));
  };

  const filteredJobs = jobs.filter(filterFunc);

  return (
    <div>
      <div className="sm:flex-row sm:my-8 flex flex-col mx-10 my-16  shadow-md rounded-md bg-white m-4 p-4">
        {filters.length > 0 &&
          filters.map((filter, index) => (
            <span
              className="bg-teal-100 cursor-pointer font-bold text-teal-500 my-2 mr-4 p-2 rounded"
              onClick={() => handleFilterClick(filter)}
              key={index}
            >
              {filter}
            </span>
          ))}
      </div>
      {jobs.map((job) => (
        <Job key={job.id} job={job} handleTagClick={handleTagClick}></Job>
      ))}
    </div>
  );
};

export default Jobs;
