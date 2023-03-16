import styles from "./menu.module.css";
import cn from "classnames";
import Link from "next/link";
import { useContext, useEffect } from "react";
import { useRouter } from "next/router";
import IArrow from "./arrow.svg";
import { AppContext } from "@/context/app.context";
import { IMenu } from "./menu.props";

export const Menu = ({ className }: IMenu) => {
  const { menu, setMenu } = useContext(AppContext);

  const router = useRouter();
  const route = router.asPath.split("/")[1];

  const current = menu.find((c) => c._id === route);

  console.log(current);

  const newMenu = menu.map((m) => {
    if (m._id === current?.firstLevel) {
      m.isOpened = true;
    }
    return m;
  });

  useEffect(() => setMenu && setMenu(newMenu), []);

  const openSecondLevel = (alias: string) => {
    const openMenu = menu.map((o) => {
      if (o._id === alias) {
        o.isOpened = !o.isOpened;
      }
      return o;
    });
    setMenu && setMenu(openMenu);
  };

  const buildFirstLevelMenu = () => {
    return menu.map((m) => {
      if (m._id === "/") {
        return (
          <div key={m._id} className={cn(styles.firstCategory)}>
            {m.pages.map((f) => {
              const isOpen = menu.find((a) => a._id === f.alias)?.isOpened;
              return (
                <div key={f.alias}>
                  <div
                    className={cn(styles.firstCategoryItem, {
                      [styles.firstCategoryItemActive]: isOpen,
                    })}
                  >
                    <Link href={`/${f.alias}`} scroll={false}>
                      <div className={styles.link}>
                        <span>{f.title}</span>
                      </div>
                    </Link>
                    <div
                      className={cn(styles.icon)}
                      onClick={() => openSecondLevel(f.alias)}
                    >
                      <IArrow
                        className={cn({
                          [styles.iconOpenActive]: isOpen,
                        })}
                      />
                    </div>
                  </div>
                  {buildSecondLevelMenu(f.alias)}
                </div>
              );
            })}
          </div>
        );
      }
    });
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
            {m &&
              m.pages.map((second) => {
                return (
                  <Link
                    key={second.alias}
                    href={`/${second.alias}`}
                    scroll={false}
                  >
                    <div
                      className={cn(styles.secondCategoryItem, {
                        [styles.secondCategoryItemActive]: menu.find(
                          (m) => m._id === route
                        )?.isOpened,
                      })}
                    >
                      <span>{second.title}</span>
                    </div>
                  </Link>
                );
              })}
          </div>
        );
      }
    });
  };

  return (
    <div className={cn(styles.menu, className)}>{buildFirstLevelMenu()}</div>
  );
};
