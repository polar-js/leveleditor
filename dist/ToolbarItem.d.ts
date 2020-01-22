export declare abstract class ToolbarItem {
    protected listItem: HTMLLIElement;
    protected hover: boolean;
    protected isShown: boolean;
    protected constructor(title: string);
    shouldShow(): boolean;
    show(): void;
    hide(): void;
    getLI(): HTMLLIElement;
    protected abstract onClick(ev: MouseEvent): void;
}
export declare class ToolbarExpander extends ToolbarItem {
    protected children: Array<ToolbarItem>;
    protected uList: HTMLUListElement;
    constructor(title: string);
    shouldShow(): boolean;
    addChild(child: ToolbarItem): void;
    protected onMouseOver(): void;
    protected onClick(ev: MouseEvent): void;
    hide(): void;
}
export declare class ToolbarCommand extends ToolbarItem {
    private clickFn;
    constructor(title: string, onClick: (event: MouseEvent) => void, shortcutHint?: string);
    protected onClick(ev: MouseEvent): void;
}
export declare class ToolbarRoot extends ToolbarExpander {
    constructor(title: string);
    shouldShow(): boolean;
    protected onClick(ev: MouseEvent): void;
    protected onMouseOver(): void;
}
