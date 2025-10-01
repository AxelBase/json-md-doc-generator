<script lang="ts">
  import { createEventDispatcher } from "svelte";
  import type { ValidationResult } from "$lib/validate";
  import { validateFile } from "$lib/validate";

  const dispatch = createEventDispatcher<{ validated: { result: ValidationResult; filename?: string } }>();

  async function handleFileChange(e: Event) {
    const file = (e.target as HTMLInputElement).files?.[0];
    if (file) {
      const result = await validateFile(file);
      dispatch("validated", { result, filename: file.name.replace(/\.[^/.]+$/, "") });
    }
  }
</script>

<div class="mb-3">
  <label for="fileInput" class="form-label">Upload JSON File</label>
  <input id="fileInput" type="file" accept=".json,application/json" on:change={handleFileChange} class="form-control" />
</div>