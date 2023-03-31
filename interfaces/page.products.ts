
export interface PageLevelItem {
	level: string;
	alias: string;
	pageId: number;
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
	aliases: string[]
	parentId?: number;
	_id: string;
}
