import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useCallback, useMemo, useState } from 'react';
// FIX: Use an alias to avoid confusing the component with its own props (if PortTemplateProps was used)
import TreeItemComponent from './TreeItem';
import { Plus } from 'lucide-react';
// Dummy imports for types and utils 
const applyMutation = (p, m) => p;
const generateId = () => `id-${Date.now()}`;
const PortTemplate = () => {
    const [ports, setPorts] = useState(() => [
        { id: 'A', name: 'A', isEditable: false, children: [] },
        { id: 'B', name: 'B', isEditable: false, children: [] },
        {
            id: 'C',
            name: 'C',
            isEditable: false,
            children: [
                { id: 'C1', name: '', isEditable: true, children: [] },
                { id: 'C2', name: '', isEditable: true, children: [] },
            ],
        },
        { id: 'D', name: 'D', isEditable: false, children: [] },
        { id: 'E', name: 'E', isEditable: false, children: [] },
        { id: 'F', name: 'F', isEditable: false, children: [] },
    ]);
    const mutationHandler = useCallback((m) => {
        setPorts((prev) => applyMutation(prev, m));
    }, []);
    const addRoot = () => {
        const newRoot = { id: generateId(), name: '', isEditable: true, children: [] };
        // FIX: Renamed 'p' to 'prevPorts' to resolve the shorthand property error
        setPorts((prevPorts) => [...prevPorts, newRoot]);
    };
    const PortTree = useMemo(() => {
        return (_jsx("div", { className: "port-tree-container", children: ports.map((p, idx) => (
            // FIX: Use the imported alias
            _jsx(TreeItemComponent, { port: p, depth: 0, mutationHandler: mutationHandler, isLastRoot: idx === ports.length - 1 }, p.id))) }));
    }, [ports, mutationHandler]);
    return (_jsxs("div", { className: "port-template-wrapper", children: [_jsxs("div", { className: "port-template-header", children: [_jsx("h2", { className: "port-template-title", children: "Port Template" }), _jsxs("div", { className: "port-template-actions", children: [_jsx("button", { onClick: addRoot, title: "Add root port", className: "add-root-btn", children: _jsx(Plus, { size: 16 }) }), _jsx("button", { className: "btn-back", children: "Back" }), _jsx("button", { className: "btn-save", children: "Save" })] })] }), _jsxs("div", { className: "port-template-content", children: [_jsx("div", { className: "tree-structure-area", children: PortTree }), _jsxs("div", { className: "floating-controls-mock", children: [_jsxs("div", { className: "floating-control-group", children: [_jsx("span", { className: "floating-label", children: "Read only" }), _jsxs("label", { className: "toggle-switch", children: [_jsx("input", { type: "checkbox", className: "sr-only" }), _jsx("div", { className: "slider-base", children: _jsx("div", { className: "slider-thumb" }) })] }), _jsx("button", { className: "floating-action-btn", children: _jsxs("svg", { width: "16", height: "16", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", children: [_jsx("polyline", { points: "3 6 5 6 21 6" }), _jsx("path", { d: "M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" })] }) })] }), _jsx("button", { className: "floating-add-btn", children: _jsx(Plus, { size: 16 }) })] })] })] }));
};
export default PortTemplate;
