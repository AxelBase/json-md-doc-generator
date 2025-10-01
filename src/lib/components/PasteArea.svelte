<script lang="ts">
  import { createEventDispatcher } from "svelte";
  import { validateJsonText, type ValidationResult } from "$lib/validate";

  const dispatch = createEventDispatcher<{ validated: ValidationResult }>();

  let input = "";

  function handleInput() {
    const result = validateJsonText(input);
    dispatch("validated", result);
  }
</script>

<div class="mb-3">
  <label for="pasteInput" class="form-label">Paste JSON</label>
  <textarea id="pasteInput" class="form-control" rows="6" bind:value={input} on:input={handleInput}></textarea>
</div>
