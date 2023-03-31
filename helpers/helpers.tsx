import { MenuModel } from "@/interfaces/menu.interface";

export const priceRu = (price: number): string =>
  price
    .toString()
    .replace(/\B(?=(\d{3})+(?!\d))/g, " ")
    .concat(" ₽");

export const primaryMenuDefault: MenuModel = {
  _id: 0,
  pages: [
    {
      title: "Пиломатериалы",
      sortId: 1,
      pageId: 1,
      alias: "pilomateriali",
      parentId: 0,
    },
    {
      title: "Строительные и отделочные материалы",
      sortId: 2,
      pageId: 6,
      alias: "stroitelnie-i-otdelochnie-materiali",
      parentId: 0,
    },
    {
      title: "Банный магазин",
      sortId: 3,
      pageId: 7,
      alias: "banniy-magazin",
      parentId: 0,
    },
    {
      title: "Магазин сопутствующих товаров",
      sortId: 5,
      pageId: 8,
      alias: "magazin-soputstvuyuschih-towarov",
      parentId: 0,
    },
    {
      title: "Дверные и оконные блоки",
      sortId: 5,
      pageId: 9,
      alias: "dvernie-i-okonnie-bloki",
      parentId: 0,
    },
    {
      title: "Лакокрасочные материалы",
      sortId: 6,
      pageId: 10,
      alias: "lakokrasochnie-materiali",
      parentId: 0,
    },
  ],
};
