import styles from "./sub.menu.tags.module.css";
import cn from "classnames";
import { AppContext } from "@/context/app.context";
import { useRouter } from "next/router";
import { useContext } from "react";
import { Tag } from "@/components";
import { ISubMenu } from "./sub.menu.tags.props";

export const SubMenuTags = ({ className, ...props }: ISubMenu) => {
  const { menu } = useContext(AppContext);
  const router = useRouter();

  const subMenu = () => {
    const currentTags = menu && menu.find((m) => m._id === router.asPath);

    const parentRoute = router.asPath
      .split("/")
      .slice(0, router.asPath.split("/").length - 1)
      .join("/");

    const back = "назад";

    return (
      <div className={cn(styles.subMenu, className)} {...props}>
        {parentRoute !== "" && (
          <div>
            <Tag className={styles.back} href={parentRoute}>
              {back}
            </Tag>
          </div>
        )}
        {currentTags &&
          currentTags.pages.map((tags) => {
            return (
              <div className={styles.tag} key={tags.alias}>
                <Tag color="orange" href={tags.route}>
                  {tags.title}
                </Tag>
              </div>
            );
          })}
      </div>
    );
  };

  return <div className={cn(className)}>{subMenu()}</div>;
};
