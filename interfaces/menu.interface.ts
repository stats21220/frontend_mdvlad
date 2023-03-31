
export interface IMenuLevelItem {
		sortId: number;
		title: string;
		alias: string;
		pageId: number;
		parentId: number;
}

export interface IHomeCategory {
	_id: string;
	title: string;
	sortId: number;
	alias: string;
	pageId: number;
}

export interface MenuModel {
		_id: number;
		isOpened?: boolean;
		pages: IMenuLevelItem[]
}