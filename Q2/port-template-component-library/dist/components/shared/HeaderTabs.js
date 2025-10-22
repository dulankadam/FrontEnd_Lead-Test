import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Copy, Check } from "lucide-react";
const HeaderTabs = ({ activeTab, setActiveTab }) => {
    const tabs = ["Filter", "Details"];
    return (_jsx("div", { className: "flex border-b border-gray-200", children: tabs.map((tab) => {
            const selected = tab === activeTab;
            return (_jsxs("button", { onClick: () => setActiveTab(tab), className: `flex items-center space-x-2 px-4 py-2 text-sm font-semibold transition-colors ${selected
                    ? "border-b-2 border-indigo-600 text-indigo-700"
                    : "text-gray-500 hover:text-gray-700"}`, children: [tab === "Filter" ? _jsx(Copy, { size: 16 }) : _jsx(Check, { size: 16 }), _jsx("span", { children: tab })] }, tab));
        }) }));
};
export default HeaderTabs;
