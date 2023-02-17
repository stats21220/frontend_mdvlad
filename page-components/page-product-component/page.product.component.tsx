import { IPageProduct } from "./page.product.component.props";
import styles from "./page.product.component.module.css";
import cn from "classnames";
import { Breadcrumbs } from "@/layout/Breadcrumbs/breadcrumbs";
import { Ptag } from "@/components";
import { Product } from "@/layout/Product/product";
import { Menu } from "@/layout/Menu/menu";
// import { Products } from "@/layout/Products/products";
// import { priceRu } from "@/helpers/helpers";

export const PageProductComponent = ({
  product,
  // products,
  page,
  className,
  ...props
}: IPageProduct) => {
  return (
    <div className={cn(styles.wrapper, className)} {...props}>
      <Breadcrumbs className={styles.breadcrumbs} page={page} />
      <Menu className={styles.menu} />
      <Product product={product} />
      {/* <Products className={styles.products} products={products} /> */}
      <Ptag className={styles.description}>{page && page.description}</Ptag>
    </div>
  );
};
