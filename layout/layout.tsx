import { LayoutProps } from "./layout.props";
import { Header } from "./Header/header";
import { Footer } from "./Footer/footer";
import { Subscribe } from "./Subscribe/Subscribe";
import { FunctionComponent } from "react";
import styles from "./layout.module.css";

export const Layout = ({ children }: LayoutProps) => {
  console.log("hi");
  return (
    <div className={styles.wrapper}>
      <Header className={styles.header} />
      <div className={styles.body}>{children}</div>
      <Subscribe className={styles.subscribe} />
      <div className={styles.feedback}>FEEDBACK</div>
      <Footer className={styles.footer} />
    </div>
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
