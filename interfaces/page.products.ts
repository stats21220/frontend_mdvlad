
export interface PageLevelItem {
	level: string;
	alias: string;
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
	parentAlias?: string;
	_id: string;
}
