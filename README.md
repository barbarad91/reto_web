# Table of contents

- [Welcome to The Phone Cave](#general-info)
- [Technologies](#techonologies)
- [Install](#install-instructions)
- [Usage](#usage-instructions)

## Welcome to The Phone Cave

[![Deploy to Heroku (Server)](https://github.com/barbarad91/reto_web/actions/workflows/server.yml/badge.svg)](https://github.com/barbarad91/reto_web/actions/workflows/server.yml)
[![Depfu](https://badges.depfu.com/badges/62012664d2a79ea7259eed132ced0d2b/overview.svg)](https://depfu.com/github/barbarad91/reto_web?project_id=23660)

This project is a challenge from Ironhack Web Development Bootcamp. Original repository can be found [here](https://github.com/VictorRodriguezIronhack/reto_web).
It displays available mobile phones and has a detailed view page for each one of them.

## Technologies

The data is located in a Mongo DB. It is served through an API REST built using Express.js and Node.js.
The client side is built with React and Typescript, using Material-UI.

Server side has been deployed to Heroku and client side has been deployed to Vercel.

## Install

```bash
cd client
npm install
cd ../server
npm install
```

## Usage

### Local

If you have downloaded the project, you can run it by opening two terminals (one for the server side and another one for the client side)

- Server

```bash
cd server
npm start
```

- Client

```bash
cd client
npm start
```

### Web

You can access the web application directly [here](https://reto-web.vercel.app)

## Endpoints Table

### Client

| Verb | Endpoint       | Result        |
| ---- | -------------- | ------------- |
| GET  | "/"            | Phones list   |
| GET  | "/details/:id" | Phone details |

### Server

| Verb | Endpoint                | Result                                                                 |
| ---- | ----------------------- | ---------------------------------------------------------------------- |
| GET  | "/api/phones/all"       | All phones data from DB (id, name, manufacturer and image projections) |
| GET  | "/api/phones/:phone_id" | Selected phone full DB information                                     |

## Author

Bárbara Díaz

- Github: [@barbarad91](https://github.com/barbarad91)
- LinkedIn: [barbaradiazduran](https://www.linkedin.com/in/barbaradiazduran/)
- Twitter: [@barbarad91](https://twitter.com/barbarad91)
