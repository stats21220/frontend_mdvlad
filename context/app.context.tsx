import { MenuModel } from "@/interfaces/menu.interface";
import { createContext, ReactNode, useState } from "react";

export interface IAppContext {
  menu: MenuModel[];
  firstCategory: string;
  secondCategory: string;
  setMenu?: (newMenu: MenuModel[]) => void;
}

export const AppContext = createContext<IAppContext>({
  menu: [],
  firstCategory: "pilomateriali",
  secondCategory: "",
});

export const AppContextProvider = ({
  menu,
  firstCategory: firstMenu,
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
        firstCategory: firstMenu,
        secondCategory,
        setMenu,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
