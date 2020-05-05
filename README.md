# **Sphaera**

Sphaera is a full-stack web application created to showcase my expertise in the MERN stack (MongoDB, Express, React, Node.js). It is meant to serve as a ticket-ordering website for an imaginary concert venue of the same name. You can visit the live page at [sphaera.jakubvanko.com](https://sphaera.jakubvanko.com).

#### Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Used Technologies](#used-technologies)
- [Database](#database)
- [API Endpoints](#api-endpoints)
- [Deployment](#deployment)
- [Conclusion](#conclusion)


## Introduction

Every software developer worth their salt should have a portfolio consisting of projects they are most proud of. Moreover, creating interesting projects is the best way to master the technologies of our field. Therefore, I have decided to recreate one of my old projects using the latest technologies along with time-tested programming methodologies to create a professional website that would adhere to all industry standards.


## Features

##### Back-End
- REST API
- GraphQL endpoint
- Login system using JWT
- Custom HTML email templates
- Auto-generated PDF tickets

##### Front-End
- Responsive web design
- Custom reusable components
- Complete form validation
- Custom content management system for adding events
- Google Maps integration
- Custom login for smooth 100vh mouse scroll
- Support for any SVG seat layout
- Interactive seat area selection

![Seat Area](https://ctrlv.cz/shots/2019/06/08/JNxq.png)


## Used Technologies:

##### Back-End
- Node.js
  - Express
  - pdf-lib
  - jsonwebtoken
  - dotenv
  - nodemailer
  - multer
- GraphQL
  - apollo-server-express
- MongoDB
  - mongoose

##### Front-End
- React.js v16
  - React Hooks
  - React Router
- Redux.js
  - Redux Saga (previously Redux Thunk)
- styled-components (previously Sass)
- formik
- react-scroll, react-select, react-spinners
- axios
- google-map-react

##### Code quality
- Jest
- Prettier
- ESLint

##### Other technologies
- Adobe XD
- Adobe Illustrator
- Adobe Premiere Pro


## Database

### Database structure
The database is divided into three collections: **events**, **users**, and **tickets**.

##### Events document example
```
_id: ObjectId("5cd7e8299f18d2348414481")
artist: "Marcus & Martinus"
date: 2020-12-12T00:00:00.000+00:00
image: "1588429036231.jpg"
areas: Array
  0: Object
    name: "floor"
    capacity: 5
    reserved: 2
    price: 249.99
  ...
```

##### Users document example
```
_id: ObjectId("5cd7484fef582348414481")
firstName: "John"
lastName: "Doe"
email: "john.doe@email.com"
password: "cb96e8ec5007f9ecf0304263b37871edee1a1651c25d368a4a45..."
salt: "fdbae4cf649e279466b411e91677febb4994fa"
admin: false
funds: 254.07
tickets: Array
  0: ObjectID("5cd811c0fa385117982fcff1")
```

##### Tickets document example
```
_id: ObjectID("5cd811c0fa385117982fcff1")
event: ObjectId("5cd7e8299f18d2348414481")
area: "floor"
price: 15.24
owner: ObjectId("5cd7484fef582348414481")
bought: 2020-03-18T17:30:23.549+00:00
```

## API Endpoints
https://sphaera.jakubvanko.com/api/...
```
.../events		(GET, POST-admin)
.../events/id		(GET, PATCH-admin, DELETE-admin)
.../uploads		(POST-admin)
.../uploads/id		(GET)
.../users		(POST)
.../users/current	(GET-login, DELETE-login, PATCH-login)
.../users/id		(GET-admin, DELETE-admin, PATCH-admin)
.../users/login		(POST)
.../users/resetpassword	(POST)
.../tickets		(GET-login, POST-login)

```


## Deployment

The project was deployed on a DigitalOcean droplet where it is being managed by Nginx.

Frontend and backend both feature an auto-deployment Node.js script ("npm run deploy"). Newly included back-end node modules are not, however, automatically copied and need to be installed separately on the server ("npm install").


## Conclusion

The project was finished successfully. All features have been implemented while ensuring that further development, if needed, is still simple and available.
