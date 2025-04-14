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
