import { PageProductsModel } from "@/interfaces/page.products";
import { ProductModel } from "@/interfaces/products.interface";
import { DetailedHTMLProps, HTMLAttributes } from "react";


export interface IPageProduct extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>,HTMLDivElement> {
  product: ProductModel;
}