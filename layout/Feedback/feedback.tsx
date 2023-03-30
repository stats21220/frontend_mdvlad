import { Button, Htag, Input, Ptag } from "@/components";
import { Textarea } from "@/components/Textarea/textarea";
import { API } from "@/helpers/api";
import axios from "axios";
import cn from "classnames";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { IFeedbackForm } from "./feedback.form.interface";
import styles from "./feedback.module.css";
import { FeedbackProps } from "./feedback.props";

export const Feedback = ({ className }: FeedbackProps) => {
  const EMAIL_REGEXP =
    /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu;
  const {
    register, //для регистрации формы
    // control, // для регистрации контролируемых управляемых форм
    handleSubmit,
    formState: { errors },
  } = useForm<IFeedbackForm>();

  const onSubmit = async (formData: IFeedbackForm) => {
    console.log(formData);

    try {
      const { data } = await axios.post(API.feedback.create, formData);
      console.log(data, "a");
    } catch {
      console.log("hz");
    }
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
            <div className={styles.inputWrapper}>
              <Input
                {...register("name", {
                  required: { value: true, message: "Заполните имя" },
                })}
                error={errors && errors.name}
                className={styles.input}
                placeholder="Ваше имя"
              ></Input>
              <Input
                {...register("phone", {
                  required: { value: true, message: "Введите номер телефона" },
                })}
                error={errors && errors.phone}
                className={styles.input}
                type="tel"
                {...register("phone")}
                placeholder="Ваш телефон"
              ></Input>
              <Input
                {...register("email", {
                  pattern: EMAIL_REGEXP,
                  required: { value: true, message: "Введите email" },
                })}
                error={errors && errors.email}
                className={styles.input}
                type="email"
                {...register("email")}
                placeholder="Ваш E-mail"
              ></Input>
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
            {/* <div>
              <span className={styles.success}>
                форма обратной связи отправлена
              </span>
            </div> */}
          </div>
        </form>
      </div>
    </div>
  );
};
