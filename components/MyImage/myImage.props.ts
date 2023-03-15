import { ImageProps } from "next/image";

export interface IMyImage extends ImageProps{
	defaultImageSrc: string;
}