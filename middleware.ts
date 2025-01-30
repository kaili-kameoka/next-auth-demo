import {NextRequest, NextResponse} from "next/server";
import {isAuthenticated} from "@/lib/amplify/server";

export async function middleware(request: NextRequest) {
	const response = NextResponse.next();
	const isAuth = await isAuthenticated(request, response);
	console.log('isAuth', isAuth);
	if (isAuth) return response;
	return NextResponse.redirect(new URL('/login', request.url));
}

export const config = {
	matcher: ['/dashboard']
}