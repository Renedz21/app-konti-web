export function getPublicUrl(path = "") {
  const publicUrl = process.env.NEXT_PUBLIC_URL || "http://localhost:3000";
  return `${publicUrl}${path}`;
}
