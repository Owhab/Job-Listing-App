import React from "react";

const Job = ({ job }) => {
  const {
    company,
    logo,
    featured,
    isNew,
    position,
    role,
    level,
    postedAt,
    contract,
    location,
    languages,
    tools,
  } = job;

  const tags = [role, level];

  if (tools) {
    tags.push(...tools);
  }
  if (languages) {
    tags.push(...languages);
  }

  return (
    <div className="flex shadow-md rounded-md justify-between bg-white m-4 p-4">
      <div className="flex">
        <div>
          <img src={logo} alt="" />
        </div>
        <div className="ml-4 flex flex-col justify-between">
          <h3 className="text-teal-500 text-base font-bold">
            {company}
            {isNew && (
              <span className="bg-teal-500 text-white px-2 py-1 m-2 rounded-full">
                NEW
              </span>
            )}
            {featured && (
              <span className="bg-black text-white px-2 py-1 m-2 rounded-full">
                FEATURED
              </span>
            )}
          </h3>
          <h2 className="font-bold text-xl">{position}</h2>
          <p className="text-gray-700">
            {postedAt} · {contract} · {location}
          </p>
        </div>
      </div>
      <div className="flex items-center justify-center">
        {tags
          ? tags.map((tag) => (
              <span className="bg-teal-100 font-bold text-teal-500 m-2 p-2 rounded">
                {tag}
              </span>
            ))
          : " "}
      </div>
    </div>
  );
};

export default Job;
