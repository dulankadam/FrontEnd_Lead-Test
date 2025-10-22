import React from "react";
import { TabType } from "../../types";
interface Props {
    activeTab: TabType;
    setActiveTab: (t: TabType) => void;
}
declare const HeaderTabs: React.FC<Props>;
export default HeaderTabs;
