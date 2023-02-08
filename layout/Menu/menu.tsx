import styles from "./menu.module.css";
import cn from "classnames";
import { AppContext } from "@/context/app.context";
import { IMenuLevelItem } from "@/interfaces/menu.interface";
import Link from "next/link";
import { useContext } from "react";

export const Menu = () => {
  const { menu, setMenu, firstLevelMenu, firstCategoryMenu } =
    useContext(AppContext);

  const firstLevel: IMenuLevelItem[] =
    menu?.find((f) => f._id === firstLevelMenu)?.pages || [];

  const buildFirstMenu = () => {
    return (
      <div className={cn(styles.firstCategory)}>
        {firstLevel?.map((first) => (
          <div>
            <Link key={first.alias} href={"/page-products/" + first.alias}>
              <div
                className={cn(styles.firstCategoryItem, {
                  [styles.firstCategoryItemActive]:
                    first.alias === firstCategoryMenu,
                  //   [styles.firstCategoryItemActive]: !!first.isOpened,
                })}
              >
                <span>{first.title}</span>
              </div>
            </Link>
            {first.alias === firstCategoryMenu && buildSecondLevel(first.route)}
          </div>
        ))}
      </div>
    );
  };

  const buildSecondLevel = (route: string) => {
    const secondLevel = menu?.find((f) => f._id === route)?.pages || [];
    return (
      <div className={styles.secondCategory}>
        {secondLevel.map((seccond) => (
          <Link key={seccond.alias} href={"/page-products/" + seccond.alias}>
            <div className={styles.secondCategoryItem}>
              <span>{seccond.title}</span>
            </div>
          </Link>
        ))}
      </div>
    );
  };

  return <div className={styles.menu}>{buildFirstMenu()}</div>;
};
