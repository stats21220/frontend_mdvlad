import { WithLayoutPageProductsComponent } from "@/layout/layout.page.product";
import { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from "next";
import axios from "axios";
import { MenuModel } from "@/interfaces/menu.interface";
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
  const paths: string[] = [];

  const { data: menu } = await axios.post<MenuModel[]>(
    process.env.NEXT_PUBLIC_DOMAIN + "/api/page-products/find"
  );

  for (const s of menu) {
    if (s._id.split("/").length == 1) {
      paths.push(s._id);
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

    const secondCategoryItem = menu.find(
      (s) => s._id === `/${params.type}/${params.second}`
    );

    if (!secondCategoryItem) {
      return {
        notFound: true,
      };
    }

    const { data: page } = await axios.post<PageProductsModel>(
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
