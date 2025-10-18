import React from "react";
import FieldInput from "./FieldInput";

interface Props {
  templateName: string;
  templateId: string;
}

const HeaderFields: React.FC<Props> = ({ templateName, templateId }) => {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-4">
      <FieldInput label="Type" value="Computer" />
      <FieldInput label="Model" value="Camera" />
      <FieldInput label="Template Name" value={templateName} />
      <FieldInput label="Template ID" value={templateId} />
    </div>
  );
};

export default HeaderFields;
