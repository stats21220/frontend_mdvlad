import { ButtonHTMLAttributes, DetailedHTMLProps, ReactNode } from "react";

export interface ButtonProps extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>{
	color?: 'primary' | 'orange' | 'green';
	arrow?: 'right' | 'down' | 'none'
	children: ReactNode;
}