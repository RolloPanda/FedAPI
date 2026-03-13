<h1 align="center"> FedAPI </h1>
 <p align="center"> API for Fed </p>

FEDapi

FEDapi is an enterprise-ready backend API platform designed to power modern digital game store ecosystems.

The platform provides modular services required to run a digital game distribution system similar to platforms like Steam, focusing on:

secure authentication

scalable architecture

modular domain services

operational readiness from the MVP stage

FEDapi is designed as the core backend infrastructure for digital game commerce platforms.

Vision

To build a reliable, secure, and scalable API backbone for digital game distribution platforms.

FEDapi aims to support the complete backend lifecycle of a digital game store including authentication, catalog services, order processing, payments, and entitlement management.

Core Features
Authentication & Identity

User registration

Login & session management

JWT authentication

Password hashing

User Profile

Profile management

Account data

Game Catalog

Game metadata

Game listings

Store catalog

Shopping Cart

Add/remove items

Cart persistence

Order Processing

Order creation

Order history

Order lifecycle

Payment Orchestration

Payment provider abstraction

Payment verification

Game Library (Entitlements)

User-owned games

Game access entitlement

Tech Stack

FEDapi is built using the following technologies:

Backend

Node.js

Express.js

Database

PostgreSQL

Security

JWT authentication

bcrypt password hashing

Infrastructure (planned)

Docker

OpenAPI / Swagger

Observability stack

Project Structure
FEDapi
│
├── cmd
│   └── server
│       └── main.js
│
├── internal
│   ├── config
│   ├── database
│   ├── middleware
│   ├── utils
│   │
│   └── modules
│       ├── auth
│       ├── users
│       ├── catalog
│       ├── cart
│       ├── orders
│       ├── payments
│       └── library
│
├── pkg
│   ├── logger
│   └── errors
│
├── api
│   └── openapi
│
├── deployments
│   └── docker
│
├── scripts
│
├── tests
│
├── README.md
├── .env.example
├── .gitignore
└── package.json
Directory Explanation
cmd/server

Application entry point.

main.js

Responsible for:

starting HTTP server

loading configuration

initializing modules

internal

Contains core application logic that should not be imported outside the project.

internal

Includes:

configuration

database connection

middleware

domain modules

internal/modules

Domain-based service modules.

auth
users
catalog
cart
orders
payments
library

Each module contains:

controllers

services

repositories

routes

pkg

Reusable packages shared across modules.

logger
errors
api

API specification.

openapi

Contains API documentation and schema definitions.

deployments

Infrastructure deployment configuration.

docker

Used for containerization and deployment setup.

scripts

Utility scripts.

Examples:

database migration

seeding

maintenance scripts

tests

Automated tests.

Includes:

unit tests

integration tests

Development Setup
Clone repository
git clone https://github.com/yourusername/FEDapi.git
cd FEDapi
Install dependencies
npm install
Start development server
npm run dev

Server will run at:

http://localhost:3000
Environment Variables

Create .env based on .env.example.

Example configuration:

PORT=3000

DB_HOST=localhost
DB_PORT=5432
DB_NAME=fedapi
DB_USER=postgres
DB_PASSWORD=password

JWT_SECRET=supersecret
Security Baseline

FEDapi implements baseline security practices:

JWT authentication

Password hashing with bcrypt

Secure HTTP headers

Input validation

Rate limiting (planned)

Audit logging (planned)

Observability (Planned)

Future operational features include:

structured logging

metrics collection

distributed tracing

monitoring dashboards

Future Roadmap

Planned improvements beyond MVP:

API gateway integration

service-to-service authentication

payment provider integrations

observability stack

microservice-ready architecture

CI/CD pipeline

distributed caching

Contribution

Contributions are welcome.

Future contribution guidelines will include:

coding standards

pull request workflow

commit conventions

issue tracking

License

License will be defined in future releases.

Author

Ronal Pandapotan Simbolon


<img src="https://img.shields.io/badge/node.js-backend-green">
<img src="https://img.shields.io/badge/postgresql-database-blue">
<img src="https://img.shields.io/badge/status-MVP-orange>

