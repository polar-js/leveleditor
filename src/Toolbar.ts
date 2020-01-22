import { ToolbarItem, ToolbarExpander, ToolbarCommand } from './ToolbarItem';

export class Toolbar {
	
	private items: Array<ToolbarItem>;
	private toolbarList: HTMLUListElement;

	constructor(toolbarDivClass: string = 'toolbar') {
		this.items = new Array<ToolbarItem>();
		this.toolbarList = document.createElement('ul');
		const toolbarDiv = <HTMLDivElement>document.getElementsByClassName(toolbarDivClass)[0];
		toolbarDiv.appendChild(this.toolbarList);

		if (!toolbarDiv) throw new Error(`No div found with class ${toolbarDivClass}`);
	}

	public addItem(item: ToolbarItem) {
		this.items.push(item);
		this.toolbarList.appendChild(item.getLI());
	}
}
