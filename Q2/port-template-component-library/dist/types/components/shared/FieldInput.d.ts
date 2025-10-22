import React, { ReactNode } from "react";
export interface Props {
    title: string;
    children?: ReactNode;
    defaultOpen?: boolean;
}
declare const FieldInput: React.FC<Props>;
export default FieldInput;
