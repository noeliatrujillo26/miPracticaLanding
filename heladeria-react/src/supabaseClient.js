import { createClient } from '@supabase/supabase-js';

const SUPABASE_URL = 'https://gyldwyadpgxtmtclfdbx.supabase.co';
const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imd5bGR3eWFkcGd4dG10Y2xmZGJ4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODcyNDM5NTksImV4cCI6MjEwMjgxOTk1OX0.K9bLLXQsHvJhpubWJgnXPVs_KZW6paGqco81eTObbnY';

export const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);