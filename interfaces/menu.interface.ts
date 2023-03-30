
export interface IMenuLevelItem {
		sortId: number;
		title: string;
		alias: string;
		parentAlias: string;
}

export interface IHomeCategory {
	_id: string;
	title: string;
	sortId: number;
	alias: string;
	pageId: number;
}

export interface MenuModel {
		_id: string;
		isOpened?: boolean;
		pages: IMenuLevelItem[]
}