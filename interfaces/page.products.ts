
export interface PageLevelItem {
	level: string;
	route: string;
	_id: string;
}

export interface LevelPage {
	first: PageLevelItem;
	second?: PageLevelItem;
	third?: PageLevelItem;
	fifth?: PageLevelItem;
	_id: string;
}



/////
export interface PageProductsModel {
	pageId: number;
	sortId?: number;
	title: string;
	alias: string;
	description: string;
	categories: LevelPage;
	categoriesRoute: string[]
	route?: string;
	parentRoute?: string;
	parentTitle?: string;
	categoriessecond: undefined;
	_id: string;
}
