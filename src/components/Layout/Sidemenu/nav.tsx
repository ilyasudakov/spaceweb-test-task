import React from "react";
import { ReactComponent as HomeIcon } from "../../../assets/home.svg";

type NavItem = {
  text: string;
  icon: React.ReactNode;
  isPromoted?: boolean;
};
export type NavType = {
  text: string;
  icon: React.ReactNode;
  isPromoted?: boolean;
  nav?: NavItem[];
};
const NAV: NavType[] = [
  { text: "Заказать VPS", icon: <HomeIcon />, isPromoted: true },
  {
    text: "АККАУНТ",
    icon: <HomeIcon />,
    isPromoted: false,
    nav: [
      { text: "Профиль", icon: <HomeIcon /> },
      { text: "Финансы", icon: <HomeIcon /> },
      { text: "Услуги", icon: <HomeIcon /> },
    ],
  },
  { text: "СЕРВЕРЫ", icon: <HomeIcon /> },
  { text: "МОНИТОРИНГ", icon: <HomeIcon /> },
  {
    text: "ДОМЕНЫ",
    icon: <HomeIcon />,
    isPromoted: false,
    nav: [
      { text: "Мои домены", icon: <HomeIcon /> },
      { text: "Доменные бонусы", icon: <HomeIcon /> },
      { text: "Доменные персоны", icon: <HomeIcon /> },
    ],
  },
  { text: "SSL", icon: <HomeIcon /> },
  { text: "МАГАЗИН", icon: <HomeIcon /> },
  { text: "SEO И РЕКЛАМА", icon: <HomeIcon /> },
  { text: "ПОДДЕРЖКА", icon: <HomeIcon /> },
  { text: "ЕСТЬ ИДЕЯ", icon: <HomeIcon /> },
];

export default NAV;
