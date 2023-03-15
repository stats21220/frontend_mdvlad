import { Button, Htag, Input, Ptag } from "@/components";
import { Textarea } from "@/components/Textarea/textarea";
import cn from "classnames";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { IFeedbackForm } from "./feedback.form.interface";
import styles from "./feedback.module.css";
import { FeedbackProps } from "./feedback.props";

export const Feedback = ({ className }: FeedbackProps) => {
  const {
    register, //для регистрации формы
    // control, // для регистрации контролируемых управляемых форм
    handleSubmit,
  } = useForm<IFeedbackForm>();

  const onSubmit = (data: IFeedbackForm) => {
    console.log(data);
  };

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
        <form
          action=""
          onSubmit={handleSubmit(onSubmit)}
          className={styles.form}
        >
          <div className={styles.user}>
            <div className={styles.input}>
              <Input {...register("name")} placeholder="Ваше имя"></Input>
            </div>
            <div className={styles.input}>
              <Input {...register("phone")} placeholder="Ваш телефон"></Input>
            </div>
            <div className={styles.input}>
              <Input {...register("email")} placeholder="Ваш E-mail"></Input>
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
              <Textarea
                {...register("description")}
                placeholder="Ваш комментарий"
              />
            </div>
            <Button className={styles.button}>Отправить</Button>
            <span className={styles.success}>
              форма обратной связи отправлена
            </span>
          </div>
        </form>
      </div>
    </div>
  );
};
