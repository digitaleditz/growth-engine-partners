CREATE TABLE public.email_verification_codes (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  email TEXT NOT NULL,
  code TEXT NOT NULL,
  attempts INT NOT NULL DEFAULT 0,
  consumed_at TIMESTAMP WITH TIME ZONE,
  expires_at TIMESTAMP WITH TIME ZONE NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

CREATE INDEX idx_evc_email_created ON public.email_verification_codes (email, created_at DESC);

GRANT ALL ON public.email_verification_codes TO service_role;

ALTER TABLE public.email_verification_codes ENABLE ROW LEVEL SECURITY;

-- No public policies: codes are only readable/writable by backend functions.

ALTER TABLE public.contact_submissions ADD COLUMN IF NOT EXISTS verified_email BOOLEAN NOT NULL DEFAULT false;

GRANT ALL ON public.contact_submissions TO service_role;

-- Remove the open anonymous insert policy; submissions now go through the verified backend function only.
DROP POLICY IF EXISTS "Anyone can submit contact form" ON public.contact_submissions;