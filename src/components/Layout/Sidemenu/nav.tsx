import React from "react";
import { ReactComponent as HomeIcon } from "../../../assets/home.svg";

import { ReactComponent as Profile } from "../../../assets/Profile.svg";
import { ReactComponent as Account } from "../../../assets/icon_account.svg";
import { ReactComponent as Finances } from "../../../assets/Finances.svg";
import { ReactComponent as Services } from "../../../assets/icon_service.svg";

import { ReactComponent as Servers } from "../../../assets/icon_sersev.svg";
import { ReactComponent as Monitoring } from "../../../assets/Group.svg";

import { ReactComponent as Domains } from "../../../assets/Group 2101.svg";
import { ReactComponent as MyDomains } from "../../../assets/My_domains.svg";
import { ReactComponent as DomainBonus } from "../../../assets/Domains_bonus.svg";
import { ReactComponent as DomainPerson } from "../../../assets/Domains_persons.svg";

import { ReactComponent as SSL } from "../../../assets/SSL.svg";
import { ReactComponent as Store } from "../../../assets/icon_shop.svg";
import { ReactComponent as SEO } from "../../../assets/Group 2103.svg";
import { ReactComponent as Support } from "../../../assets/icon_help.svg";
import { ReactComponent as Idea } from "../../../assets/icon_idea.svg";

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
    icon: <Account />,
    isPromoted: false,
    nav: [
      { text: "Профиль", icon: <Profile /> },
      { text: "Финансы", icon: <Finances /> },
      { text: "Услуги", icon: <Services /> },
    ],
  },
  { text: "СЕРВЕРЫ", icon: <Servers /> },
  { text: "МОНИТОРИНГ", icon: <Monitoring /> },
  {
    text: "ДОМЕНЫ",
    icon: <Domains />,
    isPromoted: false,
    nav: [
      { text: "Мои домены", icon: <MyDomains /> },
      { text: "Доменные бонусы", icon: <DomainBonus /> },
      { text: "Доменные персоны", icon: <DomainPerson /> },
    ],
  },
  { text: "SSL", icon: <SSL /> },
  { text: "МАГАЗИН", icon: <Store /> },
  { text: "SEO И РЕКЛАМА", icon: <SEO /> },
  { text: "ПОДДЕРЖКА", icon: <Support /> },
  { text: "ЕСТЬ ИДЕЯ", icon: <Idea /> },
];

export default NAV;
