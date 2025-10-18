// shared project types - intentionally small and explicit

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

export type MutationHandler = (m: PortMutation) => void;

export type TabType = "Filter" | "Details";
