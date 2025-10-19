// src/components/PortTemplate/TreeItem.tsx

import React, { useCallback, useEffect, useRef, useState } from "react";
import { ChevronRight, Plus, X } from "lucide-react";
import { Port, MutationHandler } from "../../types";

interface Props {
  port: Port;
  depth: number;
  mutationHandler: MutationHandler;
  isLastRoot: boolean;
}

const TreeItem: React.FC<Props> = React.memo(
  ({ port, depth, mutationHandler, isLastRoot }) => {
    // --- STATE DEFINITIONS (FIXED MISSING CODE) ---
    const [isEditing, setIsEditing] = useState(false);
    const [editedName, setEditedName] = useState(port.name);
    const [isSelected, setIsSelected] = useState(false);
    const inputRef = useRef<HTMLInputElement | null>(null);

    // --- EFFECT HOOKS (FIXED MISSING CODE) ---
    useEffect(() => {
      setEditedName(port.name);
    }, [port.name]);

    useEffect(() => {
      if (isEditing && inputRef.current) {
        inputRef.current.focus();
        inputRef.current.select();
      }
    }, [isEditing]);

    // --- HANDLERS (FIXED MISSING CODE) ---
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

    const addChild = useCallback((e: React.MouseEvent) => {
      e.stopPropagation();
      const newPort: Port = {
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

    const remove = useCallback((e: React.MouseEvent) => {
      e.stopPropagation();
      mutationHandler({ type: "DELETE", targetId: port.id });
      setIsSelected(false);
    }, [mutationHandler, port.id]);

    const toggleRO = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
      e.stopPropagation();
      mutationHandler({ type: "TOGGLE_READONLY", targetId: port.id });
    }, [mutationHandler, port.id]);
    // ----------------------------------------------

    const hasChildren = port.children && port.children.length > 0;
    const isRoot = depth === 0;

    // --- CLASS DEFINITIONS (FIXED MISSING CODE) ---
    const itemWrapperClasses = [
      "tree-item-wrapper",
      depth > 0 ? "nested-item" : "",
    ].filter(Boolean).join(" ");

    const itemContentClasses = [
      "tree-item-content",
      isSelected ? "is-selected" : "",
    ].filter(Boolean).join(" ");

    const controlsContainerClasses = [
      "controls-container",
      isSelected ? "controls-visible" : "",
    ].filter(Boolean).join(" ");
    // ----------------------------------------------

    return (
      <div
        className={itemWrapperClasses}
        tabIndex={0}
        onBlur={(e) => {
          if (!e.currentTarget.contains(e.relatedTarget as Node))
            setIsSelected(false);
        }}
      >
        {/* Connectors (Vertical and Horizontal lines) */}
        
        {/* Render H and V connectors for nested items (depth > 0) */}
        {depth > 0 && (
          <>
            <div className={`connector-h ${isSelected ? "connector-selected" : ""}`} />
            <div className={`connector-v ${isSelected ? "connector-selected" : ""} ${isLastRoot ? "connector-v-last" : ""}`} />
          </>
        )}
        
        {/* FIX: Vertical line for all Root items except the last one (Continuous Red Line) */}
        {isRoot && !isLastRoot ? (
          <>
            <div className="root-item-connector-v" />
            <div className="root-item-connector-h" />
          </>
        ) : (
          <>
             <div className="root-item-connector-h-last" />
          </>
        )}
        
        <div
          className={itemContentClasses}
          onClick={(e) => {
            e.stopPropagation();
            setIsSelected(true);
          }}
        >
          <div className="input-area"> 
            {isEditing ? (
              <input
                ref={inputRef}
                value={editedName}
                onChange={(e) => setEditedName(e.target.value)}
                onBlur={saveName}
                onKeyDown={(e) => {
                  if (e.key === "Enter") saveName();
                  if (e.key === "Escape") {
                    setIsEditing(false);
                    setEditedName(port.name);
                  }
                }}
                className="port-input port-input-editing"
                placeholder="Enter Port Name"
              />
            ) : (
              <div className="port-input port-input-display">
                <span
                  className={`port-name-text ${port.isEditable ? "text-editable" : "text-read-only"}`}
                  onDoubleClick={() => {
                    if (port.isEditable) setIsEditing(true);
                  }}
                >
                  {editedName} {!editedName && <span className="placeholder-text">(Unnamed)</span>}
                </span>
              </div>
            )}
          </div>

          {/* Floating/Contextual Controls */}
          <div className={controlsContainerClasses}>
            {isSelected && (
              <div className="contextual-controls-box">
                <div className="control-group-ro">
                  <span className="control-label">Read only</span>
                  <label className="toggle-switch-sm">
                    <input
                      type="checkbox"
                      checked={!port.isEditable}
                      onChange={toggleRO}
                      className="sr-only"
                    />
                    <div className="slider-sm-base" />
                  </label>
                </div>

                <button
                  onClick={remove}
                  title="Delete"
                  className="control-btn control-btn-delete"
                >
                  <X size={18} />
                </button>

                <button
                  onClick={addChild}
                  title="Add child"
                  className="control-btn control-btn-add"
                >
                  <Plus size={18} />
                </button>
              </div>
            )}
          </div>
        </div>

        {hasChildren && (
          <div className="children-container">
            {port.children.map((child: Port, idx: number) => (
              <TreeItem // Recursive call
                key={child.id}
                port={child}
                depth={depth + 1}
                mutationHandler={mutationHandler}
                isLastRoot={idx === port.children.length - 1}
              />
            ))}
          </div>
        )}
      </div>
    );
  }
);

export default TreeItem;