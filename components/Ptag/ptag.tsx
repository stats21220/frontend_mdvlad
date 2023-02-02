import { PtagProps } from "./ptag.props";
import cn from "classnames";
import styles from "./ptag.module.css";

export const Ptag = ({
  size = "m",
  white = false,
  className,
  children,
  ...props
}: PtagProps) => {
  return (
    <p
      className={cn(styles.p, className, {
        [styles.s]: size === "s",
        [styles.m]: size === "m",
        [styles.l]: size === "l",
        [styles.white]: white,
      })}
      {...props}
    >
      {children}
    </p>
  );
};
