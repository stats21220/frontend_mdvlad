
export interface IMenuLevelItem {
	isOpened?: boolean;
	title: string;
	route: string;
	sortId: number;
	pageId: number;
	alias: string;
	firstLevelAlias: '$categories.first.alias',
	secondlLevelAlias?: string,
	thirdLevelAlias?: string,
	fifthLevelAlias?: string,
}

export interface MenuModel {
	_id: string;
	isOpened?: boolean;
	pages: IMenuLevelItem[];
}