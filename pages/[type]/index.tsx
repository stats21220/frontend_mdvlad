import { WithLayoutPageProductsComponent } from "@/layout/layout.page.product";
import { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from "next";
import axios from "axios";
import { MenuModel } from "@/interfaces/menu.interface";
import { ParsedUrlQuery } from "querystring";
import { PageProductsModel } from "@/interfaces/page.products";
import { ProductsModel } from "@/interfaces/products.interface";
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
  const { data: menu } = await axios.post<MenuModel[]>(
    process.env.NEXT_PUBLIC_DOMAIN + "/api/page-products/find"
  );

  const paths: string[] = menu.flatMap((m) =>
    m.pages.map((item) => `/${item.alias}`)
  );

  //////////////////////////////////////
  // console.log(paths);

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
    // const { data: firstMenu } = await axios.post<MenuModel[]>(
    //   process.env.NEXT_PUBLIC_DOMAIN + "/api/page-products/find"
    // );

    // if (!firstMenu) {
    //   return {
    //     notFound: true,
    //   };
    // }

    // const firstCategoryItem = firstMenu.find((s) => s.alias === params.type);

    // if (!firstCategoryItem) {
    //   return {
    //     notFound: true,
    //   };
    // }

    const { data: menu } = await axios.post<MenuModel[]>(
      process.env.NEXT_PUBLIC_DOMAIN + "/api/page-products/find"
    );

    const { data: page } = await axios.get<PageProductsModel>(
      process.env.NEXT_PUBLIC_DOMAIN + `/api/page-products/${params.type}`
    );

    const { data: products } = await axios.post<ProductsModel[]>(
      process.env.NEXT_PUBLIC_DOMAIN + "/api/product/find",
      {
        alias: [params.type],
        // limit: 20,
      }
    );

    console.log(products);

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
  products: ProductsModel[];
}
