# Multi-Auth NextJS

This project demonstrates a role-based authentication system in Next.js using the App Router architecture. It supports separate authentication flows for regular users and administrators while maintaining a single authentication backend.

## Features

- Role-based authentication (Admin and User roles)
- Protected routes based on authentication status and role
- Dedicated admin dashboard and user dashboard
- Middleware-based route protection
- Secure credential handling with NextAuth.js
- TypeScript integration for type safety

## Project Structure

```
├── app/
│   ├── api/
│   │   └── auth/
│   │       └── [...nextauth]/
│   │           └── route.ts
│   ├── admin/
│   │   ├── auth/
│   │   │   ├── signin/
│   │   │   │   └── page.tsx
│   │   │   └── error/
│   │   │       └── page.tsx
│   │   └── dashboard/
│   │       └── page.tsx
│   ├── auth/
│   │   ├── signin/
│   │   │   └── page.tsx
│   │   └── error/
│   │       └── page.tsx
│   ├── dashboard/
│   │   └── page.tsx
│   ├── unauthorized/
│   │   └── page.tsx
│   ├── layout.tsx
│   └── page.tsx
├── lib/
│   └── auth.ts
├── types/
│   └── next-auth.d.ts
├── middleware.ts
└── next.config.js
```

## Authentication Flow

1. Users visit either the admin login page (`/admin/auth/signin`) or the user login page (`/auth/signin`).
2. After successful authentication, users are redirected to the appropriate dashboard based on their role.
3. Admins can access `/admin/*` routes, while regular users are redirected to an unauthorized page if they try to access admin routes.
4. Middleware protects all routes based on authentication status and user role.

## Getting Started

### Prerequisites

- Node.js 18.x or higher
- npm or yarn

### Installation

1. Clone the repository
```bash
git clone https://github.com/yourusername/multi-auth-nextjs.git
cd multi-auth-nextjs
```

2. Install dependencies
```bash
npm install
# or
yarn install
```

3. Set up environment variables
Create a `.env.local` file in the root directory:
```
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=your-secret-key-here
```

4. Run the development server
```bash
npm run dev
# or
yarn dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

## User Credentials

For testing purposes, use the following credentials:

### Admin User
- Email: admin@example.com
- Password: admin123

### Regular User
- Email: user@example.com
- Password: user123

## Implementation Details

### Authentication Configuration

Authentication is handled by a single NextAuth configuration in `lib/auth.ts`. This configuration:
- Uses CredentialsProvider for email/password authentication
- Stores user role information in the JWT token
- Passes role information to the session object
- Configures authentication callbacks for JWT and session handling

### Middleware

Route protection is implemented in `middleware.ts` which:
- Checks the user's authentication status
- Verifies the user's role for accessing protected routes
- Redirects users to the appropriate pages based on authentication status and role
- Prevents redirect loops by carefully managing path matching

### TypeScript Definitions

Custom type definitions in `types/next-auth.d.ts` extend the default NextAuth types to include:
- User role information in the session
- Role information in the JWT token
- Additional user fields required by the application

## Common Issues and Solutions

### Redirect Loops

If you encounter redirect loops:
- Ensure you have only one NextAuth handler in your API routes
- Check that your middleware conditions don't create circular redirects
- Verify that your authentication callbacks are correctly setting user roles

### Authentication Failing

If authentication is failing:
- Check the user credentials in the mock database
- Ensure the `authorize` function in CredentialsProvider is returning the correct user object
- Verify that environment variables are set correctly

## Next Steps for Development

- Connect to a real database for user storage
- Implement email verification
- Add password reset functionality
- Enhance security with MFA (Multi-Factor Authentication)
- Add more granular permission controls beyond basic roles
