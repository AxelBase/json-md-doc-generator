import { describe, it, expect } from "vitest";
import { validateJsonText } from "../src/lib/validate";

describe("validateJsonText", () => {
  it("validates valid JSON", () => {
    const result = validateJsonText('{"a":1}');
    expect(result.valid).toBe(true);
    expect(result.parsed).toEqual({ a: 1 });
  });

  it("fails invalid JSON", () => {
    const result = validateJsonText("{a:1}");
    expect(result.valid).toBe(false);
    expect(result.error).toBeDefined();
  });
});
