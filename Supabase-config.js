const SUPABASE_URL =
  "https://gsyjnyndoakzypqjiptt.supabase.co";

const SUPABASE_KEY =
  "sb_publishable_MmwPSVKgk6F9qwqjWMzk_w_BG1G7IrG";

window.db = window.supabase.createClient(
  SUPABASE_URL,
  SUPABASE_KEY
);

console.log("Rapo Cloud Kitchen: Supabase connected");
