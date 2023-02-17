import styles from "./menu.module.css";
import cn from "classnames";
import Link from "next/link";
import { useContext } from "react";
import { useRouter } from "next/router";

import { AppContext } from "@/context/app.context";
import { IMenu } from "./menu.props";

export const Menu = ({ className }: IMenu) => {
  const { menu } = useContext(AppContext);

  const router = useRouter();

  const firstRoute = `/${router.asPath.split("/")[1]}`;
  const secondRoute = `/${router.asPath.split("/")[1]}/${
    router.asPath.split("/")[2]
  }`;

  const buildFirstMenu = () => {
    const firstMenu = menu && menu.find((f) => f._id === "/");

    return (
      <div className={cn(styles.firstCategory)}>
        {firstMenu &&
          firstMenu.pages.map((first) => {
            return (
              <div key={first.alias}>
                <div
                  className={cn(styles.firstCategoryItem, {
                    [styles.firstCategoryItemActive]:
                      !!first.isOpened || firstRoute === first.route,
                  })}
                >
                  <Link href={first.route}>
                    <div className={styles.link}>
                      <span>{first.title}</span>
                    </div>
                  </Link>
                </div>
                {buildSecondLevel(first.route)}
              </div>
            );
          })}
      </div>
    );
  };

  const buildSecondLevel = (secondId: string) => {
    const secondMenu = menu.find((s) => s._id === secondId);
    return (
      <div
        className={cn(styles.secondCategory, {
          [styles.secondCategoryActive]:
            secondMenu?.isOpened ||
            (secondMenu && secondMenu._id === firstRoute),
        })}
      >
        {secondMenu &&
          secondMenu.pages.map((second) => (
            <Link key={second.alias} href={second.route}>
              <div
                className={cn(styles.secondCategoryItem, {
                  [styles.secondCategoryItemActive]:
                    second.route === secondRoute,
                })}
              >
                <span>{second.title}</span>
              </div>
            </Link>
          ))}
      </div>
    );
  };

  return <div className={cn(styles.menu, className)}>{buildFirstMenu()}</div>;
};
