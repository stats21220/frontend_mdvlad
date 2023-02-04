import { Button, Htag, Input, Ptag } from "@/components";
import { Textarea } from "@/components/Textarea/textarea";
import cn from "classnames";
import Link from "next/link";
import styles from "./feedback.module.css";
import { FeedbackProps } from "./feedback.props";

export const Feedback = ({ className }: FeedbackProps) => {
  return (
    <div className={cn(styles.feedback, className)}>
      <div className={styles.wrapper}>
        <Htag tag="h2" color="white" size="m" className={styles.title}>
          ВАМ ТРЕБУЕТСЯ КОНСУЛЬТАЦИЯ НАШЕГО СПЕЦИАЛИСТА?
        </Htag>
        <span className={styles.callback}>
          Заполните форму обратной связи и наш менеджер свяжется с вами в
          ближайшее время
        </span>
        <div className={styles.user}>
          <div className={styles.input}>
            <Input placeholder="Ваше имя"></Input>
          </div>
          <div className={styles.input}>
            <Input placeholder="Ваш телефон"></Input>
          </div>
          <div className={styles.input}>
            <Input placeholder="Ваш E-mail"></Input>
          </div>
          <Ptag className={styles.descr} white>
            Отправляя сообщение нам,
            <br />
            вы даете{" "}
            <Link href="/privacy">
              согласие на обработку ваших персональных данных.
            </Link>
          </Ptag>
        </div>
        <div className={styles.comment}>
          <div className={styles.textarea}>
            <Textarea placeholder="Ваш комментарий" />
          </div>
          <Button className={styles.button}>Отправить</Button>
        </div>
      </div>
    </div>
  );
};
