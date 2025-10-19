import { Port, PortMutation } from "../types";
export declare const generateId: () => string;
export declare const initialPortData: Port[];
/**
 * Apply a mutation immutably.
 * - ADD_CHILD: append a child to target node
 * - UPDATE_NAME: rename target node
 * - TOGGLE_READONLY: flip isEditable flag
 * - DELETE: remove node (and its children)
 *
 * Note: children of deleted node are discarded in this implementation.
 */
export declare const applyMutation: (ports: Port[], mutation: PortMutation) => Port[];
declare const _default: {
    generateId: () => string;
    initialPortData: Port[];
    applyMutation: (ports: Port[], mutation: PortMutation) => Port[];
};
export default _default;
