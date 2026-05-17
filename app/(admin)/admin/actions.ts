"use server";

import { redirect } from "next/navigation";

import { createSupabaseServerClient, hasSupabaseServerConfig } from "@/lib/supabase/server";

export async function logoutAdmin() {
  if (!hasSupabaseServerConfig()) {
    redirect("/admin/login?status=config");
  }

  try {
    const supabase = await createSupabaseServerClient();
    await supabase.auth.signOut();
  } catch (error) {
    console.error("Supabase logout error:", error);
  }

  redirect("/admin/login?status=signed-out");
}
