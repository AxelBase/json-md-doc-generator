import { describe, it, expect } from "vitest";
import { jsonToMarkdown } from "../src/lib/convert";

describe("jsonToMarkdown", () => {
  it("converts primitives", () => {
    expect(jsonToMarkdown("hello")).toBe("hello");
    expect(jsonToMarkdown(123)).toBe("123");
  });

  it("converts arrays of primitives", () => {
    const md = jsonToMarkdown([1, 2, 3]);
    expect(md).toContain("- 1");
  });

  it("converts objects to headings", () => {
    const md = jsonToMarkdown({ a: 1, b: "x" });
    expect(md).toContain("## a");
    expect(md).toContain("## b");
  });

  it("converts arrays of objects to tables", () => {
    const md = jsonToMarkdown([{ a: 1 }, { a: 2 }]);
    expect(md).toContain("| a |");
  });
});
