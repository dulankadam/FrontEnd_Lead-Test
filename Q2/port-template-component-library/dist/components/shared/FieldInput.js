import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
const FieldInput = ({ label, value }) => {
    return (_jsxs("div", { className: "flex flex-col text-sm", children: [_jsx("span", { className: "text-gray-500 font-medium", children: label }), _jsx("span", { className: "text-gray-800 font-semibold", children: value })] }));
};
export default FieldInput;
