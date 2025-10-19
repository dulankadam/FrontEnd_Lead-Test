import React from 'react';
import { Port, MutationHandler } from '../../types';
interface Props {
    port: Port;
    depth: number;
    mutationHandler: MutationHandler;
    isLastRoot: boolean;
}
declare const TreeItem: React.FC<Props>;
export default TreeItem;
