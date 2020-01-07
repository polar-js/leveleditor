

export enum ToolbarItemType {
	Expander = 0, Command
}

export abstract class ToolbarItem {

	public readonly type: ToolbarItemType;
	protected listItem: HTMLLIElement;
	protected hover: boolean;

	protected constructor(parent: HTMLUListElement, title: string, type: ToolbarItemType) {
		
		this.listItem = document.createElement('li');
		
		const titleSpan = document.createElement('span');
		titleSpan.innerText = title;
		titleSpan.classList.add('toolbar-item-title');
		this.listItem.appendChild(titleSpan);

		parent.appendChild(this.listItem);

		this.listItem.addEventListener('mouseenter', () => {
			this.hover = true;
		});

		this.listItem.addEventListener('mouseleave', () => {
			this.hover = false;
		});

		this.listItem.addEventListener('mouseover', this.onMouseOver);
	}

	public abstract shouldShow(): boolean;

	protected onMouseOver() {
		this.listItem.style.display = this.shouldShow() ? 'list-item' : 'none';
	}
}

export class ToolbarExpander extends ToolbarItem {
	private children: Array<ToolbarItem>;
	private uList: HTMLUListElement;

	public constructor(parent: HTMLUListElement, title: string) {
		super(parent, title, ToolbarItemType.Expander);
	}
	
	public shouldShow(): boolean {
		if (this.hover) return true;

		for (const child of this.children) {
			if (child.shouldShow()) return true;
		}
		return false;
	}

	protected onMouseOver() {
		super.onMouseOver();
		for (const child of this.children) {
			child.
		}
	}
}

export class ToolbarCommand extends ToolbarItem {

	public constructor(parent: HTMLUListElement, title: string, onClick: (event: MouseEvent) => void, shortcutHint?: string) {
		super(parent, title, ToolbarItemType.Command);
		this.listItem.addEventListener('click', onClick);

		if (shortcutHint) {
			const hintSpan = document.createElement('span');
			hintSpan.innerText = shortcutHint;
			hintSpan.classList.add('toolbar-item-shortcut');
			this.listItem.appendChild(hintSpan);
		}
	}

	public shouldShow(): boolean {
		return this.hover;
	}
}