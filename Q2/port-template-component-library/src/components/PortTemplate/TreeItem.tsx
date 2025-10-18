// Recursive tree item with edit/add/delete/toggle
import React, { useCallback, useEffect, useRef, useState } from 'react';
import { ChevronRight, Plus, X } from 'lucide-react';
import { Port, MutationHandler } from '../../types';

interface Props {
  port: Port;
  depth: number;
  mutationHandler: MutationHandler;
  isLastRoot: boolean;
}

const TreeItem: React.FC<Props> = React.memo(({ port, depth, mutationHandler, isLastRoot }) => {
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
      mutationHandler({ type: 'UPDATE_NAME', targetId: port.id, payload: { name: trimmed } });
    }
    setIsEditing(false);
  }, [editedName, mutationHandler, port.id, port.name]);

  const addChild = useCallback(() => {
    const newPort: Port = { id: `id-${Date.now()}`, name: 'New Port', isEditable: true, children: [] };
    mutationHandler({ type: 'ADD_CHILD', targetId: port.id, payload: { newPort } });
  }, [mutationHandler, port.id]);

  const remove = useCallback(() => {
    mutationHandler({ type: 'DELETE', targetId: port.id });
    setIsSelected(false);
  }, [mutationHandler, port.id]);

  const toggleRO = useCallback(() => {
    mutationHandler({ type: 'TOGGLE_READONLY', targetId: port.id });
  }, [mutationHandler, port.id]);

  const hasChildren = port.children && port.children.length > 0;

  return (
    <div
      className={`relative pt-3 ${depth > 0 ? 'ml-6' : ''}`}
      tabIndex={0}
      onBlur={(e) => {
        if (!e.currentTarget.contains(e.relatedTarget as Node)) setIsSelected(false);
      }}
    >
      {/* connectors - could be enhanced with pseudo elements */}
      {depth > 0 && <div className={`absolute top-4 left-[-16px] h-[2px] w-[16px] ${isSelected ? 'bg-indigo-500' : 'bg-gray-300'}`} />}
      {depth > 0 && <div className={`absolute top-0 left-[-16px] w-[2px] ${isSelected ? 'bg-indigo-500' : 'bg-gray-300'} ${isLastRoot ? 'h-4' : 'bottom-0'}`} />}

      <div
        className={`flex items-center group relative p-1 rounded-lg transition-all cursor-pointer ${isSelected ? 'bg-indigo-50' : ''}`}
        onClick={(e) => {
          e.stopPropagation();
          setIsSelected(true);
        }}
      >
        <div className="flex items-center flex-grow min-w-0">
          <button
            onClick={(e) => {
              e.stopPropagation();
              // placeholder for collapse/expand
            }}
            disabled={!hasChildren}
            className="mr-2 text-gray-500 hover:text-gray-800"
            title={hasChildren ? 'Toggle' : 'No children'}
          >
            <ChevronRight size={16} className={`${hasChildren ? 'rotate-90' : 'opacity-0'}`} />
          </button>

          {isEditing ? (
            <input
              ref={inputRef}
              value={editedName}
              onChange={(e) => setEditedName(e.target.value)}
              onBlur={() => saveName()}
              onKeyDown={(e) => {
                if (e.key === 'Enter') saveName();
                if (e.key === 'Escape') {
                  setIsEditing(false);
                  setEditedName(port.name);
                }
              }}
              className="flex-grow min-w-0 px-3 py-2 border border-blue-500 rounded-md text-sm font-medium focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-sm"
            />
          ) : (
            <div className="flex-grow min-w-0 px-3 py-2 border border-gray-300 rounded-md text-sm font-medium bg-white">
              <span
                className={`truncate ${port.isEditable ? 'text-gray-800' : 'text-gray-500 italic'}`}
                onDoubleClick={() => {
                  if (port.isEditable) setIsEditing(true);
                }}
              >
                {port.name}
              </span>
            </div>
          )}
        </div>

        {/* controls container */}
        <div className={`absolute right-[-220px] top-1/2 -translate-y-1/2 flex items-center space-x-2 transition-opacity duration-200 ml-4 ${isSelected ? 'opacity-100' : 'opacity-0'} group-hover:opacity-100 sm:relative sm:right-0 sm:top-0 sm:translate-y-0 sm:opacity-100`}>
          {isSelected && (
            <div className="flex items-center space-x-3 bg-white p-2 rounded-xl shadow border border-gray-200">
              <div className="flex items-center space-x-2 text-sm">
                <span className="text-gray-600">Read only</span>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    checked={!port.isEditable}
                    onChange={(e) => {
                      e.stopPropagation();
                      toggleRO();
                    }}
                    className="sr-only peer"
                  />
                  <div className="w-11 h-6 bg-gray-200 rounded-full peer-checked:bg-indigo-600 after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border after:rounded-full after:h-5 after:w-5 after:transition-all" />
                </label>
              </div>

              <button onClick={(e) => { e.stopPropagation(); remove(); }} title="Delete" className="p-2 rounded-full text-gray-500 hover:text-red-600 hover:bg-red-50 transition-colors">
                <X size={18} />
              </button>

              <button onClick={(e) => { e.stopPropagation(); addChild(); }} title="Add child" className="p-2 rounded-full text-white bg-blue-500 hover:bg-blue-600 transition-colors shadow-md">
                <Plus size={18} />
              </button>
            </div>
          )}
        </div>
      </div>

      {hasChildren && (
        <div className="relative">
          {port.children.map((child, idx) => (
            <TreeItem key={child.id} port={child} depth={depth + 1} mutationHandler={mutationHandler} isLastRoot={idx === port.children.length - 1} />
          ))}
        </div>
      )}
    </div>
  );
});

export default TreeItem;
