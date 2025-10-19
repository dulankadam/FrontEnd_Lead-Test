import React from "react";
import FieldInput from "./FieldInput";

interface Props {
  templateName: string;
  templateId: string;
}

const HeaderFields: React.FC<Props> = ({ templateName, templateId }) => {
  return (
    <div className="catalog-template-container">
      <div className="catalog-template-info">
        <div className="catalog-template-row">
          <div className="catalog-template-label">Catalog ID</div>
          <div className="catalog-template-value">c7</div>
        </div>
        <div className="catalog-template-row">
          <div className="catalog-template-label">Type</div>
          <div className="catalog-template-value">Computer</div>
        </div>
        <div className="catalog-template-row">
          <div className="catalog-template-label">Model</div>
          <input
            type="text"
            value="Camera"
            className="catalog-template-input"
            readOnly
          />
        </div>
        <div className="catalog-template-row"></div>
        <div className="catalog-template-row">
          <div className="w-full max-w-[800px] mx-auto">
            <FieldInput title="Fields">
              <p>This is the expanded panel content area.</p>
            </FieldInput>
          </div>
        </div>
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
