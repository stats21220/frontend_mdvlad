import { MenuModel } from "@/interfaces/menu.interface";
import { createContext, ReactNode, useState } from "react";
import { FirstMenuAlias } from "../helpers/helpers";

export interface IAppContext {
  menu: MenuModel[];
  firstCategory: FirstMenuAlias;
  secondCategory?: string;
  setMenu?: (newMenu: MenuModel[]) => void;
}

export const AppContext = createContext<IAppContext>({
  menu: [],
  firstCategory: "pilomateriali",
});

export const AppContextProvider = ({
  menu,
  firstCategory: firstMenu,
  children,
}: IAppContext & {
  children: ReactNode;
}): JSX.Element => {
  const [menuState, setMenuState] = useState<MenuModel[]>(menu);

  const setMenu = (newMenu: MenuModel[]) => {
    setMenuState(newMenu);
  };

  const secondCategory = undefined;

  return (
    <AppContext.Provider
      value={{
        menu: menuState,
        firstCategory: firstMenu,
        secondCategory,
        setMenu,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
