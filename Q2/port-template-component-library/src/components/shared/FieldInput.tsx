import React, { useState, ReactNode, useRef, useEffect } from "react";

export interface Props {
  title: string;
  children?: ReactNode;
  defaultOpen?: boolean;
}

const FieldInput: React.FC<Props> = ({
  title,
  children,
  defaultOpen = false,
}) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);
  const [height, setHeight] = useState(0);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (contentRef.current) {
      setHeight(contentRef.current.scrollHeight);
    }
  }, [children]);

  return (
    <div className="mb-6">
      <div className="w-full">
        <div className="field-container">
          <button
            type="button"
            className="field-header"
            onClick={() => setIsOpen((prev) => !prev)}
          >
            <span className="field-title">{title}</span>
            <svg
              className={`field-arrow ${isOpen ? "open" : ""}`}
              xmlns="http://www.w3.org/2000/svg"
              width="100%"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M6 9l6 6 6-6"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>


          <div
            className="field-content-wrapper"
            style={{
              maxHeight: isOpen ? `${height}px` : "0px",
            }}
          >
            <div ref={contentRef} className="field-content">
              {children}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default FieldInput;
