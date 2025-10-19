import React from "react";
import "./index.css"; // Tailwind base styles

// Import your built library components
import { HeaderTabs } from "port-template"

function App() {
  // Sample data for PortTemplate (tree view)
  const [treeData, setTreeData] = React.useState([
    { id: 1, name: "Main Node", children: [{ id: 2, name: "Child Node A" }] },
  ]);

  // Sample tabs and state
  const tabs = [
    { id: "general", label: "General Info" },
    { id: "structure", label: "Structure" },
  ];
  const [activeTab, setActiveTab] = React.useState("general");


  return (
    <div className="min-h-screen bg-gray-50 p-6">
      {/* Header */}
      <h1 className="text-3xl font-bold text-gray-800 mb-2">
        Client Application
      </h1>
      <p className="text-gray-600 mb-8">
        Demonstration of custom React component library usage.
      </p>
      {/* Header Tabs */}
      <HeaderTabs
        tabs={tabs}
        activeTab={activeTab}
        onTabChange={setActiveTab}
      />
     
    </div>
  );
}

export default App;
