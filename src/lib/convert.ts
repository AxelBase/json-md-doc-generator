// JSON → Markdown converter
export function jsonToMarkdown(data: unknown, depth = 2): string {
  if (data === null) return "`null`";
  if (typeof data === "string" || typeof data === "number" || typeof data === "boolean") {
    return String(data);
  }
  if (Array.isArray(data)) {
    if (data.every(item => typeof item !== "object" || item === null)) {
      return data.map(v => `- ${jsonToMarkdown(v, depth)}`).join("\n");
    } else {
      // assume homogeneous objects → table
      const keys = Array.from(new Set(data.flatMap(obj => Object.keys(obj || {}))));
      const header = `| ${keys.join(" | ")} |`;
      const divider = `| ${keys.map(() => "---").join(" | ")} |`;
      const rows = data.map(obj =>
        `| ${keys.map(k => (obj?.[k] !== undefined ? jsonToMarkdown(obj[k], depth + 1) : "")).join(" | ")} |`
      );
      return [header, divider, ...rows].join("\n");
    }
  }
  if (typeof data === "object") {
    return Object.entries(data as Record<string, unknown>)
      .map(([k, v]) => `${"#".repeat(depth)} ${k}\n${jsonToMarkdown(v, depth + 1)}`)
      .join("\n\n");
  }
  return "";
}
