import React from "react";

interface Props {
  label: string;
  value: string;
}

const FieldInput: React.FC<Props> = ({ label, value }) => {
  return (
    <div className="flex flex-col text-sm">
      <span className="text-gray-500 font-medium">{label}</span>
      <span className="text-gray-800 font-semibold">{value}</span>
    </div>
  );
};

export default FieldInput;
