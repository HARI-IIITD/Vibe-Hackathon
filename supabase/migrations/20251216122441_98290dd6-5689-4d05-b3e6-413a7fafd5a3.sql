-- Create users table for interest form submissions
CREATE TABLE public.users (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  age INTEGER NOT NULL,
  gender TEXT NOT NULL,
  location TEXT NOT NULL,
  contact TEXT,
  selected_age_group TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE public.users ENABLE ROW LEVEL SECURITY;

-- Allow anonymous inserts (public form)
CREATE POLICY "Anyone can submit interest form" 
ON public.users 
FOR INSERT 
WITH CHECK (true);

-- Create vaccination_centers table
CREATE TABLE public.vaccination_centers (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  hospital_name TEXT NOT NULL,
  area TEXT NOT NULL,
  helpline TEXT,
  location_link TEXT,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE public.vaccination_centers ENABLE ROW LEVEL SECURITY;

-- Allow public read access
CREATE POLICY "Anyone can view vaccination centers" 
ON public.vaccination_centers 
FOR SELECT 
USING (true);