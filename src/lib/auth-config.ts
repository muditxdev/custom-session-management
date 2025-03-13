import { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

// Mock user database (replace with your actual authentication logic)
const users = [
  {
    id: "1",
    name: "User",
    email: "user@example.com",
    password: "user123",
    role: "user",
  },
  {
    id: "2",
    name: "Admin",
    email: "admin@example.com",
    password: "admin123",
    role: "admin",
  },
];

// Base auth options for both user and admin
const baseAuthConfig: Partial<NextAuthOptions> = {
  session: {
    strategy: "jwt",
    maxAge: 30 * 24 * 60 * 60, // 30 days
  },
  callbacks: {
    jwt: async ({ token, user }) => {
      if (user) {
        token.user = {
          id: user.id,
          name: user.name,
          email: user.email,
          role: user.role as string,
        };
      }
      return token;
    },
    session: async ({ session, token }) => {
      if (token.user) {
        session.user = token.user;
      }
      return session;
    },
  },
};

// User auth configuration
export const userAuthConfig: NextAuthOptions = {
  ...baseAuthConfig,
  providers: [
    CredentialsProvider({
      name: "User Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) {
          return null;
        }
        
        const user = users.find(
          (user) => 
            user.email === credentials.email && 
            user.password === credentials.password &&
            user.role === "user"
        );
        
        if (!user) {
          return null;
        }
        
        return {
          id: user.id,
          name: user.name,
          email: user.email,
          role: user.role,
        };
      },
    }),
  ],
  cookies: {
    sessionToken: {
      name: `user-session-token`,
      options: {
        httpOnly: true,
        sameSite: "lax",
        path: "/",
        secure: process.env.NODE_ENV === "production",
      },
    },
  },
  pages: {
    signIn: '/auth/signin',
    error: '/auth/error',
  },
};

// Admin auth configuration
export const adminAuthConfig: NextAuthOptions = {
  ...baseAuthConfig,
  providers: [
    CredentialsProvider({
      name: "Admin Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) {
          return null;
        }
        
        const user = users.find(
          (user) => 
            user.email === credentials.email && 
            user.password === credentials.password &&
            user.role === "admin"
        );
        
        if (!user) {
          return null;
        }
        
        return {
          id: user.id,
          name: user.name,
          email: user.email,
          role: user.role,
        };
      },
    }),
  ],
  cookies: {
    sessionToken: {
      name: `admin-session-token`,
      options: {
        httpOnly: true,
        sameSite: "lax",
        path: "/",
        secure: process.env.NODE_ENV === "production",
      },
    },
  },
  pages: {
    signIn: '/admin/auth/signin',
    error: '/admin/auth/error',
  },
};