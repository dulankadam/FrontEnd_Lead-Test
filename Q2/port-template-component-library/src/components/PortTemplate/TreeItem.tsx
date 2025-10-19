import React, { useCallback, useEffect, useRef, useState } from "react";
import { ChevronRight, Plus, X } from "lucide-react";
// Corrected import path assuming 'types' is in the root 'src' directory
import { Port, MutationHandler } from "../../types";

// 1. Define Props interface clearly
interface Props {
  port: Port;
  depth: number;
  mutationHandler: MutationHandler;
  isLastRoot: boolean;
}

const TreeItem: React.FC<Props> = React.memo(
  ({ port, depth, mutationHandler, isLastRoot }) => {
    const [isEditing, setIsEditing] = useState(false);
    const [editedName, setEditedName] = useState(port.name);
    const [isSelected, setIsSelected] = useState(false);
    const inputRef = useRef<HTMLInputElement | null>(null);

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
        {depth > 0 && (
          <>
            <div
              className={`connector-h ${
                isSelected ? "connector-selected" : ""
              }`}
            />
            <div
              className={`connector-v ${
                isSelected ? "connector-selected" : ""
              } ${isLastRoot ? "connector-v-last" : ""}`}
            />
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
            <button
              onClick={(e) => {
                e.stopPropagation();
                // placeholder for collapse/expand
              }}
              disabled={!hasChildren}
              className={`toggle-children-btn ${
                !hasChildren ? "invisible-toggle" : ""
              }`}
              title={hasChildren ? "Toggle" : "No children"}
            >
              <ChevronRight
                size={16}
                className={hasChildren ? "rotate-90" : ""}
              />
            </button>

            {isEditing ? (
              <input
                ref={inputRef}
                value={editedName}
                onChange={(e) => setEditedName(e.target.value)}
                onBlur={() => saveName()}
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
                  className={`port-name-text ${
                    port.isEditable ? "text-editable" : "text-read-only"
                  }`}
                  onDoubleClick={() => {
                    if (port.isEditable) setIsEditing(true);
                  }}
                >
                  {port.name || "Double-click to edit"}
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
                      onChange={(e) => {
                        e.stopPropagation();
                        toggleRO();
                      }}
                      className="sr-only"
                    />
                    <div className="slider-sm-base" />
                  </label>
                </div>

                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    remove();
                  }}
                  title="Delete"
                  className="control-btn control-btn-delete"
                >
                  <X size={18} />
                </button>

                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    addChild();
                  }}
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
              <TreeItem // ⬅️ Correct recursive call using its own name
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
