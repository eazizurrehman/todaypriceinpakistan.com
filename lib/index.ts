export function toTitleCase(input?: string) {
  if (!input) return "";

  return input.replace(/\b\w/g, (char) => char.toUpperCase());
}

export const formatPKR = (value: number) =>
  `Rs. ${value.toLocaleString("en-PK")}`;
