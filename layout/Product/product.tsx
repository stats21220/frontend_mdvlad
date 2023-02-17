import { IProduct } from "./product.props";
import styles from "./product.module.css";
import cn from "classnames";
import { Button, Htag } from "@/components";
// import { priceRu } from "@/helpers/helpers";

export const Product = ({ product, className, ...props }: IProduct) => {
  return product ? (
    <div className={cn(className, styles.product)} {...props}>
      <div className={styles.block_image}>
        <div className={styles.image}>
          <span>{product.image}</span>
          <span>
            *Товар на складе может иметь незначительные отличия от изображения
            на сайте.
          </span>
        </div>
        <div className={styles.product_info}>
          <div>
            <span>код товара: {product.productId}</span>
          </div>
          <div>
            <div>
              {product.count !== 0 ? (
                <span className={styles.available}>Есть в наличии</span>
              ) : (
                <span>Нет в наличии</span>
              )}
            </div>
            <div className={styles.count}>
              <span>количевство {product.count}</span>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.block_sale}>
        <Htag color="black">{product.title}</Htag>
        <div className={styles.line}></div>
        <div className={styles.pice}>
          <span>price 1000</span>
        </div>
        <div className={styles.calc}>
          <span>Кол-во:</span>
          <span>Укажите удобное для Вас количество товара</span>
          <div>CALC</div>
        </div>
        <div className={styles.button_wrapper}>
          <Button>В корзину</Button>
        </div>
        <div className={styles.order_payment_delivery_info}>
          <span>Доставка: от 500 руб.</span>
          <span>Самовывоз: Сегодня, до 17:00</span>
        </div>
      </div>
    </div>
  ) : (
    <></>
  );
};
