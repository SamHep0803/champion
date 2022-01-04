import { createClient } from "@supabase/supabase-js";
import { __prod__ } from "../constants";

// export const supabase = createClient(
// 	__prod__
// 		? process.env.NEXT_PUBLIC_SUPABASE_URL
// 		: process.env.NEXT_PUBLIC_DEV_SUPABASE_URL,
// 	__prod__
// 		? process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
// 		: process.env.NEXT_PUBLIC_DEV_SUPABASE_ANON_KEY
// );

export const supabase = createClient(
	process.env.NEXT_PUBLIC_PROD_SUPABASE_URL,
	process.env.NEXT_PUBLIC_PROD_SUPABASE_ANON_KEY
);
