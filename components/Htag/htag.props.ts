import { DetailedHTMLProps, HTMLAttributes, ReactNode } from "react";

export interface HtagProps extends DetailedHTMLProps<HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement> {
  color?: 'primary' | 'black' | 'white';
  tag?: 'h1' | 'h2' | 'h3';
  size?: 's' | 'm';
  children: ReactNode;
}