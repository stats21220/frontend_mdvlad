import { Htag, Ptag } from "../../components";
import ICheck from "./check.svg";
import styles from "./lawyer.module.css";
import { ILawyer } from "./lawyer.props";
import cn from "classnames";
import IPhone from "./phone.svg";
import IMail from "./mail.svg";
import Link from "next/link";

export const Lawyer = ({ className, ...props }: ILawyer) => {
  return (
    <section className={cn(className)} {...props}>
      <Htag className={styles.title} color="black" size="m" tag="h2">
        Работа с юридическими лицами
      </Htag>
      <Ptag className={styles.descr} size="m" color="black">
        «Мир Дерева » высоко ценит корпоративных клиентов и предоставляет им
        особые условия:
      </Ptag>
      <ul className={styles.list}>
        <li className={styles.listItem}>
          <ICheck />
          <span>индивидуальное обслуживание;</span>
        </li>
        <li className={styles.listItem}>
          <ICheck />
          <span>возможность оплаты по безналичному или наличному расчету;</span>
        </li>
        <li className={styles.listItem}>
          <ICheck />
          <span>оформление пакета необходимых документов;</span>
        </li>
        <li className={styles.listItem}>
          <ICheck />
          <span>оформление заказа по телефону с оплатой при получении;</span>
        </li>
        <li className={styles.listItem}>
          <ICheck />
          <span>сборка заказа по звонку;</span>
        </li>
        <li className={styles.listItem}>
          <ICheck />
          <span>резерв заказа до 72 часов;</span>
        </li>
        <li className={styles.listItem}>
          <ICheck />
          <span>оформление заказа онлайн на сайте мир дерева.</span>
        </li>
      </ul>
      <div className={styles.employee}>
        <div className={styles.photo}>photo</div>
        <div className={styles.info}>
          <span className={styles.name}>Морозова Елена Алексеевна</span>
          <span className={styles.infoEmployee}>
            (Ведущий менеджер по работе с ключевыми клиентами)
          </span>
          <div className={styles.wrapper_link}>
            <Link className={styles.phone} href="tel:8 (4922) 22-21-02">
              <IPhone />
              <span>8 (4922) 22-21-02 (доб. 111)</span>
            </Link>
            <Link href="mailto:elena.m@mdvlad.ru" className={styles.mail}>
              <IMail />
              <span>elena.m@mdvlad.ru</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
