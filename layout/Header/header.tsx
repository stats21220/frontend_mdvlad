import { HeaderProps } from "./header.props";
import styles from "./header.module.css";
import ILogo from "./logo.svg";
import Link from "next/link";
import { Ptag, Search } from "../../components";
import IPhone from "./phone.svg";
import ISale from "./sale.svg";
import cn from "classnames";
import IMenu from "./menu.svg";
import IBasket from "./basket.svg";
import IHeart from "./heart.svg";
import IRefresch from "./refresh.svg";
import { AppContext } from "@/context/app.context";
import { useContext } from "react";
import { primaryMenuDefault } from "@/helpers/helpers";
import { useRouter } from "next/router";

export const Header = ({ className, ...props }: HeaderProps) => {
  const router = useRouter();
  const { menu, firstCategory, setMenu } = useContext(AppContext);
  let PrimaryMenu = menu && menu.find((m) => m._id === 0);

  if (!PrimaryMenu) {
    PrimaryMenu = primaryMenuDefault;
  }

  // if (PrimaryMenu)
  return (
    <header className={cn(styles.header, className)} {...props}>
      <div className={styles.block_1}>
        <div className={styles.block_1_item}>
          <div className={styles.logo}>
            <Link href={"/"}>
              <ILogo />
            </Link>
            <Ptag size="s">ПРОДАЖА ПИЛОМАТЕРИАЛОВ И СТРОЙТОВАРОВ</Ptag>
          </div>
          <div className={styles.search}>
            <Search />
          </div>
          <div className={styles.phone}>
            <div>
              <IPhone />
            </div>
            <div>
              <Link href="tel:8 (4922) 22-21-02">
                <span>8 (4922) 22-21-02</span>
              </Link>
            </div>
          </div>
          <div className={styles.basket_wrapper}>
            <Link href="/" className={styles.basket_icon}>
              <IHeart />
            </Link>
            <Link href="/" className={styles.basket_icon}>
              <IRefresch />
            </Link>
            <div className={styles.basket}>
              <IBasket />
              <div className={styles.basket_order}>
                <span>Корзина</span>
                <span>0.00 руб</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.block_2}>
        <div className={styles.block_2_item}>
          {PrimaryMenu?.pages.map((m) => (
            <Link
              key={m.pageId}
              className={cn(styles.menu_catalog, {
                [styles.menu_catalog_active]: m.pageId === firstCategory,
              })}
              href={`/catalog/${m.alias}/${m.pageId}`}
            >
              <div>
                <div>
                  <span>{m.title}</span>
                </div>
              </div>
            </Link>
          ))}
          <Link className={styles.menu_sale} href={""}>
            <ISale />
            <span>РАСПРАДАЖА</span>
          </Link>
        </div>
      </div>
    </header>
  );
};
