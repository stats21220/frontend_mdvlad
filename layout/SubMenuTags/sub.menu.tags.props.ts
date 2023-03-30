import { DetailedHTMLProps, HTMLAttributes } from "react";

export interface ISubMenu extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	parent?: string;
}