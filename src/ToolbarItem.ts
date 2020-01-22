

// export enum ToolbarItemType {
// 	Expander = 0, Command
// }

export abstract class ToolbarItem {

	protected listItem: HTMLLIElement;
	protected hover: boolean;
	protected isShown: boolean;

	protected constructor(title: string) {
		
		this.listItem = document.createElement('li');
		
		const titleSpan = document.createElement('span');
		titleSpan.innerText = title;
		titleSpan.classList.add('toolbar-item-title');
		this.listItem.appendChild(titleSpan);
		this.listItem.classList.add('no-select');
		this.listItem.style.display = 'none';

		this.listItem.addEventListener('mouseenter', () => {
			this.hover = true;
		});

		this.listItem.addEventListener('mouseleave', () => {
			this.hover = false;
		});

		this.listItem.addEventListener('click', ev => this.onClick(ev));
	}

	public shouldShow(): boolean {
		return this.hover;
	}
	
	public show() {
		this.listItem.style.display =  'list-item';
		this.isShown = true;
	}

	public hide() {
		this.listItem.style.display =  'none';
		this.isShown = false;
	}

	public getLI(): HTMLLIElement {
		return this.listItem;
	}

	protected abstract onClick(ev: MouseEvent): void;
}

export class ToolbarExpander extends ToolbarItem {
	protected children: Array<ToolbarItem>;
	protected uList: HTMLUListElement;

	public constructor(title: string) {
		super(title);

		this.children = new Array<ToolbarItem>();
		this.uList = document.createElement('ul');
		this.listItem.appendChild(this.uList);
		this.listItem.addEventListener('mouseover', () => this.onMouseOver());
	}
	
	public shouldShow(): boolean {
		if (super.shouldShow()) return true;

		for (const child of this.children) {
			if (child.shouldShow()) return true;
		}
		return false;
	}

	public addChild(child: ToolbarItem) {
		this.children.push(child);
		this.uList.appendChild(child.getLI());
	}

	protected onMouseOver() {
		if (this.shouldShow()) {
			this.show();
		}
		else {
			this.hide();
		}

		for (const child of this.children) {
			child.show();
		}
	}

	protected onClick(ev: MouseEvent) {
		console.log('Expander click!');
	}

	public hide() {
		super.hide();
		for (const child of this.children) {
			child.hide();
		}
	}
}

export class ToolbarCommand extends ToolbarItem {

	private clickFn: (event: MouseEvent) => void;

	public constructor(title: string, onClick: (event: MouseEvent) => void, shortcutHint?: string) {
		super(title);

		this.clickFn = onClick;

		if (shortcutHint) {
			const hintSpan = document.createElement('span');
			hintSpan.innerText = shortcutHint;
			hintSpan.classList.add('toolbar-item-shortcut');
			this.listItem.appendChild(hintSpan);
		}
	}

	protected onClick(ev: MouseEvent) {
		console.log('Command click!');
		this.clickFn(ev);
	}
}

export class ToolbarRoot extends ToolbarExpander {
	
	public constructor(title: string) {
		super(title);
		this.listItem.style.display = 'list-item';
	}

	public shouldShow(): boolean {
		return true;
	}

	protected onClick(ev: MouseEvent) {
		console.log('Root click!');

		if (this.isShown) {

		}

		for (const child of this.children) {
			child.hide();
		}
	}

	protected onMouseOver() {}
}