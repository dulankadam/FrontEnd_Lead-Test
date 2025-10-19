import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState, useRef, useEffect } from "react";
const FieldInput = ({ title, children, defaultOpen = false, }) => {
    const [isOpen, setIsOpen] = useState(defaultOpen);
    const [height, setHeight] = useState(0);
    const contentRef = useRef(null);
    useEffect(() => {
        if (contentRef.current) {
            setHeight(contentRef.current.scrollHeight);
        }
    }, [children]);
    return (_jsxs("div", { className: "field-container", children: [_jsxs("button", { type: "button", className: "field-header", onClick: () => setIsOpen((prev) => !prev), children: [_jsx("span", { className: "field-title", children: title }), _jsx("svg", { className: `field-arrow ${isOpen ? "open" : ""}`, xmlns: "http://www.w3.org/2000/svg", width: "100%", height: "20", viewBox: "0 0 24 24", fill: "none", children: _jsx("path", { d: "M6 9l6 6 6-6", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }) })] }), _jsx("div", { className: "field-content-wrapper", style: {
                    maxHeight: isOpen ? `${height}px` : "0px",
                }, children: _jsx("div", { ref: contentRef, className: "field-content", children: children }) })] }));
};
export default FieldInput;
