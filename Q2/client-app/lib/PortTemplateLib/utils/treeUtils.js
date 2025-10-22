export const generateId = () => {
    try {
        return typeof crypto !== "undefined" && crypto.randomUUID
            ? crypto.randomUUID()
            : `id-${Date.now()}-${Math.floor(Math.random() * 10000)}`;
    }
    catch {
        return `id-${Date.now()}-${Math.floor(Math.random() * 10000)}`;
    }
};
export const initialPortData = [
    { id: "root-0", name: "0", isEditable: true, children: [], isFirstElement: true },
    { id: "root-1", name: "1", isEditable: true, children: [], isFirstElement: false },
    {
        id: "root-2",
        name: "2",
        isEditable: true,
        children: [
            {
                id: "child-2-0",
                name: "2.0",
                isEditable: true,
                children: [
                    {
                        id: "grandchild-2-0-0",
                        name: "2.0.0",
                        isEditable: false,
                        children: [],
                        isFirstElement: false,
                    },
                ],
                isFirstElement: false,
            },
            { id: "child-2-1", name: "2.1", isEditable: true, children: [], isFirstElement: false, },
        ],
        isFirstElement: false,
    },
    { id: "root-3", name: "3", isEditable: true, children: [], isFirstElement: false, },
    { id: "root-4", name: "4", isEditable: true, children: [], isFirstElement: false, },
    { id: "root-5", name: "5", isEditable: true, children: [], isFirstElement: false, },
];
export const applyMutation = (ports, mutation) => {
    return ports.reduce((acc, port) => {
        if (port.id === mutation.targetId) {
            const copy = { ...port, children: [...(port.children || [])] };
            switch (mutation.type) {
                case "ADD_CHILD":
                    if (mutation.payload?.newPort) {
                        copy.children = [...copy.children, mutation.payload.newPort];
                    }
                    acc.push(copy);
                    break;
                case "UPDATE_NAME":
                    copy.name = mutation.payload?.name ?? copy.name;
                    acc.push(copy);
                    break;
                case "TOGGLE_READONLY":
                    copy.isEditable = !copy.isEditable;
                    acc.push(copy);
                    break;
                case "DELETE":
                    // skip (delete)
                    break;
                default:
                    acc.push(port);
            }
        }
        else if (port.children && port.children.length > 0) {
            const newChildren = applyMutation(port.children, mutation);
            const changed = newChildren.length !== port.children.length ||
                newChildren.some((c, i) => c !== port.children[i]);
            if (changed)
                acc.push({ ...port, children: newChildren });
            else
                acc.push(port);
        }
        else {
            acc.push(port);
        }
        return acc;
    }, []);
};
export default {
    generateId,
    initialPortData,
    applyMutation,
};
