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

    input CreateTicketInput {
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

    input UpdatePasswordInput {
        password: String!
    }
    
    # Payloads    
    type CreateEventPayload {
        success: Boolean!
        event: Event
    }
    
    type UpdateEventPayload {
        success: Boolean!
        event: Event
    }
    
    type DeleteEventPayload {
        success: Boolean!
    }
    
    type CreateUserPayload {
        success: Boolean!
        user: User
    }
    
    type UpdateUserPayload {
        success: Boolean!
        user: User
    }
    
    type DeleteUserPayload {
        success: Boolean!
    }
    
    type LoginUserPayload {
        success: Boolean!
        token: String
    }
    
    type ResetPasswordPayload {
        success: Boolean!
    }
    
    type UpdatePasswordPayload {
        success: Boolean!
    }
    
    type CreateTicketPayload {
        success: Boolean!
        ticket: Ticket
    }

    type Query {
        events: [Event]
        event(_id: ID!): Event
        user(_id: ID!): User
    }

    type Mutation {
        createEvent(input: CreateEventInput!): CreateEventPayload!
        updateEvent(input: UpdateEventInput!): UpdateEventPayload!
        deleteEvent(input: DeleteEventInput!): DeleteEventPayload!
        createUser(input: CreateUserInput!): CreateUserPayload!
        updateUser(input: UpdateUserInput!): UpdateUserPayload!
        deleteUser(input: DeleteUserInput!): DeleteUserPayload!
        loginUser(input: LoginUserInput!): LoginUserPayload!
        resetPassword(input: ResetPasswordInput!): ResetPasswordPayload!
        updatePassword(input: UpdatePasswordInput!): UpdatePasswordPayload!
        createTicket(input: CreateTicketInput!): CreateTicketPayload!
    }
`;
