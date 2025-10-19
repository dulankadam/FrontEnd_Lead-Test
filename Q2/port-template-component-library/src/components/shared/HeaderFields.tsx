import React from "react";
import FieldInput from "./FieldInput";

interface Props {
  templateName: string;
  templateId: string;
}

const HeaderFields: React.FC<Props> = ({ templateName, templateId }) => {
  return (
    <div className="flex items-center justify-between w-[500px] bg-white rounded-xl p-6 shadow-md">
      <div className="flex-1">
        <div className="mb-6 flex items-center">
          <div className="catalog-template-label">Catalog ID</div>
          <div className="catalog-template-value">c7</div>
        </div>
        <div className="mb-6 flex items-center">
          <div className="catalog-template-label">Type</div>
          <div className="catalog-template-value">Computer</div>
        </div>
        <div className="mb-6 flex items-center">
          <div className="catalog-template-label">Model</div>
          <input
            type="text"
            value="Camera"
            className="catalog-template-input"
            readOnly
          />
        </div>
        <div className="mb-6 flex items-center"></div>
      </div>
      <div className="catalog-template-icon">
        <svg width="30" height="30" viewBox="0 0 48 48" fill="white">
          <rect x="12" y="18" width="24" height="12" rx="2" />
          <polygon points="36,24 44,20 44,28" fill="white" />
        </svg>
      </div>
    </div>
  );
};

export default HeaderFields;
