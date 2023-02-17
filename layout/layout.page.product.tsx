import { LayoutProps } from "./layout.props";
import { Header } from "./Header/header";
import { Footer } from "./Footer/footer";
import { Subscribe } from "./Subscribe/Subscribe";
import { FunctionComponent, PropsWithChildren } from "react";
import styles from "./layout.module.css";
import { Feedback } from "./Feedback/feedback";
import { Nav } from "./Nav/nav";
import { AppContextProvider, IAppContext } from "@/context/app.context";

const LayoutPageProducts = ({ children }: LayoutProps) => {
  return (
    <div className={styles.wrapper}>
      <Nav className={styles.nav} />
      <Header className={styles.header} />
      <div className={styles.body}>{children}</div>
      <Subscribe className={styles.subscribe} />
      <Feedback className={styles.feedback} />
      <Footer className={styles.footer} />
    </div>
  );
};

export const WithLayoutPageProductsComponent = <
  T extends Record<string, unknown> & PropsWithChildren<IAppContext>
>(
  Component: FunctionComponent<T>
) => {
  return function WithLayoutComponent(props: T): JSX.Element {
    return (
      <AppContextProvider menu={props.menu}>
        <LayoutPageProducts>
          <Component {...props} />
        </LayoutPageProducts>
      </AppContextProvider>
    );
  };
};
