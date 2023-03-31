import { Htag, Ptag } from "../../components";
import IPhone from "./phone.svg";
import IMail from "./mail.svg";
import Link from "next/link";
import styles from "./Supply.module.css";

export const Supply = () => {
  return (
    <div className={styles.supply}>
      <Htag className={styles.title} tag="h2" size="m" color="black">
        Поставщикам
      </Htag>
      <Ptag className={styles.descr} size="m" color="black">
        В данном разделе мы предоставляем Вам контактные данные менеджеров
        отдела закупок ТК Мир Дерева во Владимире.
      </Ptag>
      <div className={styles.phone}>
        <IPhone />
        <Link href="tel:8 (4922) 22-21-02">
          <span>8 (4922) 22-21-02</span>
        </Link>{" "}
        <span>(доб 135,138,156)</span>
      </div>
      <div className={styles.mail}>
        <IMail />
        <Link href="mailto:info@mdvlad.ru">
          <span>info@mdvlad.ru</span>
        </Link>
      </div>
    </div>
  );
};
