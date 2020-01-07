import { ToolbarItem } from './ToolbarItem';

export class Toolbar {
	
	private items: Array<ToolbarItem>;
	private toolbarList: HTMLUListElement;

	constructor(items: Array<ToolbarItem>, toolbarDivClass: string = 'toolbar') {
		this.items = items;
		const toolbarDiv = <HTMLDivElement>document.getElementsByClassName(toolbarDivClass)[0];

		if (!toolbarDiv) throw new Error(`No div found with class ${toolbarDivClass}`);

		
	}
}
