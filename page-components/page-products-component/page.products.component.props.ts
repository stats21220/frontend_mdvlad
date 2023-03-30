import { PageProductsModel } from "@/interfaces/page.products";
import { ProductModel, ProductsModel } from "@/interfaces/products.interface";
import { DetailedHTMLProps, HTMLAttributes } from "react";


export interface IPageProducts extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>,HTMLDivElement> {
  page: PageProductsModel;
  products: ProductsModel[];
  product: ProductModel;
}