import { Port, PortMutation } from "../types";
export declare const generateId: () => string;
export declare const initialPortData: Port[];
export declare const applyMutation: (ports: Port[], mutation: PortMutation) => Port[];
declare const _default: {
    generateId: () => string;
    initialPortData: Port[];
    applyMutation: (ports: Port[], mutation: PortMutation) => Port[];
};
export default _default;
