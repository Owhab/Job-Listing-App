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
    <div
      className={`sm:flex-row sm:my-8 flex flex-col mx-10 my-16  shadow-md rounded-md justify-between bg-white m-4 p-4 ${
        featured && "border-l-4 border-teal-500 border-solid "
      }`}
    >
      <div className="sm:flex-row  flex flex-col">
        <div>
          <img
            className="sm:my-0 sm:w-24 sm:h-24 -mt-16 h-20 w-20 mb-4"
            src={logo}
            alt=""
          />
        </div>
        <div className="ml-4 flex flex-col justify-between">
          <h3 className="text-teal-500 text-base font-bold">
            {company}
            {isNew && (
              <span className="bg-teal-500 text-white px-2 py-1 m-2 rounded-full text-sm">
                NEW
              </span>
            )}
            {featured && (
              <span className="bg-black text-white px-2 py-1 m-2 rounded-full text-sm">
                FEATURED
              </span>
            )}
          </h3>
          <h2 className="sm:my-0 font-bold text-xl my-2">{position}</h2>
          <p className="text-gray-700">
            {postedAt} · {contract} · {location}
          </p>
        </div>
      </div>
      <div className="sm:border-none sm:ml-auto sm:pt-0 sm:mt-0 sm:mb-0 flex items-center flex-wrap  m-4 pt-4 border-t border-gray-300 border-solid">
        {tags
          ? tags.map((tag) => (
              <span className="bg-teal-100 font-bold text-teal-500 my-2 mr-4 p-2 rounded">
                {tag}
              </span>
            ))
          : " "}
      </div>
    </div>
  );
};

export default Job;
