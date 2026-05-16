import { createServerClient } from "@supabase/ssr";
import { type NextRequest, NextResponse } from "next/server";

import { isAllowedAdminEmail } from "@/lib/auth/admin";
import { hasSupabaseServerConfig } from "@/lib/supabase/server";

export async function updateSession(request: NextRequest) {
  const pathname = request.nextUrl.pathname;
  const isAdminRoute = pathname.startsWith("/admin");
  const isAdminLoginRoute = pathname === "/admin/login";

  if (!isAdminRoute) {
    return NextResponse.next();
  }

  if (!hasSupabaseServerConfig()) {
    if (isAdminLoginRoute) {
      return NextResponse.next();
    }

    return NextResponse.redirect(new URL("/admin/login?status=config", request.url));
  }

  const response = NextResponse.next({ request: { headers: request.headers } });

  const supabase = createServerClient(process.env.NEXT_PUBLIC_SUPABASE_URL!, process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!, {
    cookies: {
      getAll() {
        return request.cookies.getAll();
      },
      setAll(cookiesToSet) {
        cookiesToSet.forEach(({ name, value, options }) => {
          request.cookies.set(name, value);
          response.cookies.set(name, value, options);
        });
      },
    },
  });

  const claimsResult = await supabase.auth.getClaims();
  const claimsEmail = claimsResult.data?.claims?.email;
  const userResult = claimsEmail ? null : await supabase.auth.getUser();
  const userEmail = claimsEmail ?? userResult?.data?.user?.email ?? null;
  const isAuthenticated = Boolean(userEmail);

  if (isAdminLoginRoute && isAuthenticated && isAllowedAdminEmail(userEmail)) {
    return NextResponse.redirect(new URL("/admin", request.url));
  }

  if (!isAdminLoginRoute && !isAuthenticated) {
    return NextResponse.redirect(new URL("/admin/login?status=unauthenticated", request.url));
  }

  if (!isAdminLoginRoute && !isAllowedAdminEmail(userEmail)) {
    return NextResponse.redirect(new URL("/admin/login?status=unauthorized", request.url));
  }

  return response;
}
