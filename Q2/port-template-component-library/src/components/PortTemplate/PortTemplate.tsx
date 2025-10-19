import React, { useCallback, useMemo, useState } from 'react';
// FIX: Use an alias to avoid confusing the component with its own props (if PortTemplateProps was used)
import TreeItemComponent from './TreeItem'; 
import { Port, MutationHandler, MutationAction } from '../../types'; 
import { Plus } from 'lucide-react';

// Dummy imports for types and utils 
const applyMutation = (p: Port[], m: MutationAction) => p; 
const generateId = () => `id-${Date.now()}`;

// Define the component's props interface (empty)
interface PortTemplateProps {}

const PortTemplate: React.FC<PortTemplateProps> = () => {
  const [ports, setPorts] = useState<Port[]>(() => [
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

  const mutationHandler: MutationHandler = useCallback((m: MutationAction) => {
    setPorts((prev) => applyMutation(prev, m));
  }, []);

  const addRoot = () => {
    const newRoot: Port = { id: generateId(), name: '', isEditable: true, children: [] };
    // FIX: Renamed 'p' to 'prevPorts' to resolve the shorthand property error
    setPorts((prevPorts) => [...prevPorts, newRoot]); 
  };

  const PortTree = useMemo(() => {
    return (
      <div className="port-tree-container">
        {ports.map((p, idx) => (
          // FIX: Use the imported alias
          <TreeItemComponent 
            key={p.id}
            port={p}
            depth={0}
            mutationHandler={mutationHandler}
            isLastRoot={idx === ports.length - 1}
          />
        ))}
      </div>
    );
  }, [ports, mutationHandler]);

  return (
    <div className="port-template-wrapper">
      {/* Header Area */}
      <div className="port-template-header">
        <h2 className="port-template-title">Port Template</h2>
        <div className="port-template-actions">
          {/* Root-level '+' button (Top-left in the image's layout) */}
          <button onClick={addRoot} title="Add root port" className="add-root-btn">
             <Plus size={16} />
          </button>
          <button className="btn-back">Back</button>
          <button className="btn-save">Save</button>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="port-template-content">
        {/* Tree Structure */}
        <div className="tree-structure-area">
          {PortTree}
        </div>
        
        {/* Floating Controls (Mocked) */}
        <div className="floating-controls-mock">
            <div className="floating-control-group">
                <span className="floating-label">Read only</span>
                {/* Mock toggle/switch */}
                <label className="toggle-switch">
                  <input type="checkbox" className="sr-only" />
                  <div className="slider-base">
                      <div className="slider-thumb" />
                  </div>
                </label>
                {/* Mock Trash icon */}
                <button className="floating-action-btn">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                    </svg>
                </button>
            </div>
            <button className="floating-add-btn">
                <Plus size={16} />
            </button>
        </div>
      </div>
    </div>
  );
};

export default PortTemplate;