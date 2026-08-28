CREATE POLICY "No client access to verification codes"
  ON public.email_verification_codes
  FOR ALL
  TO anon, authenticated
  USING (false)
  WITH CHECK (false);

CREATE POLICY "No client access to contact submissions"
  ON public.contact_submissions
  FOR ALL
  TO anon, authenticated
  USING (false)
  WITH CHECK (false);