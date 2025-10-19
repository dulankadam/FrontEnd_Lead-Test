import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Plus } from "lucide-react";
const SectionHeader = ({ title, buttonText, onButtonClick, }) => {
    return (_jsxs("div", { className: "flex justify-between items-center pb-2 border-b border-gray-100 mb-4", children: [_jsx("h2", { className: "text-xl font-bold text-gray-800", children: title }), buttonText && onButtonClick && (_jsxs("button", { onClick: onButtonClick, className: "flex items-center space-x-1 px-3 py-1 bg-indigo-600 text-white text-sm font-medium rounded-lg hover:bg-indigo-700 transition-colors shadow-md", children: [_jsx(Plus, { size: 16 }), _jsx("span", { children: buttonText })] }))] }));
};
export default SectionHeader;
