import { HtagProps } from "./htag.props";
import styles from "./htag.module.css";
import cn from "classnames";

export const Htag = ({
  tag = "h2",
  color = "primary",
  size,
  className,
  children,
  ...props
}: HtagProps) => {
  const colorAndSize = {
    [styles.primary]: color === "primary",
    [styles.black]: color === "black",
    [styles.white]: color === "white",
    [styles.s]: size === "s",
    [styles.m]: size === "m",
  };
  switch (tag) {
    case "h1":
      return (
        <h1
          className={cn(styles.h1, className, { ...colorAndSize })}
          {...props}
        >
          {children}
        </h1>
      );
    case "h2":
      return (
        <h2
          className={cn(styles.h1, className, { ...colorAndSize })}
          {...props}
        >
          {children}
        </h2>
      );
    case "h3":
      return (
        <h3
          className={cn(styles.h1, className, { ...colorAndSize })}
          {...props}
        >
          {children}
        </h3>
      );
    default:
      return <></>;
  }
};
