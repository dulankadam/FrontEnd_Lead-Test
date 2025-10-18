import React, { useCallback, useEffect, useMemo, useState } from 'react';
import TreeItem from './TreeItem';
import HeaderTabs from '../shared/HeaderTabs';
import HeaderFields from '../shared/HeaderFields';
import DocumentsSection from '../shared/DocumentsSection';
import { initialPortData, applyMutation, generateId } from '../../utils/treeUtils';
import { Port, MutationHandler, TabType } from '../../types';
import { Plus, ChevronRight } from 'lucide-react';

// Main container - composes shared components and tree
const PortTemplate: React.FC = () => {
  const [ports, setPorts] = useState<Port[]>(() => initialPortData);
  const [activeTab, setActiveTab] = useState<TabType>('Filter');
  const [totalPorts, setTotalPorts] = useState<number>(0);

  useEffect(() => {
    let count = 0;
    const walk = (p: Port) => {
      count++;
      p.children.forEach(walk);
    };
    ports.forEach(walk);
    setTotalPorts(count);
  }, [ports]);

  const mutationHandler: MutationHandler = useCallback((m) => {
    setPorts((prev) => applyMutation(prev, m));
  }, []);

  const addRoot = () => {
    const newRoot: Port = { id: generateId(), name: 'New Port', isEditable: true, children: [] };
    setPorts((p) => [...p, newRoot]);
    // TODO: auto-select / open editing
  };

  const PortTree = useMemo(() => {
    return (
      <div className="space-y-4">
        {ports.map((p, idx) => (
          <TreeItem key={p.id} port={p} depth={0} mutationHandler={mutationHandler} isLastRoot={idx === ports.length - 1} />
        ))}
      </div>
    );
  }, [ports, mutationHandler]);

  return (
    <div className="min-h-screen bg-gray-50 p-6 sm:p-8 lg:p-10 font-sans">
      <div className="max-w-4xl mx-auto bg-white shadow-xl rounded-xl p-6 space-y-6">
        <HeaderTabs activeTab={activeTab} setActiveTab={setActiveTab} />

        <div>
          {activeTab === 'Filter' && (
            <div className="space-y-6">
              <div className="flex justify-between items-center pb-2 border-b border-gray-100 mb-4">
                <h2 className="text-xl font-bold text-gray-800">Fields</h2>
                <ChevronRight size={24} className="text-gray-500 transform rotate-90" />
              </div>

              <HeaderFields templateName="Default Port Configuration" templateId="A12-CFG-001" />

              <div className="flex justify-between items-end pt-4 pb-2 border-b border-gray-100 mb-4">
                <h2 className="text-xl font-bold text-gray-800">Port Template</h2>
                <div className="flex space-x-3">
                  <button onClick={addRoot} className="flex items-center justify-center p-2 bg-blue-500 text-white text-sm font-medium rounded-lg hover:bg-blue-600 transition-colors shadow-md" title="Add root port">
                    <Plus size={16} />
                  </button>
                  <button className="px-3 py-1 bg-gray-200 text-gray-700 text-sm font-medium rounded-lg hover:bg-gray-300 transition-colors shadow-md">Back</button>
                  <button className="px-3 py-1 bg-blue-500 text-white text-sm font-medium rounded-lg hover:bg-blue-600 transition-colors shadow-md">Save</button>
                </div>
              </div>

              <div className="relative pl-4">
                {ports.length > 0 && <div className="absolute top-0 left-0 bottom-0 w-[2px] bg-gray-300 pointer-events-none" />}
                {ports.length === 0 ? <div className="text-center py-10 text-gray-500 border border-dashed border-gray-300 rounded-lg">No ports defined. Click the "+" button to add a root port.</div> : PortTree}
              </div>

              <div className="flex justify-between items-center pt-4 pb-2 border-b border-gray-100 mb-4">
                <h2 className="text-xl font-bold text-gray-800">Documents</h2>
                <Plus size={24} className="text-blue-500 hover:text-blue-700 cursor-pointer" />
              </div>
              <DocumentsSection />
            </div>
          )}

          {activeTab === 'Details' && (
            <div className="text-gray-600">
              <h2 className="text-xl font-semibold mb-3">Template Metadata</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <p>Status: Active</p>
                <p>Creator: System Admin</p>
                <p>Last Modified: 2025-10-19</p>
                <p>Version: 1.5.0</p>
                <p>Total ports: {totalPorts}</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default PortTemplate;
