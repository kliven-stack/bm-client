import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm';

const supabaseUrl = 'https://swjbzspqcnldckavaaky.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InN3amJ6c3BxY25sZGNrYXZhYWt5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODA1Mzg4MTYsImV4cCI6MjA5NjExNDgxNn0.wA4pfzG_CdjQw7MEvDKBkxPwliSI12NwWaWS5z-4aVk';


export const supabase = createClient(supabaseUrl, supabaseKey);

