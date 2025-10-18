import React from "react";
import { Copy, Check } from "lucide-react";
import { TabType } from "../../types";

interface Props {
  activeTab: TabType;
  setActiveTab: (t: TabType) => void;
}

const HeaderTabs: React.FC<Props> = ({ activeTab, setActiveTab }) => {
  const tabs: TabType[] = ["Filter", "Details"];

  return (
    <div className="flex border-b border-gray-200">
      {tabs.map((tab) => {
        const selected = tab === activeTab;
        return (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`flex items-center space-x-2 px-4 py-2 text-sm font-semibold transition-colors ${
              selected
                ? "border-b-2 border-indigo-600 text-indigo-700"
                : "text-gray-500 hover:text-gray-700"
            }`}
          >
            {tab === "Filter" ? <Copy size={16} /> : <Check size={16} />}
            <span>{tab}</span>
          </button>
        );
      })}
    </div>
  );
};

export default HeaderTabs;
