import React, { ReactElement } from "react";

type Props = { children: string | ReactElement | undefined };

const ErrorMessage = ({ children }: Props) => {
  return (
    <span className="text-red-600 font-bold text-[10px] sm:text-base animate-div">
      {children}
    </span>
  );
};

export default ErrorMessage;
