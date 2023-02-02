import { LayoutProps } from "./layout.props";
import { Header } from "./Header/header";
import { Footer } from "./Footer/footer";
import { Subscribe } from "./Subscribe/Subscribe";
import { FunctionComponent } from "react";

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <Header />
      <div>{children}</div>
      <Subscribe />
      <Footer />
    </>
  );
};

export const WithLayout = <T extends Record<string, unknown>>(
  Component: FunctionComponent<T>
) => {
  return function WithLayoutComponent(props: T): JSX.Element {
    return (
      <Layout>
        <Component {...props} />
      </Layout>
    );
  };
};
