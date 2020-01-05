export declare class ResizeHandle {
    private handle;
    private leftDiv;
    private rightDiv;
    private leftBound;
    private rightBound;
    private isDrag;
    constructor(handle: HTMLDivElement, leftDiv: HTMLDivElement, rightDiv: HTMLDivElement, leftBound?: number, rightBound?: number);
    private onMouseDown;
    private onMouseMove;
    private onMouseUp;
}
