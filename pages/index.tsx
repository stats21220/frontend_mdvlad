import { API } from "@/helpers/api";
import { IHomeCategory } from "@/interfaces/menu.interface";
import { WithLayout } from "@/layout/layout";
import { HomeComponent } from "@/page-components/Home-component/home-component";
import { IHomeProps } from "@/page-components/Home-component/home-component.props";
import axios from "axios";
import { GetStaticProps } from "next";

function Home({ menu }: HomeProps): JSX.Element {
  return <HomeComponent menu={menu} />;
}
export default WithLayout(Home);

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
  try {
    const pilomateriali = "pilomateriali";
    const { data: menu } = await axios.get<IHomeCategory[]>(
      `${API.pageProduct.getMenu}/${pilomateriali}`
    );

    return {
      props: {
        menu,
      },
    };
  } catch {
    return {
      notFound: true,
    };
  }
};

interface HomeProps extends Record<string, unknown> {
  menu: IHomeCategory[];
}
