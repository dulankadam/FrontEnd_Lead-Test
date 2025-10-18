import React from "react";
import { Plus } from "lucide-react";

interface Props {
  title: string;
  buttonText?: string;
  onButtonClick?: () => void;
}

const SectionHeader: React.FC<Props> = ({
  title,
  buttonText,
  onButtonClick,
}) => {
  return (
    <div className="flex justify-between items-center pb-2 border-b border-gray-100 mb-4">
      <h2 className="text-xl font-bold text-gray-800">{title}</h2>
      {buttonText && onButtonClick && (
        <button
          onClick={onButtonClick}
          className="flex items-center space-x-1 px-3 py-1 bg-indigo-600 text-white text-sm font-medium rounded-lg hover:bg-indigo-700 transition-colors shadow-md"
        >
          <Plus size={16} />
          <span>{buttonText}</span>
        </button>
      )}
    </div>
  );
};

export default SectionHeader;
