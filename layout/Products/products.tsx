import { IProducts } from "./products.props";
import styles from "./products.module.css";
import cn from "classnames";
import { Card, MyImage } from "@/components";
import { priceRu } from "@/helpers/helpers";
import Link from "next/link";

export const Products = ({ products, className }: IProducts) => {
  return (
    <div className={cn(styles.products, className)}>
      {products && products.length !== 0 ? (
        products.map((product) => {
          return (
            <Card key={product.productId}>
              <Link href={product.route}>
                <div className={cn(styles.product)}>
                  <div className={styles.image}>
                    <MyImage
                      src={
                        process.env.NEXT_PUBLIC_DOMAIN +
                        `/static/${product.productId}/${product.productId}.320.webp`
                      }
                      defaultImageSrc={
                        process.env.NEXT_PUBLIC_DOMAIN +
                        `/static/not_image/not_image.320.webp`
                      }
                      alt={product.title}
                      height={200}
                      width={200}
                      quality={70}
                    />
                  </div>
                  {/* <div className={styles.image}>
                    <Image
                      src={
                        process.env.NEXT_PUBLIC_DOMAIN +
                        `/static/${product.productId}/${product.productId}.320.webp`
                      }
                      height={200}
                      width={200}
                      quality={70}
                      alt={product.title}
                      onError={() => {
                        process.env.NEXT_PUBLIC_DOMAIN +
                          `/static/no_image/no_image.320.webp`;
                      }}
                    />
                  </div> */}
                  <div className={styles.title}>
                    <span>{product.title}</span>
                  </div>
                  <div className={styles.wrapper_count}>
                    <div>код: {product.productId}</div>
                    <div className={styles.count}>
                      <div>
                        {product.count > 0 ? (
                          <span className={styles.availability}>
                            Есть в наличии
                          </span>
                        ) : (
                          <span className={styles.not_availability}>
                            Нет в наличии
                          </span>
                        )}
                      </div>
                      <div>{product.count}</div>
                    </div>
                  </div>
                  <div className={styles.price_wrapper}>
                    {product.price.length !== 0 ? (
                      product.price.map((price) => (
                        <div className={styles.price_count} key={price._id}>
                          <div className={styles.price}>
                            <span>{priceRu(price.value)}</span>
                          </div>
                          <div>
                            <span>{price.name}</span>
                          </div>
                        </div>
                      ))
                    ) : (
                      <div>
                        <span>цена не указана</span>
                      </div>
                    )}
                  </div>
                </div>
              </Link>
            </Card>
          );
        })
      ) : (
        <span>Продукты не найдены</span>
      )}
    </div>
  );
};
