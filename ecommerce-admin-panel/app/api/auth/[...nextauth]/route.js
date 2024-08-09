import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import GitHubProvider from "next-auth/providers/github";
import { MongoDBAdapter } from "@auth/mongodb-adapter";
import clientPromise from "@/lib/db";

const adminEmails = ["yeshuyeshwanth2005@gmail.com"]
//5:25:03 

const options = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET,
      httpOptions: {
        timeout: 10000, // increase timeout to 10 seconds
      },
    }),
    GitHubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
      httpOptions: {
        timeout: 10000, // increase timeout to 10 seconds
      },
    }),
  ],
  adapter: MongoDBAdapter(clientPromise),
  database: process.env.MONGODB_URI,
  callbacks: {
    async signIn({ user }) {
      if (adminEmails.includes(user.email)) {
        return true; // Allow sign-in
      } else {
        return false; // Deny sign-in
      }
    },
    async session({ session, user }) {
      // Customize the session object here if needed
      return session;
    },
  },
};
import { NextResponse } from 'next/server';
import { getServerSession } from 'next-auth/next';
import { authOptions } from '@/app/api/auth/[...nextauth]/route'; // Adjust path as necessary


export async function isAdminRequest(req, res) {
  try {
    const session = await getServerSession(req, res, authOptions);

    if (!session || !adminEmails.includes(session.user?.email)) {
      // Unauthorized access
      res.status(401).json({ error: 'You are not authorized to access this resource' });
      return;
    }

    // Authorized
    return session;
  } catch (error) {
    // Handle error (e.g., log it)
    res.status(500).json({ error: 'Internal server error' });
  }
}


export const GET = (req, res) => NextAuth(req, res, options);
export const POST = (req, res) => NextAuth(req, res, options);
