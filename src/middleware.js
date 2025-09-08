import { NextResponse } from "next/server";

export function middleware(request) {
  console.log("Middleware is running");
//   if (request.nextUrl.pathname === "/about") {
    
//   }

    return NextResponse.redirect(new URL("/login", request.url));

}

export const config = {
  matcher: ["/about", "/studentlist/:path*"],
};
