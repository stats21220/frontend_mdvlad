import { WithLayout } from "@/layout/layout";
import { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from "next";
import axios from "axios";
import { MenuModel } from "@/interfaces/menu.interface";
import { ParsedUrlQuery } from "querystring";
import { PageProductsModel } from "@/interfaces/page.products";
import { ProductModel } from "@/interfaces/products.interface";
import { Menu } from "@/layout/Menu/menu";

function PageProducts({
  menu,
  page,
  products,
  firstLevelMenu,
  firstCategoryMenu,
}: PageProductsProps): JSX.Element {
  return (
    <>
      <Menu />
      <h1>{page.title}</h1>
      <span>{products.length}</span>
    </>
  );
}

export default WithLayout(PageProducts);

export const getStaticPaths: GetStaticPaths = async () => {
  const { data: menu } = await axios.post<MenuModel[]>(
    process.env.NEXT_PUBLIC_DOMAIN + "/api/page-products/find"
  );

  const routers = menu.flatMap((m) =>
    m.pages.map((r) => "/page-products/" + r.alias)
  );

  return {
    paths: routers,
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
  const firstCategoryMenu = "pilomateriali";
  const { data: menu } = await axios.post<MenuModel[]>(
    process.env.NEXT_PUBLIC_DOMAIN + "/api/page-products/find"
  );

  const { data: page } = await axios.get<PageProductsModel>(
    process.env.NEXT_PUBLIC_DOMAIN + "/api/page-products/" + params?.alias
  );

  const { data: products } = await axios.post<ProductModel[]>(
    process.env.NEXT_PUBLIC_DOMAIN + "/api/product/find",
    {
      category: page.alias,
      limit: 10,
    }
  );

  return {
    props: {
      menu,
      page,
      products,
      firstLevelMenu,
      firstCategoryMenu,
    },
  };
};

interface PageProductsProps extends Record<string, unknown> {
  menu: MenuModel[];
  page: PageProductsModel;
  products: ProductModel[];
  firstLevelMenu: string;
  firstCategoryMenu: string;
}
