import Link from "next/link";
import { NavProps } from "./nav.props";
import IUser from "./user.svg";
import IEnter from "./enter.svg";
import cn from "classnames";
import styles from "./nav.module.css";

export const Nav = ({ className }: NavProps) => {
  return (
    <nav className={cn(styles.nav, className)}>
      <div className={styles.wrapper_nav}>
        <nav className={styles.wrapper_nav_item}>
          <Link href="/company" className={styles.nav_item}>
            <span>О компании</span>
          </Link>
          <div className={cn(styles.dropdown)}>
            <button className={styles.dropbtn}>
              <span>Покупателям</span>
            </button>
            <div className={styles.dropdown_content}>
              <Link href={"/lawyer"}>
                <span>Работа с юр.лицами</span>
              </Link>
              <Link href={"/privacy"}>
                <span>Политика конфиденциальности</span>
              </Link>
            </div>
          </div>
          <Link href={"/payment_and_delivery"} className={styles.nav_item}>
            <span>Оплата и доставка</span>
          </Link>
          <Link href={"/supply"} className={styles.nav_item}>
            <span>Поставщикам</span>
          </Link>
          <Link href={"/contacts"} className={styles.nav_item}>
            <span>Контакты</span>
          </Link>
          <Link href={"/"} className={cn(styles.promo, styles.nav_item)}>
            <span>Акции</span>
          </Link>
        </nav>
        <div className={styles.wrapper_user}>
          <div className={styles.wrapper_user_item}>
            <IUser />
            <span>Регистрация</span>
          </div>
          <div className={styles.wrapper_user_item}>
            <IEnter />
            <span>Вход</span>
          </div>
        </div>
      </div>
    </nav>
  );
};
