import { IFooterProps } from "./footer.props";
import styles from "./footer.module.css";
import cn from "classnames";
import { format } from "date-fns";
import { Card, Htag, Ptag } from "../../components";
import IPhone from "./phone.svg";
import IClock from "./clock.svg";
import IMail from "./mail.svg";
import IAddress from "./address.svg";
import IVk from "./vk.svg";
import IYoutube from "./youtube.svg";
import Link from "next/link";

export const Footer = ({ className, ...props }: IFooterProps) => {
  return (
    <footer className={cn(styles.footer, className)} {...props}>
      <div className={cn(styles.about_company)}>
        <Htag className={styles.title} tag="h2" size="s" color="black">
          О КОМПАНИИ
        </Htag>
        <ul className={styles.list}>
          <li className={styles.listItem}>
            <Link href="#">О магазине</Link>
          </li>
          <li className={styles.listItem}>
            <Link href="#">Юридическим лицам</Link>
          </li>
          <li className={styles.listItem}>
            <Link href="#">Поставщикам</Link>
          </li>
          <li className={styles.listItem}>
            <Link href="#">Оплата и доставка</Link>
          </li>
          <li className={styles.listItem}>
            <Link href="#">Условия возврата</Link>
          </li>
          <li className={styles.listItem}>
            <Link href="#">Акции</Link>
          </li>
          <li className={styles.listItem}>
            <Link href="#">Программа лояльности</Link>
          </li>
        </ul>
      </div>
      <div className={cn(styles.catalog)}>
        <Htag className={styles.title} tag="h2" size="s" color="black">
          КАТАЛОГ
        </Htag>
        <ul className={styles.list}>
          <li className={styles.listItem}>
            <Link href="#">Пиломатериалы</Link>
          </li>
          <li className={styles.listItem}>
            <Link href="#">Стройматериалы</Link>
          </li>
          <li className={styles.listItem}>
            <Link href="#">Банный магазин</Link>
          </li>
          <li className={styles.listItem}>
            <Link href="#">Сопутствующие товары</Link>
          </li>
          <li className={styles.listItem}>
            <Link href="#">Дверные и окнные блоки</Link>
          </li>
          <li className={styles.listItem}>
            <Link href="#">Лакокрасочные материалы</Link>
          </li>
          <li className={styles.listItem}>
            <Link href="#">Назначение</Link>
          </li>
          <li className={styles.listItem}>
            <Link className={styles.sale} href="#">
              РАСПРОДАЖА
            </Link>
          </li>
        </ul>
      </div>
      <div className={cn(styles.contacts)}>
        <Htag className={styles.title} tag="h2" size="s" color="black">
          КОНТАКТЫ
        </Htag>
        <ul className={styles.list}>
          <li className={styles.listItem}>
            <Link className={styles.phone} href="tel:8 (4922) 22-21-02">
              <IPhone />
              <span>8 (4922) 22-21-02</span>
            </Link>
          </li>
          <li className={styles.listItem}>
            <span className={styles.time}>
              <IClock />
              <span>
                Пн. - Сб.: c 8:00 до 18:00
                <br />
                Вс.: c 8:00 до 15:00
              </span>
            </span>
          </li>
          <li className={styles.listItem}>
            <Link href="mailto:info@mdvlad.ru" className={styles.mail}>
              <IMail />
              <span>info@mdvlad.ru</span>
            </Link>
          </li>
          <li className={styles.listItem}>
            <Link href="#" className={styles.address}>
              <IAddress className={styles.filled} />
              <span>г.Владимир, ул. Куйбышева, 16а</span>
            </Link>
          </li>
        </ul>
      </div>
      <Card className={styles.map}>
        <iframe
          src="https://yandex.ru/map-widget/v1/?z=17&ol=biz&oid=1288897412"
          width="100%"
          height="100%"
          frameBorder="0"
        ></iframe>
      </Card>
      <div className={styles.footer_bottom}>
        <div className={styles.footer_bottom_element}>
          <div>
            <Link
              href="#"
              className={styles.footer_bottom_link}
              target="_blank"
            >
              <span>Политика конфиденциальность</span>
            </Link>
            <Link href="#" className={styles.footer_bottom_link}>
              <span>Карта сайта</span>
            </Link>
          </div>
        </div>
        <div className={cn(styles.line, styles.footer_bottom_element)}></div>
        <div className={styles.footer_bottom_element}>
          <div>
            <Ptag size="s" color="black">
              © 2012 - {format(new Date(), "yyyy")} ТД Мир Дерева Владимир
              <br />
              Публикация информации с сайта mdvlad.ru без разрешения запрещена.{" "}
              <br />
              Информация на сайте mdvlad.ru не является публичной офертой.
            </Ptag>
          </div>
          <div className={styles.icon}>
            <IVk />
            <IYoutube />
          </div>
        </div>
      </div>
    </footer>
  );
};
