"use server";

import { redirect } from "next/navigation";

import { isAllowedAdminEmail } from "@/lib/auth/admin";
import { createSupabaseServerClient, hasSupabaseServerConfig } from "@/lib/supabase/server";

export async function loginAdmin(formData: FormData) {
  if (!hasSupabaseServerConfig()) {
    redirect("/admin/login?status=config");
  }

  const email = String(formData.get("email") ?? "").trim().toLowerCase();
  const password = String(formData.get("password") ?? "").trim();

  if (!email || !password) {
    redirect("/admin/login?status=missing-fields");
  }

  if (!isAllowedAdminEmail(email)) {
    redirect("/admin/login?status=unauthorized");
  }

  try {
    const supabase = await createSupabaseServerClient();
    const { error } = await supabase.auth.signInWithPassword({ email, password });

    if (error) {
      console.error("Supabase login failed:", error.message);
      redirect("/admin/login?status=invalid");
    }
  } catch (error) {
    console.error("Admin login setup error:", error);
    redirect("/admin/login?status=invalid");
  }

  redirect("/admin");
}
