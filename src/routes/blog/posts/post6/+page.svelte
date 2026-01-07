<!-- blog/posts/post6/+page.svelte -->
<script lang="ts">
  import { base } from '$app/paths';
</script>

<svelte:head>
  <title>Formatting Arrays: Lists vs. Tables | Blog</title>
  <meta name="description" content="When and why the converter chooses bullet lists for simple arrays versus full Markdown tables for arrays containing objects." />
  <meta property="og:title" content="Formatting Arrays: Lists vs. Tables | Blog" />
  <meta property="og:description" content="When and why the converter chooses bullet lists for simple arrays versus full Markdown tables for arrays containing objects." />
  <meta property="og:url" content="{base}/blog/posts/post6" />
  <meta property="og:type" content="article" />
  <meta name="twitter:card" content="summary_large_image" />
</svelte:head>

<div class="container fade-in post-layout">
  <div class="breadcrumbs">
    <a href="{base}/blog">Blog</a>
    <span>/</span>
    <p>Formatting Arrays: Lists vs. Tables</p>
  </div>

  <article class="prose">
    <h1>Formatting Arrays: Lists vs. Tables</h1>
   
    <p class="post-meta">Published: January 07, 2026</p>
   
    <p>Arrays are one of the most common structures in JSON data, and the JSON to Markdown Doc Generator applies smart rules to decide whether to render them as bullet lists or full tables. This decision greatly affects readability and is based entirely on the type of items the array contains.</p>
    
    <p>When an array holds only primitive values—such as strings, numbers, booleans, or null—the tool automatically formats it as a simple bullet list. Each item becomes a separate list entry under the parent heading. This approach keeps the output clean and concise for enumerations like tags, categories, status codes, or options.</p>
    
    <p>Bullet lists are ideal for these cases because they are quick to scan and require minimal horizontal space. They integrate naturally into the document flow without disrupting the hierarchy created by headings.</p>
    
    <h2>When Tables Are Used</h2>
    <ul>
      <li>Arrays containing objects trigger table generation</li>
      <li>Table headers are built from all unique keys across objects</li>
      <li>Each object becomes a row with aligned cells</li>
      <li>Missing keys result in empty cells for consistency</li>
    </ul>
    
    <p>Tables provide the structure needed when data has multiple attributes per item. For example, an array of user records with name, email, and role fields renders as a proper Markdown table with clear headers and rows. This makes comparison and reference much easier than a nested list would allow.</p>
    
    <p>The generator ensures tables follow standard Markdown syntax, including the header separator row, so they render correctly on GitHub, GitLab, static site generators, and most viewers.</p>
    
    <p>Empty arrays are handled gracefully: primitive empty arrays show as an empty bullet list, while object arrays produce a table with headers but no data rows. This maintains document consistency even with optional or empty datasets.</p>
    
    <p>Mixed-type arrays—containing both primitives and objects—are not officially supported and may lead to unexpected results. For best output, keep array items uniform in type.</p>
    
    <p>Understanding this distinction helps when preparing JSON for documentation. If tabular presentation is desired, structure data as an array of objects. For simple lists, use primitives directly.</p>
    
    <p>This automatic selection balances simplicity with power, applying the most appropriate format without requiring user configuration.</p>
    
    <p>The result is professional-looking documentation that highlights relationships in data naturally.</p>
    
    <h2>Frequently Asked Questions</h2>
    <details>
      <summary>Can I force a list instead of a table?</summary>
      <p>No, the format is determined automatically by item type.</p>
    </details>
    <details>
      <summary>What if objects have different keys?</summary>
      <p>All unique keys become columns; missing values are empty cells.</p>
    </details>
    <details>
      <summary>Are tables sortable in the output?</summary>
      <p>No, plain Markdown tables are static but readable.</p>
    </details>
    
    <p class="italic-note">Choose the right array structure to get the perfect Markdown format automatically.</p>
  </article>
</div>

<style>
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