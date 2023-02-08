
export interface IMenuLevelItem {
	title: string;
	route: string;
	sortId: number;
	pageId: number;
	alias: string;
	isOpened?: boolean;
}

export interface MenuModel {
	_id: string
	pages: IMenuLevelItem[];
}