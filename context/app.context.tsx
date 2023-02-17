import { IMenuLevelItem, MenuModel } from "@/interfaces/menu.interface";
import { createContext, ReactNode, useState } from "react";

export interface IAppContext {
  menu: MenuModel[];
  setMenu?: (newMenu: MenuModel[]) => void;
}

export const AppContext = createContext<IAppContext>({
  menu: [],
});

export const AppContextProvider = ({
  menu,
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
        setMenu,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
