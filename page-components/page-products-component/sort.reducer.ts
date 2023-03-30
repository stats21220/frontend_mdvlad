import { SortEnum } from "@/components/Sort/sort.props";
import { ProductsModel } from "@/interfaces/products.interface";

export type SorActions = 
	{type: SortEnum.Count} | 
	{type: SortEnum.ProducCode} | 
	{type: SortEnum.noSort} | 
	{type: 'reset', initialState: ProductsModel[]};

export interface SortReducerState {
	sort: SortEnum,
	products: ProductsModel[]
}

export const sortReducer = (state: SortReducerState, action: SorActions): SortReducerState => {
	switch(action.type) {
		case SortEnum.Count: 
			return {
				sort: SortEnum.Count,
				products: state.products.sort((a, b) => a.count < b.count ? 1 : -1)
			};
		case SortEnum.ProducCode: 
			return {
				sort: SortEnum.ProducCode,
				products: state.products.sort((a, b) => a.productId < b.productId ? -1 : 1)
			};
		case SortEnum.noSort:
			return {
				sort: SortEnum.noSort,
				products: state.products
			};
		case 'reset':
			return {
				sort: SortEnum.noSort,
				products: action.initialState
			};
		default: 
			throw new Error('reducer');
	}
};