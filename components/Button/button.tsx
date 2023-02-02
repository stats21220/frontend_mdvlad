import { ButtonProps } from "./button.props";
import cn from "classnames";
import styles from "./button.module.css";
import IArrow from "./arrow.svg";

export const Button = ({
  color = "primary",
  arrow = "none",
  className,
  children,
  ...props
}: ButtonProps) => {
  return (
    <button
      className={cn(styles.button, className, {
        [styles.primary]: color === "primary",
        [styles.orange]: color === "orange",
        [styles.green]: color === "green",
      })}
      {...props}
    >
      {children}
      {arrow !== "none" && (
        <span
          className={cn(styles.arrow, {
            [styles.right]: arrow === "right",
            [styles.down]: arrow === "down",
          })}
        >
          <IArrow />
        </span>
      )}
    </button>
  );
};
