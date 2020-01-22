import { ToolbarItem } from './ToolbarItem';
export declare class Toolbar {
    private items;
    private toolbarList;
    constructor(toolbarDivClass?: string);
    addItem(item: ToolbarItem): void;
}
