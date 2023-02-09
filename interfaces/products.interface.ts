


export interface PriceProductDto {
	_id: string
	name: string;
	value: number;
	count: number;
}

export interface ProductCharacteeristicsDto {
	_id: string
	title: string;
	value: string | number;
}

export interface ProductCategoryItem {
	_id: string
	level: string;
	alias: string;
	route?: string;
}

export interface ProductCategoryLevel {
	_id: string
	first: ProductCategoryItem;
	second?: ProductCategoryItem;
	third?: ProductCategoryItem;
	fifth?:  ProductCategoryItem;
}




/////////////////////
export interface ProductModel {
	_id: string
	productId: number;
	image: string;
	title: string;
	route: string;
	alias: string;
	categories: ProductCategoryLevel;
	price: PriceProductDto[];
	oldPrice?: PriceProductDto[];
	categoriesRoute: string[];
	characteristics: ProductCharacteeristicsDto;
	count: number;
	weight: number;
	popular?: 0 | 1;
	special?: 0 | 1;
}