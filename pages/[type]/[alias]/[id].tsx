import { WithLayoutPageProductsComponent } from "@/layout/layout.page.product";
import { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from "next";
import axios from "axios";
import { MenuModel } from "@/interfaces/menu.interface";
import { ParsedUrlQuery } from "querystring";
import { PageProductsModel } from "@/interfaces/page.products";
import { ProductModel, ProductsModel } from "@/interfaces/products.interface";
import { PageProductsComponent } from "@/page-components";
import { API } from "@/helpers/api";
import { PageProductComponent } from "@/page-components/page-product-component/page.product.component";
import Head from "next/head";

function PageProducts({
  products,
  page,
}: // product,
PageProductsProps): JSX.Element {
  return (
    <>
      <Head>
        <title>{page && page.title}</title>
      </Head>
      <PageProductsComponent
        page={page}
        products={products}
        // product={product}
      />
    </>
  );
}

export default WithLayoutPageProductsComponent(PageProducts);

export const getStaticPaths: GetStaticPaths = async () => {
  const { data: catalog } = await axios.get<
    { alias: string; pageId: number }[]
  >(API.pageProduct.getPaths);
  const { data: product } = await axios.get<
    { alias: string; productId: number }[]
  >(API.product.findProductsPaths);

  const catalogPaths = catalog.map((c) => `/catalog/${c.alias}/${c.pageId}`);
  const producPaths = product.map((p) => `/product/${p.alias}/${p.productId}`);

  return {
    paths: [...catalogPaths, ...producPaths],
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
    const { data: page } = await axios.get<PageProductsModel>(
      API.pageProduct.getPage + params.id
    );

    const firstCategory = page.categories.first.pageId;
    const secondCategory =
      (page.categories.second?.alias && page.categories.second.pageId) ||
      firstCategory;

    // const { data: product } = await axios.get<ProductModel>(
    //   API.product.getProduct + params.page
    // );

    // if (product._id !== "0") {
    //   firstCategory = product.categories.first.alias;
    //   secondCategory =
    //     (product.categories.second?.alias && product.categories.second.alias) ||
    //     "";
    // }
    const { data: menu } = await axios.post<MenuModel[]>(
      API.pageProduct.getMenu
    );

    // const secondCategory = page.categories.second?.alias;

    const { data: products } = await axios.post<ProductsModel[]>(
      API.product.findProducts,
      {
        pageId: [params.id],
        // limit: 20,
      }
    );

    return {
      props: {
        menu,
        firstCategory,
        secondCategory,
        page,
        products,
        // product,
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
  firstCategory: number;
  secondCategory: number;
  page: PageProductsModel;
  products: ProductsModel[];
  // product: ProductModel;
}
