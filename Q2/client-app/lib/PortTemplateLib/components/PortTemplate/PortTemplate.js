import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useCallback, useMemo, useState } from "react";
import TreeItemComponent from "./TreeItem";
import { Plus } from "lucide-react";
const applyMutation = (ports, action) => {
    const findAndMutate = (items) => items
        .map((item) => {
        if (item.id === action.targetId) {
            switch (action.type) {
                case "UPDATE_NAME":
                    return { ...item, name: action.payload.name };
                case "TOGGLE_READONLY":
                    return { ...item, isEditable: !item.isEditable };
                case "ADD_CHILD":
                    return {
                        ...item,
                        children: [...item.children, action.payload.newPort],
                    };
            }
        }
        // If the item has children, recurse
        if (item.children && item.children.length > 0) {
            return { ...item, children: findAndMutate(item.children) };
        }
        return item;
    })
        .filter((item) => !(item.id === action.targetId && action.type === "DELETE"));
    // Check for root-level deletion/mutation
    if (action.type === "DELETE" && ports.some((p) => p.id === action.targetId)) {
        return ports.filter((p) => p.id !== action.targetId);
    }
    return findAndMutate(ports);
};
const generateId = () => `id-${Date.now()}`;
const PortTemplate = () => {
    const [ports, setPorts] = useState(() => []);
    const mutationHandler = useCallback((m) => {
        setPorts((prev) => applyMutation(prev, m));
    }, []);
    const addRoot = () => {
        const newRoot = {
            id: generateId(),
            name: "",
            isEditable: true,
            children: [],
            isFirstElement: ports.length === 0,
        };
        setPorts((prevPorts) => [...prevPorts, newRoot]);
    };
    const PortTree = useMemo(() => {
        return (_jsx("div", { className: "port-tree-container", children: ports.map((p, idx) => (_jsx(TreeItemComponent, { port: p, depth: 0, mutationHandler: mutationHandler, isLastRoot: idx === ports.length - 1, isFirstElement: ports.length === 0 ? true : false }, p.id))) }));
    }, [ports, mutationHandler]);
    return (_jsxs("div", { className: "port-template-wrapper", children: [_jsx("div", { className: "port-template-header", children: _jsx("h2", { className: "port-template-title", children: "Port Template" }) }), _jsxs("div", { className: "port-template-actions", children: [_jsx("button", { onClick: addRoot, title: "Add root port", className: "add-root-btn", children: _jsx(Plus, { size: 16 }) }), _jsxs("div", { className: "action-buttons-group", children: [_jsx("button", { className: "btn-back", children: "Back" }), _jsx("button", { className: "btn-save", children: "Save" })] })] }), _jsx("div", { className: "port-template-content", children: _jsx("div", { className: "tree-structure-area", children: PortTree }) })] }));
};
export default PortTemplate;
