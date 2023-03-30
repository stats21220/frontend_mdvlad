import { Htag, Ptag, Sort } from "@/components";
import { Breadcrumbs } from "@/layout/Breadcrumbs/breadcrumbs";
import { Menu } from "@/layout/Menu/menu";
import { Products } from "@/layout/Products/products";
import { SubMenuTags } from "@/layout/SubMenuTags/sub.menu.tags";
import { IPageProducts } from "./page.products.component.props";
import styles from "./page.products.component.module.css";
import cn from "classnames";
import { SortEnum } from "@/components/Sort/sort.props";
import { useEffect, useReducer } from "react";
import { sortReducer } from "./sort.reducer";
import { Product } from "@/layout/Product/product";

export const PageProductsComponent = ({
  page,
  products,
  product,
  className,
  ...props
}: IPageProducts) => {
  const [{ products: sortedProducts, sort }, dispatchSort] = useReducer(
    sortReducer,
    {
      products: products || [],
      sort: SortEnum.Count,
    }
  );

  useEffect(() => {
    dispatchSort({ type: "reset", initialState: products || [] });
  }, [products]);

  const setSort = (sort: SortEnum) => {
    dispatchSort({ type: sort });
  };

  return (
    <div className={cn(styles.wrapper, className)} {...props}>
      <Breadcrumbs
        className={styles.breadcrumbs}
        page={(page && page.categories) || (product && product.categories)}
      />
      <Htag color="black" className={styles.title}>
        {page && page.title}
      </Htag>
      <Menu className={styles.menu} />
      <div className={styles.content}>
        {product && product._id === "0" ? (
          <>
            <SubMenuTags
              className={styles.submenu}
              parent={(page && page.parentAlias) || undefined}
            />
            <Sort className={styles.sort} sort={sort} setSort={setSort} />
            <Products className={styles.products} products={sortedProducts} />
          </>
        ) : (
          <Product product={product} />
        )}
        <Ptag className={styles.description}>{page && page.description}</Ptag>
      </div>
    </div>
  );
};
