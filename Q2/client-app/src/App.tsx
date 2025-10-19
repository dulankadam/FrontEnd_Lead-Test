import React from "react";
import "./index.css";

// Import port-template library components
import { HeaderTabs, TabType, HeaderFields, PortTemplate } from "port-template";

function App() {
  const [treeData, setTreeData] = React.useState([
    { id: 1, name: "Main Node", children: [{ id: 2, name: "Child Node A" }] },
  ]);

  const tabs = [
    { id: "general", label: "General Info" },
    { id: "structure", label: "Structure" },
  ];
  const [activeTab, setActiveTab] = React.useState<TabType>("Details");

  return (
    <div className="flex flex-col h-screen">
      {/* Top Navigation Bar */}
      <div className="bg-white border-b px-6 py-4">
        <h1 className="text-2xl font-bold text-gray-800">PORT TEMPLATE - APP</h1>
      </div>

      {/* Main Content Area */}
      <div className="flex flex-1 overflow-hidden">
        {/* Left Sidebar */}
        

        {/* Main Canvas Area */}
        <div className="flex-1 bg-gray-50 p-6">
          {/* Header Controls */}
          <div className="mb-6">
            <HeaderTabs activeTab={activeTab} setActiveTab={setActiveTab} />
          </div>
          <div className="mb-6">
          <HeaderFields templateName={"Model"} templateId={"1"}/> 
        </div>
        <div className="mb-6">
       
      </div>
        </div>
      </div>

      {/* Status Bar */}
      <div className="bg-gray-200 border-t px-4 py-2">
        <span className="text-sm text-gray-600">Status: Ready</span>
      </div>
    </div>
  );
}

export default App;
