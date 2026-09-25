import { NextResponse } from "next/server";

export function middleware() {
  return new NextResponse("Gone", { status: 410 });
}

export const config = {
  matcher: ["/items/magic"],
};
