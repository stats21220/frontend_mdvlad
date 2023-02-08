import styles from "./paymentAndDelivery.module.css";
import { Card, Htag, Ptag } from "../../components";
import IMasterCard from "./masterCard.svg";
import IVisa from "./visa.svg";
import IMir from "./mir.svg";
import IJcb from "./jcb.svg";
import cn from "classnames";

export const PaymentAndDelivery = () => {
  return (
    <div className={styles.wrapper}>
      <Htag className={styles.title} tag="h2" size="m" color="black">
        Оплата и доставка
      </Htag>
      <div className={styles.paymeent}>
        <Htag tag="h3" color="black" size="s">
          Оплата товаров и услуг
        </Htag>
        <div>
          <span>
            Произвести оплату за покупки вы можете одним из следующих способов:
          </span>
          <ul className={styles.list}>
            <li>
              <span>
                1. Наличными при получении товара (доставка автотранспортом).
              </span>
            </li>
            <li>
              <span>
                2. Наличными или безналичным способом в розничном магазине ТК
                «Мир дерева» во Владимире.
              </span>
            </li>
            <li>
              <span>
                3. Безналичным способом на сайте с помощью банковской карты.
              </span>
            </li>
          </ul>
        </div>
        <Ptag className={styles.descr} color="black">
          Для выбора оплаты товара с помощью банковской карты на странице заказа
          необходимо нажать кнопку "Безналичная оплата картой". Оплата
          происходит через ПАО СБЕРБАНК с использованием банковских карт
          следующих платёжных систем:
        </Ptag>
        <div className={styles.mastercard}>
          <IMasterCard />
          <span>Mastercard Worldwide</span>
        </div>
        <div className={styles.visa}>
          <IVisa />
          <span>VISA International</span>
        </div>
        <div className={styles.mir}>
          <IMir />
          <span>МИР</span>
        </div>
        <div className={styles.jcb}>
          <IJcb />
          <span>JCB</span>
        </div>
        <Ptag className={styles.descr} color="black">
          Для оплаты (ввода реквизитов Вашей карты) Вы будете перенаправлены на
          платёжный шлюз ПАО СБЕРБАНК. Соединение с платёжным шлюзом и передача
          информации осуществляется в защищённом режиме с использованием
          протокола шифрования SSL. В случае если Ваш банк поддерживает
          технологию безопасного проведения интернет-платежей Verified By Visa,
          MasterCard SecureCode, MIR Accept, J-Secure для проведения платежа
          также может потребоваться ввод специального пароля.
        </Ptag>
        <Ptag className={styles.descr} color="black">
          Конфиденциальность сообщаемой персональной информации обеспечивается
          ПАО СБЕРБАНК. Введённая информация не будет предоставлена третьим
          лицам за исключением случаев, предусмотренных законодательством РФ.
          Проведение платежей по банковским картам осуществляется в строгом
          соответствии с требованиями платёжных систем МИР, Visa Int.,
          MasterCard Europe Sprl, JCB.
        </Ptag>
        <Ptag className={cn(styles.descr, styles.noIndent)} color="black">
          Электронный чек будет выслан на указанную электронную почту в течении
          24 часов после совершения оплаты.
        </Ptag>
        <Htag tag="h3" color="black" size="s">
          Доставка
        </Htag>
        <Ptag className={styles.descr} color="black">
          Сотрудники "Мир Дерева Владимир" помогут Вам с организацией доставки.
          Доставка осуществляется транспортом сторонней компании. Услуги
          погрузки осуществляются бесплатно. Услуги разгрузки товара не
          предоставляются.
        </Ptag>
        <Htag tag="h3" color="black" size="s">
          Примерная стоимость доставки:
        </Htag>
        <div className={styles.delivery}>
          <Card className={styles.deliveryItem}>
            <ul className={styles.deliveryList}>
              <li className={styles.deliveryListItem}>
                Газель (до 4 метров и 1500 кг)
              </li>
              <li className={styles.deliveryListItem}>
                За чертой г. Владимир - 600 руб. + *19 руб./км
              </li>
              <li className={styles.deliveryListItem}>
                учитывается расстояние до адреса доставки и обратно ( 20 мин.
                погрузки + 20 мин. выгрузки бесплатно)
              </li>
            </ul>
          </Card>
          <Card className={styles.deliveryItem}>
            <ul className={styles.deliveryList}>
              <li className={styles.deliveryListItem}>
                Газель (до 4 метров и 1500 кг)
              </li>
              <li className={styles.deliveryListItem}>
                За чертой г. Владимир - 600 руб. + *19 руб./км
              </li>
              <li className={styles.deliveryListItem}>
                учитывается расстояние до адреса доставки и обратно ( 20 мин.
                погрузки + 20 мин. выгрузки бесплатно)
              </li>
            </ul>
          </Card>
          <Card className={styles.deliveryItem}>
            <ul className={styles.deliveryList}>
              <li className={styles.deliveryListItem}>
                Газель (до 4 метров и 1500 кг)
              </li>
              <li className={styles.deliveryListItem}>
                За чертой г. Владимир - 600 руб. + *19 руб./км
              </li>
              <li className={styles.deliveryListItem}>
                учитывается расстояние до адреса доставки и обратно ( 20 мин.
                погрузки + 20 мин. выгрузки бесплатно)
              </li>
            </ul>
          </Card>
          <Card className={styles.deliveryItem}>
            <ul className={styles.deliveryList}>
              <li className={styles.deliveryListItem}>
                Газель (до 4 метров и 1500 кг)
              </li>
              <li className={styles.deliveryListItem}>
                За чертой г. Владимир - 600 руб. + *19 руб./км
              </li>
              <li className={styles.deliveryListItem}>
                учитывается расстояние до адреса доставки и обратно ( 20 мин.
                погрузки + 20 мин. выгрузки бесплатно)
              </li>
            </ul>
          </Card>
          <Card className={styles.deliveryItem}>
            <ul className={styles.deliveryList}>
              <li className={styles.deliveryListItem}>
                Газель (до 4 метров и 1500 кг)
              </li>
              <li className={styles.deliveryListItem}>
                За чертой г. Владимир - 600 руб. + *19 руб./км
              </li>
              <li className={styles.deliveryListItem}>
                учитывается расстояние до адреса доставки и обратно ( 20 мин.
                погрузки + 20 мин. выгрузки бесплатно)
              </li>
            </ul>
          </Card>
        </div>
      </div>
    </div>
  );
};
