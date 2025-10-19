import React from "react";
interface Props {
    title: string;
    buttonText?: string;
    onButtonClick?: () => void;
}
declare const SectionHeader: React.FC<Props>;
export default SectionHeader;
