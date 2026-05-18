import { redirect } from "next/navigation";

import { createSupabaseServerClient, hasSupabaseServerConfig } from "@/lib/supabase/server";

export function getAllowedAdminEmails(): string[] {
  return (process.env.ADMIN_EMAILS ?? "")
    .split(",")
    .map((email) => email.trim().toLowerCase())
    .filter(Boolean);
}

export function isAllowedAdminEmail(email?: string | null): boolean {
  if (!email) {
    return false;
  }

  const allowedEmails = getAllowedAdminEmails();

  if (allowedEmails.length === 0) {
    return false;
  }

  return allowedEmails.includes(email.toLowerCase());
}

export async function requireAdminUser(): Promise<void> {
  if (!hasSupabaseServerConfig()) {
    redirect("/admin/login?status=unauthenticated");
  }

  const supabase = await createSupabaseServerClient();
  const { data, error } = await supabase.auth.getUser();

  if (error || !data.user) {
    redirect("/admin/login?status=unauthenticated");
  }

  if (!isAllowedAdminEmail(data.user.email)) {
    redirect("/admin/login?status=unauthorized");
  }
}
