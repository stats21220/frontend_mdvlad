import { WithLayoutPageProductsComponent } from "@/layout/layout.page.product";
import { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from "next";
import axios from "axios";
import { MenuModel } from "@/interfaces/menu.interface";
import { ParsedUrlQuery } from "querystring";
import { PageProductsModel } from "@/interfaces/page.products";
import { ProductModel, ProductNotFound } from "@/interfaces/products.interface";
import { PageProductsComponent } from "@/page-components";
import { PageProductComponent } from "@/page-components/page-product-component/page.product.component";

function PageProducts({
  product,
  products,
  page,
}: PageProductsProps): JSX.Element {
  return (
    <>
      {product && product.productId !== null ? (
        <PageProductComponent product={product} />
      ) : (
        <PageProductsComponent page={page} products={products} />
      )}
    </>
  );
}

export default WithLayoutPageProductsComponent(PageProducts);

export const getStaticPaths: GetStaticPaths = async () => {
  const paths: string[] = [];

  const { data: menu } = await axios.post<MenuModel[]>(
    process.env.NEXT_PUBLIC_DOMAIN + "/api/page-products/find"
  );

  for (const m of menu) {
    if (m._id.split("/").slice(1).length == 2) {
      for (const t of m.pages) {
        paths.push(t.route);
      }
      const { data: products } = await axios.post<ProductModel[]>(
        process.env.NEXT_PUBLIC_DOMAIN + "/api/product/find",
        {
          category: [...m._id.split("/").slice(1)],
        }
      );
      for (const p of products) {
        if (p.route.split("/").slice(1).length == 3) {
          paths.push(p.route);
        }
      }
    }
  }

  return {
    paths,
    fallback: true,
  };
};

export const getStaticProps: GetStaticProps<PageProductsProps> = async ({
  params,
}: GetStaticPropsContext<ParsedUrlQuery>) => {
  if (!params) {
    return {
      notFound: true,
    };
  }

  try {
    const { data: menu } = await axios.post<MenuModel[]>(
      process.env.NEXT_PUBLIC_DOMAIN + "/api/page-products/find"
    );

    if (!menu) {
      return {
        notFound: true,
      };
    }

    const { data: product } = await axios.post<ProductModel | ProductNotFound>(
      process.env.NEXT_PUBLIC_DOMAIN + "/api/product/getProduct",
      {
        route: `/${params.type}/${params.second}/${params.third}`,
      }
    );

    const { data: page } =
      product && product.productId === null
        ? await axios.post<PageProductsModel>(
            process.env.NEXT_PUBLIC_DOMAIN + "/api/page-products/getPage",
            { route: `/${params.type}/${params.second}/${params.third}` }
          )
        : await axios.post<PageProductsModel>(
            process.env.NEXT_PUBLIC_DOMAIN + "/api/page-products/getPage",
            { route: `/${params.type}/${params.second}` }
          );

    const { data: products } = await axios.post<ProductModel[]>(
      process.env.NEXT_PUBLIC_DOMAIN + "/api/product/find",
      {
        category: page.alias,
        limit: 20,
      }
    );

    if (!page) {
      return {
        notFound: true,
      };
    }

    return {
      props: {
        menu,
        page,
        product,
        products,
      },
      revalidate: 10,
    };
  } catch {
    return {
      notFound: true,
    };
  }
};

interface PageProductsProps extends Record<string, unknown> {
  menu: MenuModel[];
  page: PageProductsModel;
  product: ProductModel | ProductNotFound;
  products: ProductModel[];
}
