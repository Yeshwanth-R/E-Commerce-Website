import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import GitHubProvider from "next-auth/providers/github";
import { MongoDBAdapter } from "@auth/mongodb-adapter";
import clientPromise from "@/lib/db";

const adminEmails = ["yeshuyeshwanth2005@gmail.com"]

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
    async session(session, user) {
      console.log(session?.user?.email)
      if (adminEmails.includes(session?.user?.email)) {
        return session
      } else {
        return false
      }
    }
  }


};


export const GET = (req, res) => NextAuth(req, res, options);
export const POST = (req, res) => NextAuth(req, res, options);
