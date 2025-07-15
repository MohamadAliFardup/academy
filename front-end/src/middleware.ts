import { getToken } from 'next-auth/jwt';
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export async function middleware(req: NextRequest) {
    const token = await getToken({ req, secret: process.env.NEXTAUTH_SECRET });
    const isAuth = !!token;

    const protectedRoutes = ['/dashboard', '/courses'];

    if (protectedRoutes.some((path) => req.nextUrl.pathname.startsWith(path)) && !isAuth) {
        return NextResponse.redirect(new URL('/login', req.url));
    }

    return NextResponse.next();
}
