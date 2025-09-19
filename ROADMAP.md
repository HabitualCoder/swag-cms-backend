# swag-cms-backend Roadmap

## Initiative
**Build a secure, scalable CMS backend with Express, PostgreSQL, and Prisma — delivering APIs for authentication, content management, and user roles.**

---

## Epics & Stories

### Epic 1 — Core Setup & Infrastructure
- [ ] Initialize project with TypeScript, Express, Prisma, ESLint, Prettier.
- [ ] Configure PostgreSQL schema with Prisma.
- [ ] Setup dotenv for environment configs.
- [ ] Add initial healthcheck endpoint (`GET /health`).
- [ ] Add GitHub repo with CI (lint/test).

### Epic 2 — Authentication & Authorization
- [ ] User registration (`POST /api/auth/register`) with email/password.
- [ ] User login (`POST /api/auth/login`) with JWT token response.
- [ ] Middleware to verify JWT for protected routes.
- [ ] Middleware for role-based authorization (`admin`, `editor`).
- [ ] Token expiration & refresh flow.

### Epic 3 — User Management
- [ ] API to fetch all users (admin only).
- [ ] API to fetch user profile by ID.
- [ ] API to update user details.
- [ ] API to delete user (admin only).
- [ ] Password hashing & password reset endpoint.

### Epic 4 — Content Management
- [ ] Create Post API (`POST /api/posts`).
- [ ] Read Posts API (`GET /api/posts`) with pagination/filter.
- [ ] Read single post by slug (`GET /api/posts/:slug`).
- [ ] Update Post (`PATCH /api/posts/:id`).
- [ ] Delete Post (`DELETE /api/posts/:id`).
- [ ] Add categories/tags to posts.
- [ ] Draft → Publish workflow with `published` flag.

### Epic 5 — System Utilities & Monitoring
- [ ] Centralized error handling middleware.
- [ ] Logging middleware (morgan/pino).
- [ ] Rate limiting (to prevent brute force).
- [ ] Helmet (security headers).
- [ ] Healthcheck + `/metrics` endpoint.

### Epic 6 — Testing & Documentation
- [ ] Postman collection for all APIs.
- [ ] Unit tests for services (Jest/Vitest).
- [ ] Integration tests for routes (supertest).
- [ ] Seed script for local dev data.
- [ ] Improve README with setup, API docs.

---
