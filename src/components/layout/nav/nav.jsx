import React from "react";
import { StyledButton } from "./styled";
import { AppRoute } from "../../../const";
import { useLocation } from "react-router-dom";
import Button from "../../ui/button/button";
import { Ul, Li } from "../../styled";

const links = [
  {
    to: AppRoute.MAIN,
    item: <StyledButton link={AppRoute.MAIN}>Главная</StyledButton>,
  },
  {
    to: AppRoute.ORDER,
    item: (
      <Button link={AppRoute.ORDER} minWidth={260}>
        Купить
      </Button>
    ),
  },
];

export default function Nav() {
  const pageUrl = useLocation().pathname;

  return (
    <nav>
      <Ul>
        {links
          .filter((link) => link.to !== pageUrl)
          .map((link) => (
            <Li key={link.to}>{link.item}</Li>
          ))}
      </Ul>
    </nav>
  );
}
