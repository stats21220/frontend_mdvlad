import { PageProductsModel } from "@/interfaces/page.products";
import { DetailedHTMLProps, HTMLAttributes } from "react";

export interface IBredcrumbs extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  page: PageProductsModel;
}