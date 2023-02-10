import styles from "./menu.module.css";
import cn from "classnames";
import { AppContext } from "@/context/app.context";
import { IMenuLevelItem } from "@/interfaces/menu.interface";
import Link from "next/link";
import { useContext, useEffect } from "react";
import { useRouter } from "next/router";
import IArrow from "./arrow.svg";

export const Menu = () => {
  const { firstMenu, secondMenu, setMenu } = useContext(AppContext);

  console.log(secondMenu);

  // useEffect(() => {
  //   setMenu &&
  //     setMenu(
  //       firstMenu &&
  //         firstMenu.map((m) => {
  //           if (m.alias === currentRoute) {
  //             m.isOpened = true;
  //           }
  //           return m;
  //         })
  //     );
  // }, []);

  const openSecondLevel = (secondCategory: string, edit?: string) => {
    setMenu &&
      setMenu(
        secondMenu &&
          secondMenu.map((m) => {
            if (m.alias === secondCategory) {
              edit ? (m.isOpened = !m.isOpened) : (m.isOpened = true);
            }
            return m;
          })
      );
  };

  const routerPath = useRouter();

  const currentRoute = routerPath.asPath.split("/")[2];

  const buildFirstMenu = () => {
    return (
      <div className={cn(styles.firstCategory)}>
        {firstMenu &&
          firstMenu.map((first) => {
            return (
              <div key={first.alias}>
                <div
                  className={cn(styles.firstCategoryItem, {
                    [styles.firstCategoryItemActive]:
                      first.isOpened || currentRoute === first.alias,
                    //   [styles.firstCategoryItemActive]: !!first.isOpened,
                  })}
                >
                  <Link href={first.route}>
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
                        [styles.iconOpenActive]: first?.isOpened,
                      })}
                    >
                      <IArrow />
                    </span>
                  </div>
                </div>
                {secondMenu && buildSecondLevel(secondMenu)}
              </div>
            );
          })}
      </div>
    );
  };

  const buildSecondLevel = (secondMenu: IMenuLevelItem[]) => {
    return (
      <div
        className={cn(styles.secondCategory, {
          [styles.secondCategoryActive]: secondMenu,
        })}
      >
        {secondMenu &&
          secondMenu.map((second) => (
            <Link key={second.alias} href={second.route}>
              <div
                className={cn(styles.secondCategoryItem, {
                  [styles.secondCategoryItemActive]:
                    second.alias === currentRoute,
                })}
              >
                <span>{second.title}</span>
              </div>
            </Link>
          ))}
      </div>
    );
  };

  return <div className={styles.menu}>{buildFirstMenu()}</div>;
};
