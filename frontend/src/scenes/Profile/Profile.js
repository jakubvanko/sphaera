import { Formik, Form as FormikForm } from "formik";
import React, { useState, useRef } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import placeholder from "./assets/placeholder.jpg";
import { TextIcon } from "../../components/Icon";
import { ItemImage } from "../../components/ItemImage";
import { HeadingMain, TextLabeled } from "../../components/TextType";
import { Ticket } from "../../components/Ticket";
import {
  Container,
  HeadingContainer,
  Item,
  ItemContainer,
  ItemHeader,
  AccountData,
  LogoutText,
  MainTextContainer,
  SmallText,
  Form,
} from "./Profile.styled";
import { logout } from "../../redux/actionCreators/user";
import { getTicketRequest } from "../../redux/actionCreators/event";
import { URL_ADMIN } from "../../scripts/constants/urls";
import { InputField } from "../../components/Input";

const Profile = ({
  user,
  events,
  getTicketPending,
  logout,
  getTicketRequest,
}) => {
  const [isEditing, setEditing] = useState(false);
  const [sentTicket, setSentTicket] = useState();
  const formRef = useRef();

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
              name={isEditing ? "save" : "pen"}
              text={isEditing ? "save" : "edit"}
              onClick={() => {
                if (isEditing) {
                  console.log(formRef.current);
                  formRef.current.handleSubmit();
                }
                setEditing(!isEditing);
              }}
            />
          </ItemHeader>
          <>
            {!isEditing ? (
              <AccountData>
                <TextLabeled label={"First name"}>{user.firstName}</TextLabeled>
                <TextLabeled label={"Last name"}>{user.lastName}</TextLabeled>
                <TextLabeled label={"Email"}>{user.email}</TextLabeled>
                <TextLabeled label={"Customer ID"}>{user._id}</TextLabeled>
                <TextLabeled label={"Funds"}>
                  ${user.funds.toFixed(2)}
                </TextLabeled>
                <TextLabeled label={"Password"}>**Encrypted**</TextLabeled>
              </AccountData>
            ) : (
              <Formik
                innerRef={formRef}
                initialValues={{
                  firstName: user.firstName,
                  lastName: user.lastName,
                  email: user.email,
                  password: "",
                  confirmPassword: "",
                }}
                onSubmit={(values, { resetForm }) => {
                  const { firstName, lastName, email, password } = values;
                  console.log("HANDLED SUBMIT");
                }}
              >
                {({ ...props }) => (
                  <Form as={FormikForm}>
                    <InputField
                      label={"First name"}
                      name={"firstName"}
                      labelActive={true}
                      {...props}
                    />
                    <InputField
                      label={"Last name"}
                      name={"lastName"}
                      labelActive={true}
                      {...props}
                    />
                    <InputField
                      label={"Email address"}
                      name={"email"}
                      labelActive={true}
                      {...props}
                    />
                    <InputField
                      label={"Password"}
                      name={"password"}
                      type={"password"}
                      {...props}
                    />
                    <InputField
                      label={"Confirm password"}
                      name={"confirmPassword"}
                      type={"password"}
                      {...props}
                    />
                  </Form>
                )}
              </Formik>
            )}
          </>
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
