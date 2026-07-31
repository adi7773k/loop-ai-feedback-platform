import { prisma } from "@/lib/db";
import { compare } from "bcryptjs";
import { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions: NextAuthOptions = {
  session: {
    strategy: "jwt",
  },

  providers: [
    CredentialsProvider({
      name: "Credentials",

      credentials: {
        workspace: {
          label: "Workspace",
          type: "text",
        },

        email: {
          label: "Email",
          type: "email",
        },

        password: {
          label: "Password",
          type: "password",
        },
      },

      async authorize(credentials) {
        // Check if all required credentials are present
        if (
          !credentials?.workspace ||
          !credentials?.email ||
          !credentials?.password
        ) {
          return null;
        }

        // Find the workspace using its unique slug
        const workspace = await prisma.workspace.findUnique({
          where: {
            slug: credentials.workspace,
          },
        });

        if (!workspace) {
          return null;
        }

        // Find the user inside the workspace
        const user = await prisma.user.findUnique({
          where: {
            workspaceId_email: {
              workspaceId: workspace.id,
              email: credentials.email,
            },
          },
        });

        if (!user) {
          return null;
        }

        // Compare the entered password with the stored hash
        const passwordMatch = await compare(
          credentials.password,
          user.passwordHash
        );

        if (!passwordMatch) {
          return null;
        }

        // Return the authenticated user
        return {
          id: user.id,
          name: user.name,
          email: user.email,
          role: user.role,
          workspaceId: user.workspaceId,
          workspaceSlug: workspace.slug,
        };
      },
    }),
  ],
  callbacks: {
  async jwt({ token, user }) {
    if (user) {
      token.id = user.id;
      token.role = user.role;
      token.workspaceId = user.workspaceId;
      token.workspaceSlug = user.workspaceSlug;
    }

    return token;
  },

  async session({ session, token }) {
    if (session.user) {
      session.user.id = token.id;
      session.user.role = token.role;
      session.user.workspaceId = token.workspaceId;
      session.user.workspaceSlug = token.workspaceSlug;
    }

    return session;
  },
},

  pages: {
    signIn: "/auth/login",
  },
};