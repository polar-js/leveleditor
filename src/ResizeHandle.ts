

export class ResizeHandle {

    private handle: HTMLDivElement;
    private leftDiv: HTMLDivElement;
    private rightDiv: HTMLDivElement;
    private leftBound: number;
    private rightBound: number;

    private isDrag = false;

    constructor(handle: HTMLDivElement, leftDiv: HTMLDivElement, rightDiv: HTMLDivElement, leftBound = 0, rightBound = window.innerWidth) {
        if (!handle || !leftDiv || !rightDiv || !leftBound || !rightBound) {
            throw new Error('Parameter is null!');
        }

        this.handle = handle;
        this.leftDiv = leftDiv;
        this.rightDiv = rightDiv;
        this.leftBound = leftBound;
        this.rightBound = rightBound;

        handle.addEventListener('mousedown', ev => this.onMouseDown(ev));
        window.addEventListener('mousemove', ev => this.onMouseMove(ev))
        window.addEventListener('mouseup', ev => this.onMouseUp(ev));
    }

    private onMouseDown(ev: MouseEvent) {
        console.log('Mouse down...');
        this.isDrag = true;
    }

    private onMouseMove(ev: MouseEvent) {
        if (this.isDrag) {
            if (ev.clientX > this.leftBound && ev.clientX < this.rightBound) {

                if ( ev.clientX < this.rightDiv.getBoundingClientRect().right - 20 
                    && ev.clientX > this.leftDiv.getBoundingClientRect().left + 20 ) {
                    this.handle.style.left = `${ev.clientX - 1}px`;
                    this.handle.style.right = `${window.innerWidth - ev.clientX + 1}px`;
                    this.leftDiv.style.right = `${window.innerWidth - ev.clientX - 1}px`;
                    this.rightDiv.style.left = `${ev.clientX + 1}px`;
                }
            }
        }
    }

    private onMouseUp(ev: MouseEvent) {
        if (this.isDrag) {
            console.log('Mouse up');
            this.isDrag = false;
        }
    }
}