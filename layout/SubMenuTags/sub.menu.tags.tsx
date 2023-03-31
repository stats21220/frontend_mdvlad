import styles from "./sub.menu.tags.module.css";
import cn from "classnames";
import { AppContext } from "@/context/app.context";
import { useRouter } from "next/router";
import { useContext } from "react";
import { Tag } from "@/components";
import { ISubMenu } from "./sub.menu.tags.props";

export const SubMenuTags = ({ parent, className, ...props }: ISubMenu) => {
  const { menu } = useContext(AppContext);
  const router = useRouter();

  const subMenu = () => {
    const currentTags =
      menu && menu.find((m) => m._id === +router.asPath.split("/")[3]);

    return (
      parent && (
        <div className={cn(styles.subMenu, className)} {...props}>
          {parent.pageId === 0 ? (
            <></>
          ) : (
            <div>
              <Tag
                className={styles.back}
                href={`/catalog/${parent.alias}/${parent.pageId}`}
              >
                назад
              </Tag>
            </div>
          )}
          {currentTags &&
            currentTags.pages.map((tags) => {
              return (
                <div className={styles.tag} key={tags.alias}>
                  <Tag
                    color="orange"
                    href={`/catalog/${tags.alias}/${tags.pageId}`}
                  >
                    {tags.title}
                  </Tag>
                </div>
              );
            })}
        </div>
      )
    );
  };

  return <div className={cn(className)}>{subMenu()}</div>;
};
