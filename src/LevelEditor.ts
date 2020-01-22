import * as Polar from 'polarjs';
import { EditorLayer } from './EditorLayer';
import { ResizeHandle } from './ResizeHandle';
import { Toolbar } from './Toolbar';
import { ToolbarItem, ToolbarExpander, ToolbarCommand, ToolbarRoot } from './ToolbarItem';

class LevelEditor extends Polar.Application {
    constructor(settings: Polar.ApplicationSettings) {
        super(settings);
        this.pushLayer(new EditorLayer("EditorLayer"));

        const resizeHandleLeftDiv = <HTMLDivElement>document.getElementById('resize-handle-left');
        const resizeHandleRightDiv = <HTMLDivElement>document.getElementById('resize-handle-right');

        const leftCol = <HTMLDivElement>document.getElementById('left-column');
        const centerCol = <HTMLDivElement>document.getElementById('center-column');
        const rightCol = <HTMLDivElement>document.getElementById('right-column');

        const resizeHandleLeft = new ResizeHandle(resizeHandleLeftDiv, leftCol, centerCol, 50, window.innerWidth - 100);
        const resizeHandleRight = new ResizeHandle(resizeHandleRightDiv, centerCol, rightCol, 50, window.innerWidth - 100);

        const toolbar = new Toolbar('toolbar');
        const fileMenu = new ToolbarRoot('File');
        const editMenu = new ToolbarRoot('Edit');
        
        const openCommand = new ToolbarCommand('Open', ev => {
            console.log('Open Works!');
        }, 'Ctrl+O');
        fileMenu.addChild(openCommand);

        const saveCommand = new ToolbarCommand('Save', ev => {
            console.log('Save Works!');
        }, 'Ctrl+S');
        fileMenu.addChild(saveCommand);

        toolbar.addItem(fileMenu);
        toolbar.addItem(editMenu);
    }
}

Polar.begin(new LevelEditor(<Polar.ApplicationSettings>{
    canvasID: 'editor-canvas',
    displayMode: 'fill',
    clearColor: Polar.glm.vec3.fromValues(0.624, 0.624, 0.624)
}));