import styles from "./breadcrumbs.module.css";
import cn from "classnames";
import Link from "next/link";
import { IBredcrumbs } from "./breadcrumbs.props";

export const Breadcrumbs = ({ page, className }: IBredcrumbs) => {
  return (
    page && (
      <div className={cn(styles.breadcrumbs, className)}>
        <div>
          <Link href={"/"}>
            <span>Главная</span>
          </Link>
        </div>
        <div>
          {page.categories.first && (
            <Link href={page.categories.first.route}>
              <span>{page.categories.first.level}</span>
            </Link>
          )}
        </div>
        {page.categories.second && (
          <div>
            <Link href={page.categories.second.route}>
              <span>{page.categories.second.level}</span>
            </Link>
          </div>
        )}
        {page.categories.third && (
          <div>
            <Link href={page.categories.third.route}>
              <span>{page.categories.third.level}</span>
            </Link>
          </div>
        )}
        {page.categories.fifth && <div>{}</div>}
      </div>
    )
  );
};
