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
          {page.first && (
            <Link href={page.first.route}>
              <span>{page.first.level}</span>
            </Link>
          )}
        </div>
        {page.second && (
          <div>
            <Link href={page.second.route}>
              <span>{page.second.level}</span>
            </Link>
          </div>
        )}
        {page.third && (
          <div>
            <Link href={page.third.route}>
              <span>{page.third.level}</span>
            </Link>
          </div>
        )}
        {page.fifth && <div>{}</div>}
      </div>
    )
  );
};
