<script lang="ts">
  // Original script restored for functionality
  import UploadArea from "$lib/components/UploadArea.svelte";
  import PasteArea from "$lib/components/PasteArea.svelte";
  import DownloadLink from "$lib/components/DownloadLink.svelte";
  import ErrorDisplay from "$lib/components/ErrorDisplay.svelte";
  import { jsonToMarkdown } from "$lib/convert";
  import type { ValidationResult } from "$lib/validate";

  let markdown: string | null = null;
  let error: string | null = null;
  let filename: string | null = null;

  function handleValidated(event: CustomEvent<{ result: ValidationResult; filename?: string }>) {
    const { result, filename: fileName } = event.detail;
    const { valid, error: err, parsed } = result;
    if (!valid) {
      error = err ?? "Unknown error";
      markdown = null;
      return;
    }
    error = null;
    markdown = jsonToMarkdown(parsed);
    filename = fileName || "document";
  }
</script>

<div class="container py-4">
  <div class="text-center">
    <h1 class="mb-4">JSON → Markdown Generator</h1>
    <p class="fs-5 text-muted mb-5" style="color: #000000;">
      Instantly transform your JSON data into clean, readable Markdown documentation.
    </p>
  </div>
  
  <UploadArea on:validated={handleValidated} />
  <PasteArea on:validated={handleValidated} />
  <ErrorDisplay {error} />
  <DownloadLink {markdown} {filename} /> 
</div>

<section id="about" class="py-5" style="margin-top: 4rem;">
    <div class="container text-center" style="max-width: 800px; margin: 0 auto;">
        <h2 class="mb-4">About This Tool</h2>
        <p style="color: #000000; text-align: left;">
            json-md-doc-generator is a lightweight web utility designed to transform raw JSON data into structured, human-readable Markdown documents. It runs entirely in the browser, requiring no backend server, database, or account. This makes the tool both fast and private: your files never leave your computer.
        </p>
        <p style="color: #000000; text-align: left;">
            Developers, technical writers, and analysts often need to share or document JSON structures in reports, README files, or project documentation. Manually formatting JSON into Markdown tables, lists, or sections can be repetitive and error-prone. This tool automates that process by intelligently mapping JSON objects, arrays, and values into Markdown headings, bullet lists, or tables.
        </p>
        <p style="color: #000000; text-align: left;">
            Whether you paste JSON directly or upload a .json file, the app validates your input, highlights errors, and generates reproducible Markdown instantly. Downloaded files are plain .md documents that can be version-controlled, published, or integrated into any Markdown-compatible workflow.
        </p>
        <p style="color: #000000; text-align: left;">
            The design goal is simplicity: no clutter, no unnecessary features, just fast and accurate JSON-to-Markdown conversion with clear error feedback.
        </p>
    </div>
</section>

<section id="how-to-use" class="py-5">
    <div class="container" style="max-width: 800px; margin: 0 auto;">
        <h2 class="text-center mb-5">How to Use</h2>
        <ol style="color: #000000; padding-left: 20px;">
            <li style="margin-bottom: 1rem;">Open the tool in your browser.</li>
            <li style="margin-bottom: 1rem;">Provide JSON input using either method:
                <ul style="margin-top: 0.5rem;">
                    <li>Upload a <code>.json</code> file with the upload button.</li>
                    <li>Paste raw JSON into the text area.</li>
                </ul>
            </li>
            <li style="margin-bottom: 1rem;">Validation happens automatically. If the JSON is invalid, a clear error message is displayed. Correct the input to continue.</li>
            <li style="margin-bottom: 1rem;">Conversion occurs instantly when valid JSON is detected. The tool maps:
                <ul style="margin-top: 0.5rem;">
                    <li>Objects → Markdown headings (## Key).</li>
                    <li>Arrays of primitives → bullet lists.</li>
                    <li>Arrays of objects → Markdown tables.</li>
                    <li>Nested objects → deeper headings.</li>
                </ul>
            </li>
            <li style="margin-bottom: 1rem;">Download the result by clicking the <strong>Download Markdown</strong> button. A file named based on the original filename (e.g., "original.md") is created and saved locally, incrementing with -1, -2, etc. on repeated downloads.</li>
            <li style="margin-bottom: 1rem;">Refresh the page to reset. All previous data and download links are cleared.</li>
        </ol>
        <p class="text-center mt-4" style="color: #000000;"><em>No data is ever stored or transmitted. Everything happens locally in your browser, ensuring privacy and security.</em></p>
    </div>
</section>

<section id="faq" class="py-5">
    <div class="container" style="max-width: 800px; margin: 0 auto;">
        <h2 class="text-center mb-5">Frequently Asked Questions</h2>
        <div class="faq-item">
            <h4>Does the tool send my JSON to a server?</h4>
            <p style="color: #000000;">No, all processing happens in your browser. Nothing is uploaded.</p>
        </div>
        <div class="faq-item">
            <h4>What file types are supported?</h4>
            <p style="color: #000000;">Only <code>.json</code> files or raw JSON text pasted into the input area.</p>
        </div>
        <div class="faq-item">
            <h4>Can I use very large files?</h4>
            <p style="color: #000000;">Files up to about 1 MB convert quickly. Larger files may slow performance.</p>
        </div>
        <div class="faq-item">
            <h4>How is nested JSON handled?</h4>
            <p style="color: #000000;">Nested objects are represented with deeper Markdown headings.</p>
        </div>
        <div class="faq-item">
            <h4>What about arrays of objects?</h4>
            <p style="color: #000000;">They are formatted into Markdown tables with headers for each key.</p>
        </div>
        <div class="faq-item">
            <h4>Is the output reproducible?</h4>
            <p style="color: #000000;">Yes. Keys are ordered consistently so output is deterministic.</p>
        </div>
        <div class="faq-item">
            <h4>Can I edit the generated Markdown in the app?</h4>
            <p style="color: #000000;">No. You download the Markdown and edit with your preferred editor.</p>
        </div>
        <div class="faq-item">
            <h4>Does it work offline?</h4>
            <p style="color: #000000;">Yes, once loaded in your browser it continues to work without internet.</p>
        </div>
        <div class="faq-item">
            <h4>Do I need to install anything?</h4>
            <p style="color: #000000;">No installation. Just open the site in a browser.</p>
        </div>
        <div class="faq-item">
            <h4>Is the tool free to use?</h4>
            <p style="color: #000000;">Yes, it’s free and open for anyone.</p>
        </div>
    </div>
</section>

<style>
    .faq-item {
        margin-bottom: 1.5rem;
        border-left: 3px solid var(--accent);
        padding-left: 1rem;
    }
    .faq-item h4 {
        color: #000000;
        margin-bottom: 0.5rem;
    }
    .faq-item p {
        color: #000000;
        margin-bottom: 0;
    }
</style>