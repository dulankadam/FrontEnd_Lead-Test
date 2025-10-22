import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import React, { useCallback, useEffect, useRef, useState } from "react";
import { Plus, Trash2 } from "lucide-react";
const TreeItem = React.memo(({ port, depth, mutationHandler, isLastRoot }) => {
    const [isEditing, setIsEditing] = useState(false);
    const [editedName, setEditedName] = useState(port.name);
    const [isSelected, setIsSelected] = useState(false);
    const inputRef = useRef(null);
    useEffect(() => {
        setEditedName(port.name);
    }, [port.name]);
    useEffect(() => {
        if (isEditing && inputRef.current) {
            inputRef.current.focus();
            inputRef.current.select();
        }
    }, [isEditing]);
    const saveName = useCallback(() => {
        const trimmed = editedName.trim();
        if (trimmed && trimmed !== port.name) {
            mutationHandler({
                type: "UPDATE_NAME",
                targetId: port.id,
                payload: { name: trimmed },
            });
        }
        setIsEditing(false);
    }, [editedName, mutationHandler, port.id, port.name]);
    const addChild = useCallback((e) => {
        e.stopPropagation();
        const newPort = {
            id: `id-${Date.now()}`,
            name: "",
            isEditable: true,
            children: [],
            isFirstElement: port.isFirstElement,
        };
        mutationHandler({
            type: "ADD_CHILD",
            targetId: port.id,
            payload: { newPort },
        });
    }, [mutationHandler, port.id]);
    const remove = useCallback((e) => {
        e.stopPropagation();
        mutationHandler({ type: "DELETE", targetId: port.id });
        setIsSelected(false);
    }, [mutationHandler, port.id]);
    const toggleRO = useCallback((e) => {
        e.stopPropagation();
        mutationHandler({ type: "TOGGLE_READONLY", targetId: port.id });
    }, [mutationHandler, port.id]);
    // ----------------------------------------------
    const hasChildren = port.children && port.children.length > 0;
    const isRoot = depth === 0;
    const isFirstElement = port.isFirstElement;
    const itemWrapperClasses = [
        "tree-item-wrapper",
        depth > 0 ? "nested-item" : "",
    ]
        .filter(Boolean)
        .join(" ");
    const itemContentClasses = [
        "tree-item-content",
        isSelected ? "is-selected" : "",
    ]
        .filter(Boolean)
        .join(" ");
    const controlsContainerClasses = [
        "controls-container",
        isSelected ? "controls-visible" : "",
    ]
        .filter(Boolean)
        .join(" ");
    // ----------------------------------------------
    return (_jsxs("div", { className: itemWrapperClasses, tabIndex: 0, onBlur: (e) => {
            if (!e.currentTarget.contains(e.relatedTarget))
                setIsSelected(false);
        }, children: [depth > 0 ? (_jsx(_Fragment, { children: !isLastRoot ? ( // <-- NEW CONDITION
                _jsxs(_Fragment, { children: [_jsx("div", { className: `connector-h ${isSelected ? "connector-selected" : ""}` }), _jsx("div", { className: `connector-v ${isSelected ? "connector-selected" : ""}` })] })) : (_jsxs(_Fragment, { children: [_jsx("div", { className: `connector-h-last ${isSelected ? "connector-selected" : ""}` }), _jsx("div", { className: `connector-v-last ${isSelected ? "connector-selected" : ""}` })] })) })) : (_jsx(_Fragment, { children: !isLastRoot ? (_jsxs(_Fragment, { children: [_jsx("div", { className: `root-item-connector-v ${isSelected ? "connector-selected" : ""}` }), _jsx("div", { className: `root-item-connector-h ${isSelected ? "connector-selected" : ""}` })] })) : (isFirstElement ? null : (_jsxs(_Fragment, { children: [_jsx("div", { className: `root-item-connector-v-last ${isSelected ? "connector-selected" : ""}` }), _jsx("div", { className: `root-item-connector-h-last ${isSelected ? "connector-selected" : ""}` })] }))) })), _jsxs("div", { className: itemContentClasses, onClick: (e) => {
                    e.stopPropagation();
                    setIsSelected(true);
                }, children: [_jsx("div", { className: "input-area", children: isEditing ? (_jsx("input", { ref: inputRef, value: editedName, onChange: (e) => setEditedName(e.target.value), onBlur: saveName, onKeyDown: (e) => {
                                if (e.key === "Enter")
                                    saveName();
                                if (e.key === "Escape") {
                                    setIsEditing(false);
                                    setEditedName(port.name);
                                }
                            }, className: "port-input port-input-editing", placeholder: "Enter Port Name" })) : (_jsx("div", { className: "port-input port-input-display", children: _jsxs("span", { className: `port-name-text ${port.isEditable ? "text-editable" : "text-read-only"}`, onDoubleClick: () => {
                                    if (port.isEditable)
                                        setIsEditing(true);
                                }, children: [editedName, " ", !editedName && (_jsx("span", { className: "placeholder-text", children: "(Unnamed)" }))] }) })) }), _jsx("div", { className: controlsContainerClasses, children: isSelected && (_jsxs(_Fragment, { children: [_jsxs("div", { className: "contextual-controls-box", children: [_jsxs("div", { className: "control-group-ro", children: [_jsx("span", { className: "control-label", children: "Read only" }), _jsxs("label", { className: "toggle-switch-sm", children: [_jsx("input", { type: "checkbox", checked: !port.isEditable, onChange: toggleRO, className: "sr-only" }), _jsx("div", { className: "slider-sm-base" })] })] }), _jsx("button", { onClick: remove, title: "Delete", className: "control-btn control-btn-delete", children: _jsx(Trash2, { size: 18 }) })] }), _jsx("button", { onClick: addChild, title: "Add child", className: "control-btn control-btn-add", children: _jsx(Plus, { size: 18 }) })] })) })] }), hasChildren && (_jsx("div", { className: "children-container", children: port.children.map((child, idx) => (_jsx(TreeItem // Recursive call
                , { port: child, depth: depth + 1, mutationHandler: mutationHandler, isLastRoot: idx === port.children.length - 1 }, child.id))) }))] }));
});
export default TreeItem;
