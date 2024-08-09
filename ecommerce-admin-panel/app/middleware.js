import { getToken } from 'next-auth/jwt';
import { NextResponse } from 'next/server';

export async function middleware(req) {
    console.log('Middleware triggered'); // Add this line for debugging

    const token = await getToken({ req, secret: process.env.NEXTAUTH_SECRET });

    const url = req.nextUrl.clone();

    if (!token && url.pathname.startsWith('/api/')) {
        console.log('No token found, redirecting to /auth/signin'); // Add this line for debugging
        url.pathname = '/auth/signin';
        return NextResponse.redirect(url);
    }

    return NextResponse.next();
}

export const config = {
    matcher: ['/api/:path*'], // Apply middleware to all API routes
};
