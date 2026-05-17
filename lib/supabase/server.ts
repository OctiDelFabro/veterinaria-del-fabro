import { createServerClient, type CookieOptions } from "@supabase/ssr";
import { cookies } from "next/headers";

function getSupabaseServerConfig() {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const anonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

  return { url, anonKey };
}

export function hasSupabaseServerConfig(): boolean {
  const { url, anonKey } = getSupabaseServerConfig();
  return Boolean(url && anonKey);
}

export async function createSupabaseServerClient() {
  const { url, anonKey } = getSupabaseServerConfig();

  if (!url || !anonKey) {
    throw new Error("Supabase server config is incomplete.");
  }

  const cookieStore = await cookies();

  return createServerClient(url, anonKey, {
    cookies: {
      getAll() {
        return cookieStore.getAll();
      },
      setAll(
        cookiesToSet: {
          name: string;
          value: string;
          options?: CookieOptions;
        }[],
      ) {
        cookiesToSet.forEach(({ name, value, options }) => {
          cookieStore.set(name, value, options);
        });
      },
    },
  });
}