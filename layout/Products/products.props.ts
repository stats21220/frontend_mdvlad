import { ProductModel } from "@/interfaces/products.interface";
import { DetailedHTMLProps, HTMLAttributes } from "react";

export interface IProducts extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  products: ProductModel[];
}