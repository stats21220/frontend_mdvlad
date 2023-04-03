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

  const opened = (id: number) => {
    const newMenu =
      menu &&
      menu.map((m) => {
        if ((m._id === id && m.isOpened === undefined) || false) {
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
    const firstMenu = menu && menu.find((m) => m._id === 0);
    return (
      <>
        {firstMenu &&
          firstMenu?.pages.map((f) => {
            return (
              <div key={f.title}>
                <div
                  className={cn(styles.firstCategoryItem, {
                    [styles.firstCategoryItemActive]:
                      firstCategory === f.pageId,
                  })}
                >
                  <Link href={`/catalog/${f.alias}/${f.pageId}`} scroll={false}>
                    <div className={styles.link}>
                      <span>{f.title}</span>
                    </div>
                  </Link>
                  <div
                    className={cn(styles.icon)}
                    onClick={() => opened(f.pageId)}
                  >
                    <IArrow
                      className={cn({
                        [styles.iconOpenActive]: true,
                      })}
                    />
                  </div>
                </div>
                {buildSecondLevelMenu(f.pageId)}
              </div>
            );
          })}
      </>
    );
  };

  const buildSecondLevelMenu = (pageId: number) => {
    return menu.map((m) => {
      if (m._id === pageId) {
        return (
          <div
            key={m._id}
            className={cn(styles.secondCategory, {
              [styles.secondCategoryActive]: m.isOpened,
            })}
          >
            {m.pages.map((s) => (
              <Link
                key={s.pageId}
                href={`/catalog/${s.alias}/${s.pageId}`}
                scroll={false}
              >
                <div
                  className={cn(styles.secondCategoryItem, {
                    [styles.secondCategoryItemActive]:
                      secondCategory === s.pageId,
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
