import React from "react";

const Featured = ({ title, body }) => {
  return (
    <div className=" bg-white rounded-lg shadow px-5 py-3 h-full w-[350px]">
      {" "}
      <p>
        <h1 className="text-black font-bold">{title}</h1>
        {body}
        <br />
        <span className="text-sky-500">read more...</span>
      </p>
    </div>
  );
};

export default Featured;
