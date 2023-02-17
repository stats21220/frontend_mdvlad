import { DetailedHTMLProps, HTMLAttributes } from "react";

export interface PtagProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	sort: SortEnum;
	setSort: (type: SortEnum) => void;
}

export enum SortEnum {
	ProducCode,
	Count
}