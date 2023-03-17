import { type } from "os";

export const priceRu = (price: number): string =>
  price
    .toString()
    .replace(/\B(?=(\d{3})+(?!\d))/g, " ")
    .concat(" ₽");

export type FirstMenuAlias =
  | "pilomateriali"
  | "stroitelnie-i-otdelochnie-materiali"
  | "banniy-magazin"
  | "magazin-soputstvuyuschih-towarov"
  | "dvernie-i-okonnie-bloki"
  | "Лакокрасочные материалы";

export const FirstMenuLevel = [
  {
    _id: "6411c479dd8d7882132b3fd2",
    title: "Пиломатериалы",
    sortId: 1,
    alias: "pilomateriali",
    categories: {
      first: {
        level: "Пиломатериалы",
        alias: "pilomateriali",
      },
      second: {},
      third: {},
      fifth: {},
    },
  },
  {
    _id: "6411c4b6dd8d7882132b3fd6",
    title: "Строительные и отделочные материалы",
    sortId: 2,
    alias: "stroitelnie-i-otdelochnie-materiali",
    categories: {
      first: {
        level: "Строительные и отделочные материалы",
        alias: "stroitelnie-i-otdelochnie-materiali",
      },
      second: {},
      third: {},
      fifth: {},
    },
  },
  {
    _id: "6411c4dedd8d7882132b3fda",
    title: "Банный магазин",
    sortId: 3,
    alias: "banniy-magazin",
    categories: {
      first: {
        level: "Банный магазин",
        alias: "banniy-magazin",
      },
      second: {},
      third: {},
      fifth: {},
    },
  },
  {
    _id: "6411c50ddd8d7882132b3fde",
    title: "Магазин сопутствующих товаров",
    sortId: 4,
    alias: "magazin-soputstvuyuschih-towarov",
    categories: {
      first: {
        level: "Магазин сопутствующих товаров",
        alias: "magazin-soputstvuyuschih-towarov",
      },
      second: {},
      third: {},
      fifth: {},
    },
  },
  {
    _id: "6411c52ddd8d7882132b3fe2",
    title: "Дверные и оконные блоки",
    sortId: 5,
    alias: "dvernie-i-okonnie-bloki",
    categories: {
      first: {
        level: "Дверные и оконные блоки",
        alias: "dvernie-i-okonnie-bloki",
      },
      second: {},
      third: {},
      fifth: {},
    },
  },
  {
    _id: "6411c54cdd8d7882132b3fe6",
    title: "Лакокрасочные материалы",
    sortId: 6,
    alias: "lakokrasochnie-materiali",
    categories: {
      first: {
        level: "Лакокрасочные материалы",
        alias: "lakokrasochnie-materiali",
      },
      second: {},
      third: {},
      fifth: {},
    },
  },
];
