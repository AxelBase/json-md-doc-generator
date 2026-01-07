<!-- blog/posts/post4/+page.svelte -->
<script lang="ts">
  import { base } from '$app/paths';
</script>

<svelte:head>
  <title>Understanding the Core Conversion Rules | Blog</title>
  <meta name="description" content="Detailed explanation of how JSON keys become Markdown headings, primitive arrays turn into bullet lists, and object arrays are rendered as tables." />
  <meta property="og:title" content="Understanding the Core Conversion Rules | Blog" />
  <meta property="og:description" content="Detailed explanation of how JSON keys become Markdown headings, primitive arrays turn into bullet lists, and object arrays are rendered as tables." />
  <meta property="og:url" content="{base}/blog/posts/post4" />
  <meta property="og:type" content="article" />
  <meta name="twitter:card" content="summary_large_image" />
</svelte:head>

<div class="container fade-in post-layout">
  <div class="breadcrumbs">
    <a href="{base}/blog">Blog</a>
    <span>/</span>
    <p>Understanding the Core Conversion Rules</p>
  </div>

  <article class="prose">
    <h1>Understanding the Core Conversion Rules</h1>
   
    <p class="post-meta">Published: January 07, 2026</p>
   
    <p>The JSON to Markdown Doc Generator applies a set of clear, consistent rules to transform JSON structures into readable Markdown. Knowing these rules helps predict and optimize output for documentation needs.</p>
    
    <p>Root-level keys in the JSON object become second-level Markdown headings using the key name as title text. This creates a natural table of contents for the document.</p>
    
    <p>Primitive values—strings, numbers, booleans, or null—appear as paragraph text or simple key-value presentations under their heading.</p>
    
    <h2>Array Handling Rules</h2>
    <ul>
      <li>Arrays of primitive values render as bullet lists</li>
      <li>Arrays of objects generate full Markdown tables</li>
      <li>Empty arrays show as empty lists or tables</li>
    </ul>
    
    <p>For primitive arrays, each item becomes a list entry. This works well for enumerations like tags, categories, or status options.</p>
    
    <p>When arrays contain objects, the tool extracts all unique keys across items to form table headers. Each object fills a row, with cells aligned properly. Missing properties result in empty cells, ensuring table consistency.</p>
    
    <p>Object values trigger recursive processing. Child keys become third-level headings, maintaining the hierarchical outline.</p>
    
    <p>Key order is preserved deterministically, guaranteeing identical output from identical input. This reproducibility is essential for version control and audits.</p>
    
    <p>Tables include proper piping and alignment syntax compatible with all Markdown renderers, including GitHub and static site generators.</p>
    
    <p>These rules strike a balance between fidelity to the source data and readability in the target format. Headings provide structure, lists offer simplicity, and tables handle relational data effectively.</p>
    
    <p>Understanding the mappings allows users to structure JSON intentionally for better documentation outcomes. Descriptive keys produce meaningful headings, and consistent object shapes yield cleaner tables.</p>
    
    <p>The predictable behavior makes the tool reliable for integration into larger workflows where automated documentation generation is required.</p>
    
    <h2>Frequently Asked Questions</h2>
    <details>
      <summary>How are table headers determined?</summary>
      <p>From the union of all keys in array objects.</p>
    </details>
    <details>
      <summary>What happens with mixed array types?</summary>
      <p>Arrays must be uniform; mixed types may produce unexpected results.</p>
    </details>
    <details>
      <summary>Can I influence the output format?</summary>
      <p>Currently rules are fixed for consistency.</p>
    </details>
    
    <p class="italic-note">Master these rules to create professional documentation from JSON sources.</p>
  </article>
</div>

<style>
  /* Same style block as previous posts */
  .post-layout {
    max-width: 800px;
    padding-top: 2rem;
    padding-bottom: 4rem;
  }

  .breadcrumbs {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    margin-bottom: 1.5rem;
    font-size: 0.9rem;
    color: var(--text-secondary);
  }
  .breadcrumbs a {
    color: var(--accent-secondary);
  }
  .breadcrumbs a:hover {
    text-decoration: underline;
  }
  .breadcrumbs p {
    margin: 0;
  }

  .prose {
    line-height: 1.8;
  }

  .prose .post-meta {
    color: var(--text-secondary);
    font-size: 0.9rem;
    margin-bottom: 2rem;
    border-bottom: 1px solid var(--border-color);
    padding-bottom: 1rem;
  }

  .prose h1, .prose h2 {
    color: var(--accent-secondary);
  }

  .prose h1 {
    font-size: 2.5rem;
    margin-bottom: 0.5rem;
  }

  .prose h2 {
    margin-top: 2.5rem;
    border-bottom: 1px solid var(--secondary-bg);
    padding-bottom: 0.5rem;
  }

  .prose p {
    color: var(--text-primary);
  }

  .prose ul {
    list-style-type: '→ ';
    padding-left: 1.5rem;
    color: var(--text-primary);
  }
  .prose ul li::marker {
    color: var(--accent-primary);
  }
  .prose ul li {
    padding-left: 0.5rem;
    margin-bottom: 0.5rem;
  }

  .prose details {
    background: var(--secondary-bg);
    border: 1px solid var(--border-color);
    border-radius: 6px;
    padding: 1rem;
    margin-bottom: 1rem;
    transition: background-color 0.2s ease;
  }

  .prose details[open] {
    background-color: var(--card-bg);
  }

  .prose summary {
    cursor: pointer;
    font-weight: 600;
    color: var(--accent-secondary);
    list-style: none;
  }

  .prose summary::-webkit-details-marker {
    display: none;
  }

  .prose summary::before {
    content: '+';
    margin-right: 0.75rem;
    color: var(--accent-primary);
    font-weight: bold;
    display: inline-block;
    transition: transform 0.2s ease;
  }

  .prose details[open] summary::before {
    transform: rotate(45deg);
  }

  .prose details p {
    margin-top: 1rem;
    padding-left: 1.5rem;
    border-left: 2px solid var(--accent-primary);
    color: var(--text-secondary);
  }

  .prose .italic-note {
    font-style: italic;
    color: var(--text-secondary);
    text-align: center;
    margin-top: 3rem;
  }
</style>