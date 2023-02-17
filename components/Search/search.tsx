import { searchProps } from "./search.props";
import styles from "./search.module.css";
import cn from "classnames";
import { forwardRef, KeyboardEvent, useState } from "react";
import { Input } from "../Input/Input";
import { Button } from "../Button/button";
import ISearch from "./search.svg";
import { useRouter } from "next/router";

export const Search = forwardRef(
  ({ className, ...props }: searchProps): JSX.Element => {
    const [search, setSearch] = useState<string>("");
    const router = useRouter();
    const goToSearch = () => {
      router.push({
        pathname: "/",
        query: { q: search },
      });
    };

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Enter") {
        goToSearch();
      }
    };

    return (
      <div className={cn(className, styles.search)} {...props}>
        <Input
          placeholder="Поиск..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          onKeyDown={handleKeyDown}
        />
        <Button className={styles.button} onClick={goToSearch}>
          <ISearch />
        </Button>
      </div>

      // <div className={cn(styles.inputWrapper)}>
      //   <input
      //     className={cn(styles.input, className, {
      //       // [styles.error]: error
      //     })}
      //     ref={ref}
      //     {...props}
      //   />
      //   {/* {error && <span role="alert" className={styles.errorMessage}>{error.message}</span>} */}
      // </div>
    );
  }
);
