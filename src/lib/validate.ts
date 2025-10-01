export interface ValidationResult {
  valid: boolean;
  error?: string;
  parsed?: unknown;
}

export function validateJsonText(input: string): ValidationResult {
  try {
    const parsed = JSON.parse(input);
    return { valid: true, parsed };
  } catch (e) {
    return { valid: false, error: (e as Error).message };
  }
}

export function validateFile(file: File): Promise<ValidationResult> {
  return new Promise(resolve => {
    if (!file.name.endsWith(".json") && !file.type.includes("json")) {
      resolve({ valid: false, error: "Invalid file type. Must be .json" });
      return;
    }
    const reader = new FileReader();
    reader.onload = () => resolve(validateJsonText(reader.result as string));
    reader.onerror = () => resolve({ valid: false, error: "File read error." });
    reader.readAsText(file);
  });
}
