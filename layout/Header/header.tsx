import { HeaderProps } from "./header.props";
import styles from "./header.module.css";
import ILogo from "./logo.svg";
import Link from "next/link";
import { Ptag } from "../../components";
import IPhone from "./phone.svg";
import ISale from "./sale.svg";
import cn from "classnames";
import IMenu from "./menu.svg";
import IBasket from "./basket.svg";
import IHeart from "./heart.svg";
import IRefresch from "./refresh.svg";

export const Header = ({ className, ...props }: HeaderProps) => {
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
            <input type="text" />
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
          <div className={styles.menu_catalog}>
            <IMenu />
            <span>Весь каталог</span>
          </div>
          <div className={styles.menu_item}>
            <span>Программа лояльности</span>
          </div>
          <div className={styles.menu_item}>
            <span>Услуги</span>
          </div>
          <div className={styles.menu_item}>
            <span>Оплата и доставка</span>
          </div>
          <div className={styles.menu_item}>
            <span>Новости и акции</span>
          </div>
          <div className={styles.menu_sale}>
            <ISale />
            <span>Распрадажа</span>
          </div>
        </div>
      </div>
    </header>
  );
};
