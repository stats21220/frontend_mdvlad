import { IPageProduct } from "./page.product.component.props";
import styles from "./page.product.component.module.css";
import cn from "classnames";
import { Breadcrumbs } from "@/layout/Breadcrumbs/breadcrumbs";
import { Product } from "@/layout/Product/product";
import { Menu } from "@/layout/Menu/menu";
// import { Products } from "@/layout/Products/products";
// import { priceRu } from "@/helpers/helpers";

export const PageProductComponent = ({
  product,
  className,
  ...props
}: IPageProduct) => {
  return (
    <div className={cn(styles.wrapper, className)} {...props}>
      <Breadcrumbs
        className={styles.breadcrumbs}
        page={product && product.categories}
      />
      <Menu className={styles.menu} />
      <Product className={styles.product} product={product} />
    </div>
  );
};
