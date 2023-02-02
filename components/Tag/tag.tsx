import { TagProps } from "./tag.props";
import cn from "classnames";
import styles from "./tag.module.css";
import Link from "next/link";

export const Tag = ({
  size = "m",
  color = "primary",
  href,
  className,
  children,
  ...props
}: TagProps) => {
  return (
    <div
      className={cn(styles.tag, className, {
        [styles.s]: size === "s",
        [styles.m]: size === "m",
        [styles.primary]: color === "primary",
        [styles.orange]: color === "orange",
        [styles.green]: color === "green",
      })}
      {...props}
    >
      {href ? <Link href={href}>{children}</Link> : <span>{children}</span>}
    </div>
  );
};
