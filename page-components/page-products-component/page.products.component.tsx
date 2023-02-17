import { Htag, Ptag } from "@/components";
import { Breadcrumbs } from "@/layout/Breadcrumbs/breadcrumbs";
import { Menu } from "@/layout/Menu/menu";
import { Products } from "@/layout/Products/products";
import { SubMenuTags } from "@/layout/SubMenuTags/sub.menu.tags";
import { IPageProducts } from "./page.products.component.props";
import styles from "./page.products.component.module.css";
import cn from "classnames";

export const PageProductsComponent = ({
  page,
  products,
  className,
  ...props
}: IPageProducts) => {
  return (
    <div className={cn(styles.wrapper, className)} {...props}>
      <Breadcrumbs className={styles.breadcrumbs} page={page} />
      <Htag color="black" className={styles.title}>
        {page && page.title}
      </Htag>
      <Menu className={styles.menu} />
      <SubMenuTags className={styles.submenu} />
      <Products className={styles.products} products={products} />
      <Ptag className={styles.description}>{page && page.description}</Ptag>
    </div>
  );
};
