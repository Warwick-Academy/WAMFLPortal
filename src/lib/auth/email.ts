export function isWarwickEmail(email: string | null | undefined): boolean {
  return typeof email === 'string' && /^[^\s@]+@warwick\.bm$/i.test(email.trim());
}
