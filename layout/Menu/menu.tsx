import styles from "./menu.module.css";
import cn from "classnames";
import { AppContext } from "@/context/app.context";
import { MenuModel } from "@/interfaces/menu.interface";
import Link from "next/link";
import { useContext, useEffect } from "react";
import { useRouter } from "next/router";
import IArrow from "./arrow.svg";

export const Menu = () => {
  const { menu, setMenu, firstLevelMenu } = useContext(AppContext);

  useEffect(() => {
    setMenu &&
      setMenu(
        menu &&
          menu.map((m) => {
            if (m._id.split("/").includes(currentRoute)) {
              m.isOpened = true;
            }
            return m;
          })
      );
  }, []);

  const openSecondLevel = (secondCategory: string, edit?: string) => {
    setMenu &&
      setMenu(
        menu &&
          menu.map((m) => {
            if (m._id === secondCategory) {
              edit ? (m.isOpened = !m.isOpened) : (m.isOpened = true);
            }
            return m;
          })
      );
  };

  const routerPath = useRouter();

  const currentRoute = routerPath.asPath.split("/")[2];

  const firstLevel = menu && menu.find((f) => f._id === firstLevelMenu);

  const buildFirstMenu = () => {
    return (
      <div className={cn(styles.firstCategory)}>
        {firstLevel &&
          firstLevel.pages.map((first) => {
            const secondLevel = menu && menu.find((f) => f._id === first.route);
            return (
              <div key={first.alias}>
                <div
                  className={cn(styles.firstCategoryItem, {
                    [styles.firstCategoryItemActive]:
                      secondLevel?.isOpened || currentRoute === first.alias,
                    //   [styles.firstCategoryItemActive]: !!first.isOpened,
                  })}
                >
                  <Link href={"/page-products/" + first.alias}>
                    <div
                      className={styles.link}
                      onClick={() => openSecondLevel(first.route)}
                    >
                      <span>{first.title}</span>
                    </div>
                  </Link>
                  <div
                    className={styles.iconOpen}
                    onClick={() => openSecondLevel(first.route, "edit")}
                  >
                    <span
                      className={cn({
                        [styles.iconOpenActive]: secondLevel?.isOpened,
                      })}
                    >
                      <IArrow />
                    </span>
                  </div>
                </div>
                {buildSecondLevel(secondLevel)}
              </div>
            );
          })}
      </div>
    );
  };

  const buildSecondLevel = (secondLevel?: MenuModel) => {
    // const secondLevel = menu && menu.find((f) => f._id === route);

    return (
      <div
        className={cn(styles.secondCategory, {
          [styles.secondCategoryActive]: secondLevel?.isOpened,
        })}
      >
        {secondLevel &&
          secondLevel.pages.map((seccond) => (
            <Link key={seccond.alias} href={"/page-products/" + seccond.alias}>
              <div
                className={cn(styles.secondCategoryItem, {
                  [styles.secondCategoryItemActive]:
                    seccond.alias === currentRoute,
                })}
              >
                <span>{seccond.title}</span>
              </div>
            </Link>
          ))}
      </div>
    );
  };

  return <div className={styles.menu}>{buildFirstMenu()}</div>;
};
