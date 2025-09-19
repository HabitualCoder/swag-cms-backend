# swag-cms-backend

A production-minded CMS backend built with **TypeScript**, **Express**, **PostgreSQL** and **Prisma**.  
Designed for learning and for showing in interviews: layered architecture, clear typing, migrations, and a simple REST API for users, auth, and posts.

## Features
- TypeScript + Express REST API
- PostgreSQL with Prisma ORM + migrations
- JWT authentication (register / login)
- Users, Posts (CRUD) with role support (admin/editor)
- Centralized error handling, logging, and request validation
- Ready for Postman testing and CI integration

## Tech
Node.js, TypeScript, Express, Prisma, PostgreSQL, Jest (optional), ESLint, Prettier

## Quick start
```bash
git clone <repo>
cd swag-cms-backend
# update .env with your DATABASE_URL
npm install
npx prisma migrate dev --name init
npm run dev
