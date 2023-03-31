import { MenuModel } from "@/interfaces/menu.interface";
import { createContext, ReactNode, useState } from "react";

export interface IAppContext {
  menu: MenuModel[];
  firstCategory: number;
  secondCategory: number;
  setMenu?: (newMenu: MenuModel[]) => void;
}

export const AppContext = createContext<IAppContext>({
  menu: [],
  firstCategory: 0,
  secondCategory: 0,
});

export const AppContextProvider = ({
  menu,
  firstCategory,
  secondCategory,
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
      value={{
        menu: menuState,
        firstCategory,
        secondCategory,
        setMenu,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
