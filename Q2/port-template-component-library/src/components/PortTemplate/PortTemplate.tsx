import React, { useCallback, useMemo, useState } from "react";
import TreeItemComponent from "./TreeItem"; 
import { Port, MutationHandler, MutationAction } from "../../types";
import { Plus } from "lucide-react";

const applyMutation = (ports: Port[], action: MutationAction): Port[] => {
  const findAndMutate = (items: Port[]): Port[] =>
    items
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
      .filter(
        (item) => !(item.id === action.targetId && action.type === "DELETE")
      );

  // Check for root-level deletion/mutation
  if (action.type === "DELETE" && ports.some((p) => p.id === action.targetId)) {
    return ports.filter((p) => p.id !== action.targetId);
  }
  return findAndMutate(ports);
};
const generateId = () => `id-${Date.now()}`;

interface PortTemplateProps {}

const PortTemplate: React.FC<PortTemplateProps> = () => {
  const [ports, setPorts] = useState<Port[]>(() => []);

  const mutationHandler: MutationHandler = useCallback((m: MutationAction) => {
    setPorts((prev) => applyMutation(prev, m));
  }, []);

  const addRoot = () => {
    const newRoot: Port = {
      id: generateId(),
      name: "",
      isEditable: true,
      children: [],
      isFirstElement: ports.length === 0,
    };
    setPorts((prevPorts) => [...prevPorts, newRoot]);
  };

  const PortTree = useMemo(() => {
    return (
      <div className="port-tree-container">
        {ports.map((p, idx) => (
          <TreeItemComponent
            key={p.id}
            port={p}
            depth={0}
            mutationHandler={mutationHandler}
            isLastRoot={idx === ports.length - 1}
            isFirstElement={ports.length === 0 ? true : false}
          />
        ))}
      </div>
    );
  }, [ports, mutationHandler]);

  return (
    <div className="port-template-wrapper">
      <div className="port-template-header">
        <h2 className="port-template-title">Port Template</h2>
      </div>

      <div className="port-template-actions">
        <button
          onClick={addRoot}
          title="Add root port"
          className="add-root-btn"
        >
          <Plus size={16} />
        </button>
        <div className="action-buttons-group">
          <button className="btn-back">Back</button>
          <button className="btn-save">Save</button>
        </div>
      </div>

      <div className="port-template-content">
        <div className="tree-structure-area">{PortTree}</div>
      </div>
    </div>
  );
};

export default PortTemplate;
