import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useCallback, useEffect, useMemo, useState } from 'react';
import TreeItem from './TreeItem';
import HeaderTabs from '../shared/HeaderTabs';
import HeaderFields from '../shared/HeaderFields';
import DocumentsSection from '../shared/DocumentsSection';
import { initialPortData, applyMutation, generateId } from '../../utils/treeUtils';
import { Plus, ChevronRight } from 'lucide-react';
// Main container - composes shared components and tree
const PortTemplate = () => {
    const [ports, setPorts] = useState(() => initialPortData);
    const [activeTab, setActiveTab] = useState('Filter');
    const [totalPorts, setTotalPorts] = useState(0);
    useEffect(() => {
        let count = 0;
        const walk = (p) => {
            count++;
            p.children.forEach(walk);
        };
        ports.forEach(walk);
        setTotalPorts(count);
    }, [ports]);
    const mutationHandler = useCallback((m) => {
        setPorts((prev) => applyMutation(prev, m));
    }, []);
    const addRoot = () => {
        const newRoot = { id: generateId(), name: 'New Port', isEditable: true, children: [] };
        setPorts((p) => [...p, newRoot]);
        // TODO: auto-select / open editing
    };
    const PortTree = useMemo(() => {
        return (_jsx("div", { className: "space-y-4", children: ports.map((p, idx) => (_jsx(TreeItem, { port: p, depth: 0, mutationHandler: mutationHandler, isLastRoot: idx === ports.length - 1 }, p.id))) }));
    }, [ports, mutationHandler]);
    return (_jsx("div", { className: "min-h-screen bg-gray-50 p-6 sm:p-8 lg:p-10 font-sans", children: _jsxs("div", { className: "max-w-4xl mx-auto bg-white shadow-xl rounded-xl p-6 space-y-6", children: [_jsx(HeaderTabs, { activeTab: activeTab, setActiveTab: setActiveTab }), _jsxs("div", { children: [activeTab === 'Filter' && (_jsxs("div", { className: "space-y-6", children: [_jsxs("div", { className: "flex justify-between items-center pb-2 border-b border-gray-100 mb-4", children: [_jsx("h2", { className: "text-xl font-bold text-gray-800", children: "Fields" }), _jsx(ChevronRight, { size: 24, className: "text-gray-500 transform rotate-90" })] }), _jsx(HeaderFields, { templateName: "Default Port Configuration", templateId: "A12-CFG-001" }), _jsxs("div", { className: "flex justify-between items-end pt-4 pb-2 border-b border-gray-100 mb-4", children: [_jsx("h2", { className: "text-xl font-bold text-gray-800", children: "Port Template" }), _jsxs("div", { className: "flex space-x-3", children: [_jsx("button", { onClick: addRoot, className: "flex items-center justify-center p-2 bg-blue-500 text-white text-sm font-medium rounded-lg hover:bg-blue-600 transition-colors shadow-md", title: "Add root port", children: _jsx(Plus, { size: 16 }) }), _jsx("button", { className: "px-3 py-1 bg-gray-200 text-gray-700 text-sm font-medium rounded-lg hover:bg-gray-300 transition-colors shadow-md", children: "Back" }), _jsx("button", { className: "px-3 py-1 bg-blue-500 text-white text-sm font-medium rounded-lg hover:bg-blue-600 transition-colors shadow-md", children: "Save" })] })] }), _jsxs("div", { className: "relative pl-4", children: [ports.length > 0 && _jsx("div", { className: "absolute top-0 left-0 bottom-0 w-[2px] bg-gray-300 pointer-events-none" }), ports.length === 0 ? _jsx("div", { className: "text-center py-10 text-gray-500 border border-dashed border-gray-300 rounded-lg", children: "No ports defined. Click the \"+\" button to add a root port." }) : PortTree] }), _jsxs("div", { className: "flex justify-between items-center pt-4 pb-2 border-b border-gray-100 mb-4", children: [_jsx("h2", { className: "text-xl font-bold text-gray-800", children: "Documents" }), _jsx(Plus, { size: 24, className: "text-blue-500 hover:text-blue-700 cursor-pointer" })] }), _jsx(DocumentsSection, {})] })), activeTab === 'Details' && (_jsxs("div", { className: "text-gray-600", children: [_jsx("h2", { className: "text-xl font-semibold mb-3", children: "Template Metadata" }), _jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-4", children: [_jsx("p", { children: "Status: Active" }), _jsx("p", { children: "Creator: System Admin" }), _jsx("p", { children: "Last Modified: 2025-10-19" }), _jsx("p", { children: "Version: 1.5.0" }), _jsxs("p", { children: ["Total ports: ", totalPorts] })] })] }))] })] }) }));
};
export default PortTemplate;
