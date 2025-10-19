import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import FieldInput from "./FieldInput";
const HeaderFields = ({ templateName, templateId }) => {
    return (_jsxs("div", { className: "grid grid-cols-2 sm:grid-cols-4 gap-4 mt-4", children: [_jsx(FieldInput, { label: "Type", value: "Computer" }), _jsx(FieldInput, { label: "Model", value: "Camera" }), _jsx(FieldInput, { label: "Template Name", value: templateName }), _jsx(FieldInput, { label: "Template ID", value: templateId })] }));
};
export default HeaderFields;
