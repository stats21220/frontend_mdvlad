import { Htag, Ptag } from "@/components";
import { Carousel } from "@/layout/slider/slider";
import styles from "./home-component.module.css";
import I10 from "./10.svg";
import ICustomer from "./customer.svg";
import IWarehouse from "./warehouse.svg";
import IDiscount from "./discount.svg";
import IShipped from "./shipped.svg";
import IOperator from "./operator.svg";
import { IHomeProps } from "./home-component.props";

export const HomeComponent = ({ menu }: IHomeProps) => {
  return (
    <div className={styles.home}>
      <Carousel className={styles.slider} />
      <Htag color={"primary"} tag={"h1"} className={styles.title}>
        Пиломатериалы во Владимире – ТК «Мир Дерева»
      </Htag>
      <div className={styles.advanteges_wrapper}>
        <div className={styles.advanteges_item}>
          <I10 />
          <span>10 ЛЕТ В ОТРАСЛИ</span>
        </div>
        <div className={styles.advanteges_item}>
          <ICustomer />
          <span>
            40000 ПОКУПАТЕЛЕЙ <br /> В МЕСЯЦ
          </span>
        </div>
        <div className={styles.advanteges_item}>
          <IWarehouse />
          <span>
            5000 ПОЗИЦИЙ <br /> ТОВАРА
          </span>
        </div>
        <div className={styles.advanteges_item}>
          <IDiscount />
          <span>
            ПРИВЛЕКАТЕЛЬНЫЕ <br /> АКТУАЛЬНЫЕ ЦЕНЫ
          </span>
        </div>
        <div className={styles.advanteges_item}>
          <IShipped />
          <span>
            БЫСТРАЯ И УДОБНАЯ <br /> ДОСТАВКА
          </span>
        </div>
        <div className={styles.advanteges_item}>
          <IOperator />
          <span>
            КОНСУЛЬТАЦИЯ ПО <br />
            ВСЕМ ВОПРОСАМ
          </span>
        </div>
      </div>
      <div className={styles.article_wrapper}>
        <Htag className={styles.subtitle} color={"primary"} tag={"h2"}>
          Пиломатериалы во Владимире
        </Htag>
        <Ptag>
          Трудно представить возведение дома, бани или другого строения без
          использования пиломатериалов. Это основной и универсальный
          строительный материал. Такая востребованность обусловлена особыми
          свойствами дерева: оно способно поддерживать постоянную температуру и
          микроклимат в доме, что обеспечивает комфортное проживание. Даже
          простая отделка деревом делает помещение в разы уютнее.
        </Ptag>
        {/* <Htag tag={"h3"}>Разновидности</Htag>
        <Ptag>
          Торговый комплекс «Мир Дерева» специализируется на реализации
          пиломатериалов из различных пород древесины по выгодным ценам.
          Покупателям предлагается широкий ассортимент товара:
        </Ptag>
        <ul>
          <li>обрезная доска;</li>
          <li>брус;</li>
          <li>доска сухая строганная;</li>
          <li>блок-хаус;</li>
          <li>вагонка.</li>
        </ul>
        <Ptag>
          Пиломатериалы получили широкое применения в строительной сфере. Их
          используют для подготовительных работ при установке фундамента,
          обустройстве опалубки. Пиломатериалы незаменимы при монтаже
          междуэтажных перекрытий и перегородок, возведении временных построек,
          обустройстве крыш.
        </Ptag>
        <Ptag>
          Разные породы дерева применяются для проведения различных работ. Так,
          в каталоге представлен большой ассортимент пиломатериала из
          лиственницы. Она отличается прекрасными эксплуатационными и
          качественными характеристиками. Для возведения бани подойдет липа или
          осина. Хвойные породы (ель, сосна) – самый ходовой и универсальный
          материал, который подойдет для проведения разных строительных работ.
        </Ptag>
        <Htag tag={"h3"}>Как оформить заказ?</Htag>
        <Ptag>
          Чтобы купить пиломатериалы во Владимире, свяжитесь с нами по указанным
          телефонам или оформите онлайн заявку на сайте. Что касается стоимости,
          то она зависит от нескольких факторов: ценности древесины, качества
          обработки, сорта, размеров готовых изделий, качественных показателей.
        </Ptag>
        <Ptag>
          Мы предлагаем только высококачественные изделия, которые прослужат
          действительно долго. Доставка осуществляется по городу и области.
          Приемлемые цены и удобные способы оплаты гарантированы. Вся продукция
          соответствует установленным стандартам и требованиям.
        </Ptag>*/}
      </div>
      <div>
        <Htag tag={"h2"}>Наша продукция</Htag>
        <div className={styles.products}>
          {menu &&
            menu.map((p) => (
              <div key={p._id} className={styles.product}>
                <span>{p.title}</span>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};
