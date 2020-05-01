const {gql} = require("apollo-server-express");

const typeDefs = gql`
    # Basic scalars
    scalar Date

    # Basic types
    type Area {
        name: String!
        price: Float!
        capacity: Int!
        reserved: Int!
    }

    type Event {
        _id: ID!
        artist: String!
        date: Date!
        image: String!
        areas: [Area]!
    }

    type Ticket {
        _id: ID!
        event: Event!
        area: String!
        price: Float!
        owner: User!
        bought: Date!
    }

    type User {
        _id: ID!
        firstName: String!
        lastName: String!
        email: String!
        admin: Boolean
        funds: Float!
        tickets: [Ticket]
    }

    # Inputs
    input AreaInput {
        name: String!
        price: Float!
        capacity: Int!
        reserved: Int!
    }

    input CreateEventInput {
        artist: String!
        date: Date!
        image: String!
        areas: [AreaInput]!
    }

    input UpdateEventInput {
        _id: ID!
        artist: String
        date: Date
        image: String
        areas: [AreaInput]
    }

    input DeleteEventInput {
        _id: ID!
    }

    input BuyTicketInput {
        event: ID!
    }

    input CreateUserInput {
        firstName: String!
        lastName: String!
        email: String!
        password: String!
    }

    input UpdateUserInput {
        _id: ID!
        firstName: String
        lastName: String
        email: String
        password: String
    }

    input DeleteUserInput {
        _id: ID!
    }

    input LoginUserInput {
        email: String!
        password: String!
    }

    input ResetPasswordInput {
        email: String!
    }
    
    input SingleUploadInput {
        file: Upload!
    }

    # Payloads
    type EventsPayload {
        success: Boolean!
        events: [Event]!
    }
    
    type EventPayload {
        success: Boolean!
        event: Event
    }
    
    type UserPayload {
        success: Boolean!
        user: User
    }

    type LoginUserPayload {
        success: Boolean!
        token: String
    }

    type ResetPasswordPayload {
        success: Boolean!
    }

    type BuyTicketPayload {
        success: Boolean!
        ticket: Ticket
    }
    
    type SingleUploadPayload {
        success: Boolean!
        name: String
    }

    type Query {
        events: EventsPayload!
        event(_id: ID!): EventPayload!
        user(_id: ID!): UserPayload!
        ticket(_id: ID!): BuyTicketPayload!
    }

    type Mutation {
        createEvent(input: CreateEventInput!): EventPayload!
        updateEvent(input: UpdateEventInput!): EventPayload!
        deleteEvent(input: DeleteEventInput!): EventPayload!
        createUser(input: CreateUserInput!): UserPayload!
        updateUser(input: UpdateUserInput!): UserPayload!
        deleteUser(input: DeleteUserInput!): UserPayload!
        loginUser(input: LoginUserInput!): LoginUserPayload!
        resetPassword(input: ResetPasswordInput!): ResetPasswordPayload!
        buyTicket(input: BuyTicketInput!): BuyTicketPayload!
        singleUpload(input: SingleUploadInput!): SingleUploadPayload!
    }
`;

module.exports = typeDefs;
