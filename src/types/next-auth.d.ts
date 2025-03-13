// FILE: src/types/next-auth.d.ts
import type { DefaultSession } from "next-auth";

declare module "next-auth" {
  /**
   * Returned by `useSession`, `getSession` and received as a prop on the `SessionProvider` React Context
   */
  interface Session {
    user: {
      id: string;
      name: string;
      email: string;
      role: string;
    } & DefaultSession["user"];
  }

  /**
   * The shape of the user object returned in the OAuth providers' `profile` callback,
   * or the second parameter of the `session` callback, when using a database.
   */
  interface User {
    id: string;
    name: string;
    email: string;
    role: string;
  }
}

// Type augmentation for JWT
declare module "next-auth/jwt" {
  interface JWT {
    user?: {
      id: string;
      name: string;
      email: string;
      role: string;
    };
  }
}