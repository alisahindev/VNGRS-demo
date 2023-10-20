import React from "react";
import Open from "../Icons/Open";
import Typography from "../Typography";

const BlankState = async () => {
  return (
    <div className="text-center h-full w-full py-20 px-10">
      <div className="text-[#6e7681] flex items-center justify-center ">
        <Open className="w-11 h-11 text-[55px]" />
      </div>
      <Typography variant="h3" className="text-center my-4">
        No results matched your search.
      </Typography>
      <Typography variant="p" className="text-center text-gray-500">
        You could search all of GitHub or try an advanced search.
      </Typography>
    </div>
  );
};

export default BlankState;
