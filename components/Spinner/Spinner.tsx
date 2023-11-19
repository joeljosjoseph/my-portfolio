import React from "react";

type Props = {};

const Spinner = (props: Props) => {
  return (
    <div className="flex items-center justify-center">
      <div className="animate-spin rounded-full border-t-4 border-gray-800 border-opacity-25 h-6 w-6 group-hover:border-white"></div>
    </div>
  );
};

export default Spinner;
