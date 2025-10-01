import { jsonToMarkdown } from "./convert";

export function generateMarkdown(input: unknown): string {
  return jsonToMarkdown(input);
}
