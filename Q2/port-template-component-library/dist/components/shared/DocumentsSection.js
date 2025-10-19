import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
const DocumentsSection = () => {
    const docs = [
        { name: "Standard_Specs.pdf", date: "2025-09-01" },
        { name: "Configuration_Guide.docx", date: "2025-08-15" },
    ];
    return (_jsx("div", { className: "p-4 bg-white rounded-md", children: _jsx("ul", { className: "space-y-2", children: docs.map((d) => (_jsxs("li", { className: "flex justify-between items-center text-sm text-gray-700 p-2 bg-gray-50 rounded-md", children: [_jsx("span", { className: "font-medium truncate", children: d.name }), _jsx("span", { className: "text-xs text-gray-400", children: d.date })] }, d.name))) }) }));
};
export default DocumentsSection;
