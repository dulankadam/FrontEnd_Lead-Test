export interface Port {
  id: string;
  name: string;
  isEditable: boolean;
  children: Port[];
}

export type PortMutationType =
  | "ADD_CHILD"
  | "UPDATE_NAME"
  | "DELETE"
  | "TOGGLE_READONLY";

export interface PortMutation {
  type: PortMutationType;
  targetId: string;
  payload?: {
    name?: string;
    newPort?: Port;
  };
}


// Define the structure of a Port item
export interface Port {
  id: string;
  name: string;
  isEditable: boolean;
  children: Port[]; // Ports can contain other Ports
  isFirstElement:boolean;
}

export type MutationAction = 
  | { type: 'UPDATE_NAME'; targetId: string; payload: { name: string } }
  | { type: 'ADD_CHILD'; targetId: string; payload: { newPort: Port } }
  | { type: 'DELETE'; targetId: string }
  | { type: 'TOGGLE_READONLY'; targetId: string };

export type MutationHandler = (mutation: MutationAction) => void;


export type TabType = "Filter" | "Details";
