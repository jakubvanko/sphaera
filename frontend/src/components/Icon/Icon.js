import React from "react";

import Arrangiatore from "./components/Arrangiatore";
import ArrowDownFilled from "./components/ArrowDownFilled";
import ArrowRight from "./components/ArrowRight";
import Cart from "./components/Cart";
import Concordea from "./components/Concordea";
import Delete from "./components/Delete";
import Facebook from "./components/Facebook";
import Foursquare from "./components/Foursquare";
import Gawowed from "./components/Gawowed";
import Hamburger from "./components/Hamburger";
import Instagram from "./components/Instagram";
import Isaak from "./components/Isaak";
import Location from "./components/Location";
import Logo from "./components/Logo";
import Mozell from "./components/Mozell";
import Orphonic from "./components/Orphonic";
import Pen from "./components/Pen";
import Prerecorded from "./components/Prerecorded";
import Print from "./components/Print";
import Save from "./components/Save";
import Search from "./components/Search";
import Sonata from "./components/Sonata";
import Ticket from "./components/Ticket";
import Tiktok from "./components/Tiktok";
import Twitter from "./components/Twitter";
import User from "./components/User";
import UserFilled from "./components/UserFilled";
import Youtube from "./components/Youtube";
import { TextSmallBold } from "../TextType";
import {
  Container,
  TextIconContainer,
  CircleIconContainer,
} from "./Icon.styled";

const ICON_MAP = {
  arrangiatore: Arrangiatore,
  arrowdownfilled: ArrowDownFilled,
  arrowright: ArrowRight,
  cart: Cart,
  concordea: Concordea,
  delete: Delete,
  facebook: Facebook,
  foursquare: Foursquare,
  gawowed: Gawowed,
  hamburger: Hamburger,
  instagram: Instagram,
  isaak: Isaak,
  location: Location,
  logo: Logo,
  mozell: Mozell,
  orphonic: Orphonic,
  pen: Pen,
  prerecorded: Prerecorded,
  print: Print,
  save: Save,
  search: Search,
  sonata: Sonata,
  ticket: Ticket,
  tiktok: Tiktok,
  twitter: Twitter,
  user: User,
  userfilled: UserFilled,
  youtube: Youtube,
};

const Icon = ({ name, width, ...props }) => {
  const IconComponent = ICON_MAP[name];
  return (
    <Container {...props}>
      <IconComponent width={width} />
    </Container>
  );
};

export const TextIcon = ({ text, onClick, ...props }) => (
  <TextIconContainer onClick={onClick}>
    <Icon width={20} {...props} />
    <TextSmallBold>{text}</TextSmallBold>
  </TextIconContainer>
);

export const CircleIcon = ({ size = 40, className, ...props }) => (
  <CircleIconContainer $size={size} className={className}>
    <Icon width={0.625 * size} {...props} />
  </CircleIconContainer>
);

export default Icon;
