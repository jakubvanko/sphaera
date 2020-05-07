import React, { useState } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import placeholder from "./assets/placeholder.jpg";
import { TextIcon } from "../../components/Icon";
import { ItemImage } from "../../components/ItemImage";
import { HeadingMain } from "../../components/TextType";
import { Ticket } from "../../components/Ticket";
import {
  Container,
  HeadingContainer,
  Item,
  ItemContainer,
  ItemHeader,
  AccountData,
  SmallTextLabel,
  LogoutText,
  MainTextContainer,
  SmallText,
} from "./Profile.styled";
import { logout } from "../../redux/actionCreators/user";
import { getTicketRequest } from "../../redux/actionCreators/event";
import { URL_ADMIN } from "../../scripts/constants/urls";

const Profile = ({
  user,
  events,
  getTicketPending,
  logout,
  getTicketRequest,
}) => {
  const [isEditing, setEditing] = useState(false);
  const [sentTicket, setSentTicket] = useState();

  const userName =
    user.firstName.charAt(0).toUpperCase() +
    user.firstName.slice(1) +
    " " +
    user.lastName.charAt(0).toUpperCase() +
    user.firstName.slice(1);

  return (
    <Container>
      <HeadingContainer>
        <HeadingMain>My Account</HeadingMain>
        {user.admin && <Link to={URL_ADMIN}>Admin</Link>}
        <LogoutText onClick={logout}>Log out</LogoutText>
      </HeadingContainer>
      <ItemContainer>
        <MainTextContainer>
          Welcome, {userName}
          <SmallText>
            Here you can edit your account details or print out your tickets.
          </SmallText>
        </MainTextContainer>
        <ItemImage $src={placeholder} />
        <Item>
          <ItemHeader>
            Account Details
            <TextIcon
              name={"pen"}
              text={"edit"}
              onClick={() => setEditing(true)}
            />
          </ItemHeader>
          <AccountData>
            <div>
              <SmallTextLabel>Name</SmallTextLabel>
              {userName}
            </div>
            <div>
              <SmallTextLabel>Email</SmallTextLabel>
              {user.email}
            </div>
            <div>
              <SmallTextLabel>Customer ID</SmallTextLabel>
              {user._id}
            </div>
            <div>
              <SmallTextLabel>Password</SmallTextLabel>**Encrypted**
            </div>
          </AccountData>
        </Item>
        {user.tickets.map(({ area, _id, event, price }) => {
          const ticketEvent = events.find((value) => value._id === event);
          if (ticketEvent === undefined) return null;
          const { artist, date, image } = ticketEvent;

          return (
            <React.Fragment key={_id}>
              <ItemImage $src={image} />
              <Ticket
                artist={artist}
                date={date}
                price={price}
                area={area}
                qrValue={_id}
                bottomIconName={"print"}
                bottomIconText={
                  getTicketPending && sentTicket === _id
                    ? "sending..."
                    : "send to email"
                }
                onBottomIconClick={() => {
                  setSentTicket(_id);
                  getTicketRequest(_id);
                }}
              />
            </React.Fragment>
          );
        })}
      </ItemContainer>
    </Container>
  );
};
// TODO: ON BOTTOM ICON CLICK
export default connect(
  ({ user, event }) => ({
    user: user.current,
    events: event.events,
    getTicketPending: event.getTicketPending,
  }),
  { logout, getTicketRequest }
)(Profile);
