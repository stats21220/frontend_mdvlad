import { IMenuLevelItem } from "@/interfaces/menu.interface";
import { createContext, ReactNode, useState } from "react";

export interface IAppContext {
  firstMenu: IMenuLevelItem[];
  secondMenu: IMenuLevelItem[];
  setMenu?: (newMenu: IMenuLevelItem[]) => void;
}

export const AppContext = createContext<IAppContext>({
  firstMenu: [],
  secondMenu: [],
});

export const AppContextProvider = ({
  firstMenu,
  secondMenu,
  children,
}: IAppContext & {
  children: ReactNode;
}): JSX.Element => {
  const [menuState, setMenuState] = useState<IMenuLevelItem[]>(secondMenu);

  const setMenu = (newMenu: IMenuLevelItem[]) => {
    setMenuState(newMenu);
  };

  return (
    <AppContext.Provider
      value={{
        firstMenu,
        secondMenu: menuState,
        setMenu,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
