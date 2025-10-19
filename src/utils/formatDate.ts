export const formatDate = (
  date: Date | string,
  format: "short" | "long" = "short"
): string => {
  const dateObj = typeof date === "string" ? new Date(date) : date;

  if (format === "short") {
    return dateObj.toLocaleDateString();
  }

  return dateObj.toLocaleDateString("ko-KR", {
    year: "numeric",
    month: "long",
    day: "numeric",
    weekday: "long",
  });
};
