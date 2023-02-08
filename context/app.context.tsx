import { MenuModel } from "@/interfaces/menu.interface";
import { createContext, ReactNode, useState } from "react";

export interface IAppContext {
  menu: MenuModel[];
  firstLevelMenu: string;
  firstCategoryMenu: string;
  setMenu?: (newMenu: MenuModel[]) => void;
}

export const AppContext = createContext<IAppContext>({
  menu: [],
  firstLevelMenu: "/",
  firstCategoryMenu: "pilomateriali",
});

export const AppContextProvider = ({
  menu,
  firstLevelMenu,
  firstCategoryMenu,
  children,
}: IAppContext & {
  children: ReactNode;
}): JSX.Element => {
  const [menuState, setMenuState] = useState<MenuModel[]>(menu);

  const setMenu = (newMenu: MenuModel[]) => {
    setMenuState(newMenu);
  };

  return (
    <AppContext.Provider
      value={{ menu: menuState, firstLevelMenu, firstCategoryMenu, setMenu }}
    >
      {children}
    </AppContext.Provider>
  );
};
