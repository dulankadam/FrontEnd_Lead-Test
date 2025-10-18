import React from "react";

const DocumentsSection: React.FC = () => {
  const docs = [
    { name: "Standard_Specs.pdf", date: "2025-09-01" },
    { name: "Configuration_Guide.docx", date: "2025-08-15" },
  ];

  return (
    <div className="p-4 bg-white rounded-md">
      <ul className="space-y-2">
        {docs.map((d) => (
          <li
            key={d.name}
            className="flex justify-between items-center text-sm text-gray-700 p-2 bg-gray-50 rounded-md"
          >
            <span className="font-medium truncate">{d.name}</span>
            <span className="text-xs text-gray-400">{d.date}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DocumentsSection;
