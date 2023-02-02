import { ISubscribeProps } from "./Subscribe.props";
import styles from "./Subscribe.module.css";
import cn from "classnames";
import { Htag, Input, Button, Ptag } from "../../components";

export const Subscribe = ({ className, ...props }: ISubscribeProps) => {
  return (
    <div className={cn(styles.subscribe, className)} {...props}>
      <div className={styles.wrapper}>
        <Htag className={styles.title} tag="h2" size="s" color="white">
          ПОДПИШИСЬ НА РАССЫЛКУ НАШИХ АКЦИЙ И НОВОСТЕЙ
        </Htag>
        <form action="" className={styles.form}>
          <Input className={styles.input} />
          <Button color="orange" className={styles.button}>
            ПОДПИСАТЬСЯ
          </Button>
        </form>
        <Ptag size="s" color="white" className={styles.descr}>
          Нажимая на кнопку, вы даете согласие на <br />
          <a href="#">
            <span>обработку ваших персональных данных</span>
          </a>
        </Ptag>
      </div>
    </div>
  );
};
