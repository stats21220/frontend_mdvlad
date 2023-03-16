import { LevelPage } from "./page.products";

export interface IMenuLevelItem {
	title: string;
	sortId: number;
	alias: string;
	categories: LevelPage;
	firstLevel: string;
	secondlLevel?: string;
	thirdLevel?: string;
	fifthLevel?: string;
}

export interface MenuModel {
	_id: string;
	isOpened?: boolean;
	firstLevel: string;
	pages: IMenuLevelItem[];
}