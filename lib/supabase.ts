import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || "";
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || "";

if (!supabaseUrl || !supabaseAnonKey) {
    if (typeof window === "undefined") {
        console.warn("Supabase credentials not found. This is expected during a build if env vars are not set.");
    } else {
        console.error("Supabase credentials not found in env. Please check your .env.local file.");
    }
}

// Only create a dummy client if missing to avoid crashing top-level imports during build
export const supabase = (supabaseUrl && supabaseAnonKey)
    ? createClient(supabaseUrl, supabaseAnonKey)
    : (null as any);
