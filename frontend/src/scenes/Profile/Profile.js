import React, {useState} from "react";

import test3 from "../Tickets/assets/test3.jpg";
import test2 from "../Tickets/assets/test2.jpg";
import placeholder from "./assets/placeholder.jpg";
import {TextIcon} from "../../components/Icon";
import {HeadingMain} from "../../components/TextType";
import {Ticket} from "../../components/Ticket";
import {
    Container,
    HeadingContainer,
    Item,
    ItemImage,
    ItemContainer,
    ItemHeader,
    AccountData,
    SmallTextLabel,
    LogoutText,
    MainTextContainer,
    SmallText
} from "./Profile.styled";

const TICKETS = [{
    artist: "Marcus & Martinus",
    date: new Date("December 17, 2020 12:25:41"),
    image: test3,
    seat: "1",
    price: "22.48",
    _id: "4f48as4f9a4fas9f8asfasfevent55"
}, {
    artist: "Nickelback",
    date: new Date("December 17, 2020 12:25:41"),
    image: test2,
    seat: "1",
    price: "215.01",
    _id: "4f4iohwnfnaiosfjpasfjsfevent55"
}];

const Profile = () => {
    const [isEditing, setEditing] = useState(false);

    return (
    <Container>
        <HeadingContainer>
            <HeadingMain>My Account</HeadingMain>
            <LogoutText>Log out</LogoutText>
        </HeadingContainer>
        <ItemContainer>
            <MainTextContainer>
                Welcome, Jakub Vanko
                <SmallText>Here you can edit your account details or print out your tickets.</SmallText>
            </MainTextContainer>
            <ItemImage $src={placeholder}/>
            <Item>
                <ItemHeader>Account Details<TextIcon name={"pen"} text={"edit"} onClick={() => setEditing(true)}/></ItemHeader>
                <AccountData>
                    <div><SmallTextLabel>Name</SmallTextLabel>Jakub Vanko</div>
                    <div><SmallTextLabel>Email</SmallTextLabel>kubko.vanko@gmail.com</div>
                    <div><SmallTextLabel>Customer ID</SmallTextLabel>nfaini841f5saf151fas55</div>
                    <div><SmallTextLabel>Password</SmallTextLabel>**Encrypted**</div>
                </AccountData>
            </Item>
            {TICKETS.map(({image, artist, date, seat, _id, price}) => <React.Fragment key={_id}>
                <ItemImage $src={image}/>
                <Ticket artist={artist} date={date} price={price} seat={seat} qrValue={_id}
                        bottomIconName={"print"} bottomIconText={"print"}/>
            </React.Fragment>)}
        </ItemContainer>
    </Container>
)};

export default Profile;
