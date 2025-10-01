<script lang="ts">
  export let markdown: string | null = null;
  export let filename: string | null = null;

  let url: string | null = null;
  let downloadCount = 0;

  $: if (markdown && filename) {
    const baseName = filename;
    const ext = ".md";
    const countSuffix = downloadCount > 0 ? ` - ${downloadCount}` : "";
    const downloadName = `${baseName}${countSuffix}${ext}`;
    const blob = new Blob([markdown], { type: "text/markdown" });
    url && URL.revokeObjectURL(url);
    url = URL.createObjectURL(blob);
    // Only increment after the first download
    if (downloadCount === 0) downloadCount++; // Increment only after first render
  }

  // Handle download click to increment count
  function handleDownload() {
    if (downloadCount > 0) downloadCount++;
  }

  // cleanup
  import { onDestroy } from "svelte";
  onDestroy(() => {
    if (url) URL.revokeObjectURL(url);
  });
</script>

{#if markdown && url}
  <a href={url} download={filename ? `${filename}${downloadCount > 1 ? ` - ${downloadCount - 1}` : ""}.md` : "document.md"} class="btn btn-primary mt-3" on:click={handleDownload}>Download Markdown</a>
{/if}