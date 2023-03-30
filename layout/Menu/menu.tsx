import styles from "./menu.module.css";
import cn from "classnames";
import Link from "next/link";
import { useContext, useEffect } from "react";
// import { useRouter } from "next/router";
import IArrow from "./arrow.svg";
import { AppContext } from "@/context/app.context";
import { IMenu } from "./menu.props";

export const Menu = ({ className }: IMenu) => {
  const { menu, firstCategory, secondCategory, setMenu } =
    useContext(AppContext);

  // const router = useRouter();
  // const route = router.asPath.split("/")[1];

  const opened = (alias: string) => {
    const newMenu =
      menu &&
      menu.map((m) => {
        if (m._id === alias) {
          m.isOpened = !m.isOpened;
        }
        return m;
      });
    setMenu && setMenu(newMenu);
  };

  useEffect(() => {
    opened(firstCategory);
  }, [firstCategory]);

  const buildFirstLevelMenu = () => {
    const firstMenu = menu && menu.find((m) => m._id === "/");
    return (
      <>
        {firstMenu &&
          firstMenu?.pages.map((f) => {
            return (
              <div key={f.title}>
                <div
                  className={cn(styles.firstCategoryItem, {
                    [styles.firstCategoryItemActive]: firstCategory === f.alias,
                  })}
                >
                  <Link href={`/${f.alias}`} scroll={false}>
                    <div className={styles.link}>
                      <span>{f.title}</span>
                    </div>
                  </Link>
                  <div
                    className={cn(styles.icon)}
                    onClick={() => opened(f.alias)}
                  >
                    <IArrow
                      className={cn({
                        [styles.iconOpenActive]: true,
                      })}
                    />
                  </div>
                </div>
                {buildSecondLevelMenu(f.alias)}
              </div>
            );
          })}
      </>
    );
  };

  const buildSecondLevelMenu = (alias: string) => {
    return menu.map((m) => {
      if (m._id === alias) {
        return (
          <div
            key={m._id}
            className={cn(styles.secondCategory, {
              [styles.secondCategoryActive]: m.isOpened,
            })}
          >
            {m.pages.map((s) => (
              <Link key={s.title} href={`/${s.alias}`} scroll={false}>
                <div
                  className={cn(styles.secondCategoryItem, {
                    [styles.secondCategoryItemActive]:
                      secondCategory === s.alias,
                  })}
                >
                  <span>{s.title}</span>
                </div>
              </Link>
            ))}
          </div>
        );
      }
      return <></>;
    });
  };

  return (
    <div className={cn(className, styles.firstCategory)}>
      {buildFirstLevelMenu()}
    </div>
  );
};
