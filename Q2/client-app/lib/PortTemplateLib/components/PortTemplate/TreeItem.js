import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import React, { useCallback, useEffect, useRef, useState } from "react";
import { ChevronRight, Plus, X } from "lucide-react";
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
    const addChild = useCallback(() => {
        const newPort = {
            id: `id-${Date.now()}`,
            name: "",
            isEditable: true,
            children: [],
        };
        mutationHandler({
            type: "ADD_CHILD",
            targetId: port.id,
            payload: { newPort },
        });
    }, [mutationHandler, port.id]);
    const remove = useCallback(() => {
        mutationHandler({ type: "DELETE", targetId: port.id });
        setIsSelected(false);
    }, [mutationHandler, port.id]);
    const toggleRO = useCallback(() => {
        mutationHandler({ type: "TOGGLE_READONLY", targetId: port.id });
    }, [mutationHandler, port.id]);
    const hasChildren = port.children && port.children.length > 0;
    // CSS classes are conditionally applied based on component state/props
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
    return (_jsxs("div", { className: itemWrapperClasses, tabIndex: 0, onBlur: (e) => {
            if (!e.currentTarget.contains(e.relatedTarget))
                setIsSelected(false);
        }, children: [depth > 0 && (_jsxs(_Fragment, { children: [_jsx("div", { className: `connector-h ${isSelected ? "connector-selected" : ""}` }), _jsx("div", { className: `connector-v ${isSelected ? "connector-selected" : ""} ${isLastRoot ? "connector-v-last" : ""}` })] })), _jsxs("div", { className: itemContentClasses, onClick: (e) => {
                    e.stopPropagation();
                    setIsSelected(true);
                }, children: [_jsxs("div", { className: "input-area", children: [_jsx("button", { onClick: (e) => {
                                    e.stopPropagation();
                                    // placeholder for collapse/expand
                                }, disabled: !hasChildren, className: `toggle-children-btn ${!hasChildren ? "invisible-toggle" : ""}`, title: hasChildren ? "Toggle" : "No children", children: _jsx(ChevronRight, { size: 16, className: hasChildren ? "rotate-90" : "" }) }), isEditing ? (_jsx("input", { ref: inputRef, value: editedName, onChange: (e) => setEditedName(e.target.value), onBlur: () => saveName(), onKeyDown: (e) => {
                                    if (e.key === "Enter")
                                        saveName();
                                    if (e.key === "Escape") {
                                        setIsEditing(false);
                                        setEditedName(port.name);
                                    }
                                }, className: "port-input port-input-editing", placeholder: "Enter Port Name" })) : (_jsx("div", { className: "port-input port-input-display", children: _jsx("span", { className: `port-name-text ${port.isEditable ? "text-editable" : "text-read-only"}`, onDoubleClick: () => {
                                        if (port.isEditable)
                                            setIsEditing(true);
                                    }, children: port.name || "Double-click to edit" }) }))] }), _jsx("div", { className: controlsContainerClasses, children: isSelected && (_jsxs("div", { className: "contextual-controls-box", children: [_jsxs("div", { className: "control-group-ro", children: [_jsx("span", { className: "control-label", children: "Read only" }), _jsxs("label", { className: "toggle-switch-sm", children: [_jsx("input", { type: "checkbox", checked: !port.isEditable, onChange: (e) => {
                                                        e.stopPropagation();
                                                        toggleRO();
                                                    }, className: "sr-only" }), _jsx("div", { className: "slider-sm-base" })] })] }), _jsx("button", { onClick: (e) => {
                                        e.stopPropagation();
                                        remove();
                                    }, title: "Delete", className: "control-btn control-btn-delete", children: _jsx(X, { size: 18 }) }), _jsx("button", { onClick: (e) => {
                                        e.stopPropagation();
                                        addChild();
                                    }, title: "Add child", className: "control-btn control-btn-add", children: _jsx(Plus, { size: 18 }) })] })) })] }), hasChildren && (_jsx("div", { className: "children-container", children: port.children.map((child, idx) => (_jsx(TreeItem // ⬅️ Correct recursive call using its own name
                , { port: child, depth: depth + 1, mutationHandler: mutationHandler, isLastRoot: idx === port.children.length - 1 }, child.id))) }))] }));
});
export default TreeItem;
