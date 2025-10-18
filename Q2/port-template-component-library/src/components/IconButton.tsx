import React from "react";

interface IconButtonProps {
  onClick: () => void;
  icon: React.ReactNode;
  className?: string;
}

const IconButton: React.FC<IconButtonProps> = ({
  onClick,
  icon,
  className = "",
}) => {
  return (
    <button onClick={onClick} className={`icon-button-dashed ${className}`}>
      {icon}
    </button>
  );
};

export default IconButton;
