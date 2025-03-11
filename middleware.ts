export { auth as middleware } from "@/auth";

export const config = {
  matcher: ["/((?!api/seed|api|_next/static|_next/image|favicon.ico|logo.png).*)"],
};
