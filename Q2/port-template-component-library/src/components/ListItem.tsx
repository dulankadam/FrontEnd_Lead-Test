import React from "react";
import Toggle from "./Toggle";
import IconButton from "./IconButton";

interface ListItemProps {
  label: string;
  onDelete: () => void;
}

const ListItem: React.FC<ListItemProps> = ({ label, onDelete }) => {
  return (
    <div className="d-flex align-items-center justify-content-between py-3 px-3 border-bottom border-light">
      <div className="d-flex align-items-center gap-3">
        <div
          className="bg-light rounded d-flex align-items-center justify-content-center"
          style={{
            width: "32px",
            height: "32px",
            cursor: "move",
            color: "#6c757d",
          }}
        >
          <span>=</span>
        </div>
        <span className="text-dark">{label}</span>
      </div>
      <div className="d-flex align-items-center gap-3">
        <Toggle checked={false} onChange={() => {}} label="Read only" />
        <button
          onClick={onDelete}
          className="btn btn-link text-secondary p-0"
          style={{ textDecoration: "none" }}
        >
          <svg
            width="20"
            height="20"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
            />
          </svg>
        </button>
        <IconButton
          icon={
            <span className="text-primary fs-4" style={{ lineHeight: 1 }}>
              +
            </span>
          }
          onClick={() => {}}
        />
      </div>
    </div>
  );
};

export default ListItem;
