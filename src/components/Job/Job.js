import React from "react";

const Job = ({ job }) => {
  const {
    company,
    logo,
    featured,
    position,
    role,
    level,
    postedAt,
    contract,
    location,
    languages,
    tools,
  } = job;

  const langAndTools = [];

  if (languages) {
    langAndTools.push(...languages);
  }
  if (tools) {
    langAndTools.push(...tools);
  }
  return (
    <div className="flex shadow-md justify-between bg-white m-4 p-4">
      <div className="flex">
        <div>
          <img src={logo} alt="" />
        </div>
        <div className="ml-4 flex flex-col justify-between">
          <h3 className="text-teal-500 text-base font-bold">{company}</h3>
          <h2 className="font-bold text-xl">{position}</h2>
          <p className="text-gray-700">
            {postedAt} · {contract} · {location}
          </p>
        </div>
      </div>
      <div className="flex items-center justify-center">
        {langAndTools
          ? langAndTools.map((langAndTool) => (
              <span className="bg-teal-100 font-bold text-teal-500 m-2 p-2 rounded">
                {langAndTool}
              </span>
            ))
          : " "}
      </div>
    </div>
  );
};

export default Job;
