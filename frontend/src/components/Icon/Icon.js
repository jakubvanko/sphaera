import React from "react";

import {Container} from "./Icon.styled";
import Hamburger from "./components/Hamburger";
import Logo from "./components/Logo";
import Prerecorded from "./components/Prerecorded";
import Isaak from "./components/Isaak";
import Gawowed from "./components/Gawowed";
import Mozell from "./components/Mozell";
import Arrangiatore from "./components/Arrangiatore";
import Concordea from "./components/Concordea";
import Sonata from "./components/Sonata";
import Orphonic from "./components/Orphonic";
import Facebook from "./components/Facebook";
import Youtube from "./components/Youtube";
import Twitter from "./components/Twitter";
import Instagram from "./components/Instagram";
import Tiktok from "./components/Tiktok";
import Foursquare from "./components/Foursquare";
import User from "./components/User";
import Search from "./components/Search";
import UserFilled from "./components/UserFilled";
import Cart from "./components/Cart";
import ArrowRight from "./components/ArrowRight";
import Location from "./components/Location";
import Ticket from "./components/Ticket";
import Delete from "./components/Delete";

const ICON_MAP = {
    hamburger: Hamburger,
    logo: Logo,
    prerecorded: Prerecorded,
    isaak: Isaak,
    gawowed: Gawowed,
    mozell: Mozell,
    arrangiatore: Arrangiatore,
    concordea: Concordea,
    sonata: Sonata,
    orphonic: Orphonic,
    facebook: Facebook,
    youtube: Youtube,
    twitter: Twitter,
    instagram: Instagram,
    tiktok: Tiktok,
    foursquare: Foursquare,
    user: User,
    userfilled: UserFilled,
    search: Search,
    cart: Cart,
    arrowright: ArrowRight,
    location: Location,
    ticket: Ticket,
    delete: Delete
};

const Icon = ({name, width, ...props}) => {
    const IconComponent = ICON_MAP[name];
    return (
        <Container {...props}>
            <IconComponent width={width}/>
        </Container>
    )
};

export default Icon;
