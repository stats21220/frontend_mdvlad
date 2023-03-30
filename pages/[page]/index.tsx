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

function PageProducts({
  products,
  page,
  product,
}: PageProductsProps): JSX.Element {
  return (
    <>
      <PageProductsComponent
        page={page}
        products={products}
        product={product}
      />
    </>
  );
}

export default WithLayoutPageProductsComponent(PageProducts);

export const getStaticPaths: GetStaticPaths = async () => {
  const { data: aliases } = await axios.get<string[]>(API.pageProduct.getPaths);
  const { data: aliasesProducts } = await axios.get<{ alias: string }[]>(
    API.product.findProductsPaths
  );

  return {
    paths: [
      ...aliases.map((a) => "/" + a),
      ...aliasesProducts.map((a) => "/" + a.alias),
    ],
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
    let firstCategory = "";
    let secondCategory = "";

    const { data: page } = await axios.get<PageProductsModel>(
      API.pageProduct.getPage + params.page
    );

    if (page._id !== "0") {
      firstCategory = page.categories.first.alias;
      secondCategory =
        (page.categories.second?.alias && page.categories.second.alias) || "";
    }

    const { data: product } = await axios.get<ProductModel>(
      API.product.getProduct + params.page
    );

    if (product._id !== "0") {
      firstCategory = product.categories.first.alias;
      secondCategory =
        (product.categories.second?.alias && product.categories.second.alias) ||
        "";
    }
    const { data: menu } = await axios.post<MenuModel[]>(
      API.pageProduct.getMenu
    );

    // const secondCategory = page.categories.second?.alias;

    const { data: products } = await axios.post<ProductsModel[]>(
      API.product.findProducts,
      {
        alias: [params.page],
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
        product,
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
  firstCategory: string;
  secondCategory: string;
  page: PageProductsModel;
  products: ProductsModel[];
  product: ProductModel;
}
