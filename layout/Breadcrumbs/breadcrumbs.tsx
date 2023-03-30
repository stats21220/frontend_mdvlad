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
            <Link href={`/${page.first.alias}`}>
              <span>{page.first.level}</span>
            </Link>
          )}
        </div>
        {page.second && (
          <div>
            <Link href={`/${page.second.alias}`}>
              <span>{page.second.level}</span>
            </Link>
          </div>
        )}
        {page.third && (
          <div>
            <Link href={`/${page.third.alias}`}>
              <span>{page.third.level}</span>
            </Link>
          </div>
        )}
        {page.fifth && <div>{}</div>}
      </div>
    )
  );
};
