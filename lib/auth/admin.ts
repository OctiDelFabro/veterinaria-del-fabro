export function getAllowedAdminEmails(): string[] {
  return (process.env.ADMIN_EMAILS ?? "")
    .split(",")
    .map((email) => email.trim().toLowerCase())
    .filter(Boolean);
}

export function isAllowedAdminEmail(email?: string | null): boolean {
  if (!email) {
    return false;
  }

  const allowedEmails = getAllowedAdminEmails();

  if (allowedEmails.length === 0) {
    return false;
  }

  return allowedEmails.includes(email.toLowerCase());
}
