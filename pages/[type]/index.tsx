import { WithLayoutPageProductsComponent } from "@/layout/layout.page.product";
import { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from "next";
import axios from "axios";
import { IMenuLevelItem, MenuModel } from "@/interfaces/menu.interface";
import { ParsedUrlQuery } from "querystring";
import { PageProductsModel } from "@/interfaces/page.products";
import { ProductModel } from "@/interfaces/products.interface";
import { PageProductsComponent } from "@/page-components";

function PageProducts({ products, page }: PageProductsProps): JSX.Element {
  return (
    <>
      <PageProductsComponent page={page} products={products} />
    </>
  );
}

export default WithLayoutPageProductsComponent(PageProducts);

export const getStaticPaths: GetStaticPaths = async () => {
  const firstLevelMenu = "/";

  const paths: string[] = [];

  const { data: firstMenu } = await axios.post<IMenuLevelItem[]>(
    process.env.NEXT_PUBLIC_DOMAIN + "/api/page-products/findLevelPage",
    { level: firstLevelMenu }
  );

  if (firstMenu.length !== 0) {
    for (const first of firstMenu) {
      paths.push(first.route);
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

  const firstLevelMenu = "/";
  try {
    const { data: firstMenu } = await axios.post<IMenuLevelItem[]>(
      process.env.NEXT_PUBLIC_DOMAIN + "/api/page-products/findLevelPage",
      { level: firstLevelMenu }
    );

    if (!firstMenu) {
      return {
        notFound: true,
      };
    }

    const firstCategoryItem = firstMenu.find((s) => s.alias === params.type);

    if (!firstCategoryItem) {
      return {
        notFound: true,
      };
    }

    const { data: menu } = await axios.post<MenuModel[]>(
      process.env.NEXT_PUBLIC_DOMAIN + "/api/page-products/find"
    );

    const { data: page } = await axios.post<PageProductsModel>(
      process.env.NEXT_PUBLIC_DOMAIN + "/api/page-products/getPage",
      { route: `/${params.type}` }
    );

    const { data: products } = await axios.post<ProductModel[]>(
      process.env.NEXT_PUBLIC_DOMAIN + "/api/product/find",
      {
        category: page.alias,
        limit: 20,
      }
    );

    return {
      props: {
        menu,
        page,
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
  products: ProductModel[];
}
