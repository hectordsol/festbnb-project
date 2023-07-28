import { NextResponse } from "next/server";

export function middleware(request: Request){
    console.log("Middleware!")

    console.log("method " + request.method)
    console.log("Url " + request.url)

    const origin = request.headers.get('origin')

    console.log("Header " + request.headers)
    console.log("origin " + origin)
    return NextResponse.next();
}

export const config = {
    matcher: ['/about/:path*', '/login/:path*', '/pepito/' ],
}

/*
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
    return NextResponse.redirect(new URL('/home', request.url))
}

// See "Matching Paths" below to learn more
export const config = {
    matcher: '/about/:path*',
}*/
