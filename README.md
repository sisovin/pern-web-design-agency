# PERN Web Design Agency

This project is a web design agency application built with the PERN stack (PostgreSQL, Express, React, Node.js). It includes various features such as authentication, database management, caching, and more.

## Key Technology Integrations

1. **Authentication System**:
   - JWT with refresh tokens (auto-rotation)
   - Argon2 for password hashing
   - Prisma middleware for token validation

2. **Database (PostgreSQL + Prisma)**:
   ```prisma
   // schema.prisma
   model User {
     id           String   @id @default(uuid())
     email        String   @unique
     password     String   // Hashed with Argon2
     refreshToken String?
     deletedAt    DateTime? @softDelete
     createdAt    DateTime @default(now())
   }
   ```

3. **Redis Caching**:
   - Session management
   - Rate limiting
   - API response caching

4. **Soft-Delete Design**:
   ```typescript
   // prisma/softDelete.ts
   const softDeleteMiddleware: Prisma.Middleware = async (params, next) => {
     if (params.action === 'delete') {
       params.action = 'update'
       params.args.data = { deletedAt: new Date() }
     }
     return next(params)
   }
   ```

5. **Template Conversion**:
   - Original Bootstrap components converted to React (e.g., carousels → React Slick)
   - HTML forms → React Hook Form with Zod validation
   - jQuery animations → Framer Motion/React Spring

## Setting Up the Development Environment

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/pern-web-design-agency.git
   cd pern-web-design-agency
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up environment variables:
   - Create a `.env` file in the root directory and add the following variables:
     ```
     DATABASE_URL=your_database_url
     JWT_SECRET=your_jwt_secret
     JWT_EXPIRATION=your_jwt_expiration
     REDIS_URL=your_redis_url
     ```

   - Create a `.env.development` file in the root directory and add development-specific variables if needed.

4. Run Prisma migrations:
   ```bash
   npx prisma migrate dev
   ```

## Running the Application

1. Start the development server:
   ```bash
   npm run dev
   ```

2. Open your browser and navigate to `http://localhost:3000` to see the application in action.

## Full Project Structure

Below is a comprehensive structure for the PERN stack web design agency application that supports multiple developers, complex features, TypeScript type sharing, and SSR.

```
pern-web-design-agency/
├── turbo.json                    # Turborepo configuration
├── package.json                  # Root package.json for workspaces
├── tsconfig.json                 # Base TypeScript configuration
├── .eslintrc.js                  # Base ESLint configuration
├── .prettierrc                   # Prettier configuration
├── .github/                      # GitHub workflows and templates
│   └── workflows/
│       └── ci.yml                # CI pipeline configuration
├── apps/                         # Application packages
│   ├── web/                      # Frontend React application with SSR
│   │   ├── public/               # Static assets
│   │   ├── src/
│   │   │   ├── components/       # Reusable UI components
│   │   │   │   ├── common/       # Common UI elements
│   │   │   │   ├── layout/       # Layout components
│   │   │   │   └── features/     # Feature-specific components
│   │   │   ├── hooks/            # Custom React hooks
│   │   │   ├── pages/            # Page components/routes
│   │   │   ├── services/         # API service integrations
│   │   │   ├── store/            # State management
│   │   │   ├── styles/           # Global styles
│   │   │   ├── utils/            # Utility functions
│   │   │   ├── i18n/             # Internationalization
│   │   │   └── App.tsx           # Main app component
│   │   ├── next.config.js        # Next.js config (if using Next.js for SSR)
│   │   └── package.json
│   │
│   └── api/                      # Backend Express application
│       ├── src/
│       │   ├── config/           # Configuration files
│       │   ├── controllers/      # Route controllers
│       │   ├── middleware/       # Express middleware
│       │   ├── models/           # Database models
│       │   ├── routes/           # API routes
│       │   ├── services/         # Business logic services
│       │   │   ├── auth/         # Authentication services
│       │   │   ├── email/        # Email services
│       │   │   ├── payment/      # Payment processing
│       │   │   └── storage/      # File storage services
│       │   ├── utils/            # Utility functions
│       │   ├── validators/       # Request validation
│       │   └── app.ts            # Express app setup
│       ├── .env.example          # Example environment variables
│       └── package.json
│
├── packages/                     # Shared packages
│   ├── ui/                       # Shared UI component library
│   │   ├── src/
│   │   │   ├── components/
│   │   │   └── index.ts
│   │   └── package.json
│   │
│   ├── config/                   # Shared configuration packages
│   │   ├── eslint-config/
│   │   └── tsconfig/
│   │
│   ├── utils/                    # Shared utilities
│   │   ├── src/
│   │   └── package.json
│   │
│   └── types/                    # Shared TypeScript types
│       ├── src/
│       │   ├── api/              # API response/request types
│       │   ├── models/           # Data model types
│       │   └── index.ts
│       └── package.json
│
├── scripts/                      # Build and development scripts
│   ├── setup.js                  # Project setup script
│   └── seed-db.js                # Database seeding script
│
├── docs/                         # Documentation
│   ├── api/                      # API documentation
│   ├── architecture/             # Architecture diagrams
│   └── development/              # Development guides
│
└── .env                          # Root environment variables
```

## Additional Resources and Configuration

### Database Migrations and Seeding

```
apps/api/src/db/
├── migrations/                  # Database migrations
├── seeds/                       # Seed data
└── knexfile.js                  # Knex configuration
```

### Testing Structure

```
apps/web/src/tests/
├── unit/                        # Unit tests
├── integration/                 # Integration tests
└── e2e/                         # End-to-end tests

apps/api/src/tests/
├── unit/                        # Unit tests
├── integration/                 # Integration tests
└── fixtures/                    # Test fixtures
```

### Internationalization

```
apps/web/src/i18n/
├── locales/                     # Translation files
│   ├── en/
│   └── [other languages]/
└── config.ts                    # i18n configuration
```

### Service Integration Setup

```
apps/api/src/services/
├── cache/                       # Redis cache service
│   ├── client.ts
│   └── index.ts
├── queue/                       # Message queue service
│   ├── producers/
│   ├── consumers/
│   └── index.ts
├── search/                      # Search engine integration
└── storage/                     # File storage (S3, etc.)
```

## Key Features of This Structure

1. **Monorepo with Workspaces**: Organized using Turborepo with clear separation of apps and packages
2. **Shared Types**: Central location for TypeScript types shared between frontend and backend
3. **Feature-based Organization**: Components and logic organized by feature for better scalability
4. **Service-oriented Backend**: Separated services for various complex features
5. **SSR Support**: Structure accommodates server-side rendering (likely using Next.js)
6. **Internationalization**: Dedicated structure for multi-language support
7. **Testing Infrastructure**: Organized testing folders for different testing levels
8. **Documentation**: Dedicated docs folder for comprehensive documentation
