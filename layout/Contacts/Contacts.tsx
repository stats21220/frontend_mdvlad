import { Htag } from "../../components";
import { IContacts } from "./Contacts.props";
import styles from "./Contacts.module.css";
import IAddress from "./address.svg";
import IClock from "./clock.svg";
import IMail from "./mail.svg";
import IPhone from "./phone.svg";
import IViber from "./viber.svg";
import IWhatsapp from "./whatsApp.svg";
import IVk from "./vk.svg";
import IYoutube from "./youtube.svg";
import Link from "next/link";

export const Contacts = ({}: IContacts) => {
    return (
        <div>
            <Htag className={styles.title} tag="h2" color="black">Контакты</Htag>
            <div className={styles.wrapper}>
                <div className={styles.item}>
                    <IAddress/>
                    <div className={styles.address}>
                        <span className={styles.subTitle}>Адрес</span>
                        <span>г.Владимир, ул. Куйбышева, 16а</span>
                    </div>
                </div>
                <div className={styles.item}>
                    <IClock/>
                    <div className={styles.clock}>
                        <span className={styles.subTitle}>Режим работы</span>
                        <span>Пн. - Сб.: c 8:00 до 17:00</span>
                        <span>Вс.: c 8:00 до 15:00</span>
                    </div>
                </div>
                <div className={styles.item}>
                    <IPhone/>
                    <div className={styles.phone}>
                        <span className={styles.subTitle}>Телефон</span>
                        <Link className={styles.phone} href="tel:8 (4922) 22-21-02"><span>8 (4922) 22-21-02</span></Link>
                        <Link className={styles.phone} href="tel:8 (909) 273-84-59"><span>8 (909) 273-84-59</span></Link>
                    </div>
                </div>
                <div className={styles.item}>
                    <IMail/>
                    <div className={styles.address}>
                        <span className={styles.subTitle}>Электронная почта</span>
                        <Link href="mailto:info@mdvlad.ru" className={styles.mail}><span>info@mdvlad.ru</span></Link>
                    </div>
                </div>
                <div className={styles.messagers}>
                    <Htag className={styles.title} tag="h3" color="black">Мы в месседжерах</Htag>
                    <div className={styles.messagerItems}>
                        <IViber/>
                        <IWhatsapp/>
                        <IVk/>
                        <IYoutube/>
                    </div>
                </div>
            </div>
        </div>
    )
}