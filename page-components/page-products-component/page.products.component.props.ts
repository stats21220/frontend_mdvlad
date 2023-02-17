import { PageProductsModel } from "@/interfaces/page.products";
import { ProductModel } from "@/interfaces/products.interface";
import { DetailedHTMLProps, HTMLAttributes } from "react";


export interface IPageProducts extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>,HTMLDivElement> {
  page: PageProductsModel;
  products: ProductModel[];
}