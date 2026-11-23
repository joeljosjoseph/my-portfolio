import React from "react";

type Props = { id?: string; children: string | undefined };

const ErrorMessage = ({ id, children }: Props) => {
  return (
    <p id={id} className="mt-2 text-sm font-medium text-red-700">
      {children}
    </p>
  );
};

export default ErrorMessage;
