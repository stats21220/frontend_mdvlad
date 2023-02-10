import { WithLayoutPageProductsComponent } from "@/layout/layout.page.product";
import { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from "next";
import axios from "axios";
import { IMenuLevelItem } from "@/interfaces/menu.interface";
import { ParsedUrlQuery } from "querystring";
import { PageProductsModel } from "@/interfaces/page.products";
import { ProductModel } from "@/interfaces/products.interface";
import { PageProductsComponent } from "@/layout/PageProductsComponent/page.products.component";

function PageProducts({
  firstMenu,
  secondMenu,
  products,
  page,
}: PageProductsProps): JSX.Element {
  return (
    <>
      <PageProductsComponent />
      {page && page.title}
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
      // paths.push(`/${first.alias}`);
      const { data: secondMenu } = await axios.post<IMenuLevelItem[]>(
        process.env.NEXT_PUBLIC_DOMAIN + "/api/page-products/findLevelPage",
        {
          level: first.route,
          next: true,
        }
      );

      if (secondMenu.length !== 0) {
        for (const second of secondMenu) {
          paths.push(`/${first.alias}/${second.alias}`);
        }
      }
    }
  }
  console.log(paths);

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

    const { data: secondMenu } = await axios.post<IMenuLevelItem[]>(
      process.env.NEXT_PUBLIC_DOMAIN + "/api/page-products/findLevelPage",
      {
        level: firstCategoryItem.route,
      }
    );

    const { data: page } = await axios.post<PageProductsModel>(
      process.env.NEXT_PUBLIC_DOMAIN + "/api/page-products/getPage",
      { route: `/${params.type}/${params.alias}` }
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
        firstMenu,
        secondMenu,
        page,
        products,
      },
    };
  } catch {
    return {
      notFound: true,
    };
  }
};

interface PageProductsProps extends Record<string, unknown> {
  firstMenu: IMenuLevelItem[];
  secondMenu: IMenuLevelItem[];
  page: PageProductsModel;
  products: ProductModel[];
}
