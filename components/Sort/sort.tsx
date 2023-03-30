import { SortProps, SortEnum } from "./sort.props";
import cn from "classnames";
import styles from "./sort.module.css";

export const Sort = ({ sort, setSort, className, ...props }: SortProps) => {
  return (
    <div className={cn(styles.sort, className)} {...props}>
      <span
        onClick={() => setSort(SortEnum.ProducCode)}
        className={cn({
          [styles.active]: sort === SortEnum.ProducCode,
        })}
      >
        по коду товара
      </span>
      <span
        onClick={() => setSort(SortEnum.Count)}
        className={cn({
          [styles.active]: sort === SortEnum.Count,
        })}
      >
        по количевству
      </span>
    </div>
  );
};
