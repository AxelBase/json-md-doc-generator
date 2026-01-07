<script lang="ts">
  import { base } from '$app/paths';

  const posts = [
    { href: '/blog/posts/post1', title: 'Introducing the JSON to Markdown Doc Generator', description: 'A comprehensive overview of this privacy-first, client-side web utility that converts structured JSON into clean, readable Markdown documents without transmitting any data.' },
    { href: '/blog/posts/post2', title: 'How Client-Side JSON Processing Ensures Complete Privacy', description: 'Exploring how all validation, parsing, and conversion happen entirely in the browser, with no servers, logs, or external requests involved.' },
    { href: '/blog/posts/post3', title: 'Getting Started: Converting Your First JSON File', description: 'Step-by-step instructions for pasting JSON directly or uploading a file, validating input, and downloading the generated Markdown instantly.' },
    { href: '/blog/posts/post4', title: 'Understanding the Core Conversion Rules', description: 'Detailed explanation of how JSON keys become Markdown headings, primitive arrays turn into bullet lists, and object arrays are rendered as tables.' },
    { href: '/blog/posts/post5', title: 'Handling Nested Objects and Deep Structures', description: 'How the tool uses progressive heading levels (###, ####, etc.) to represent nested JSON objects while maintaining readability.' },
    { href: '/blog/posts/post6', title: 'Formatting Arrays: Lists vs. Tables', description: 'When and why the converter chooses bullet lists for simple arrays versus full Markdown tables for arrays containing objects.' },
    { href: '/blog/posts/post7', title: 'Ensuring Deterministic and Reproducible Output', description: 'How consistent key ordering and predictable formatting rules produce identical Markdown from the same JSON every time.' },
    { href: '/blog/posts/post8', title: 'Working with Large JSON Files: Performance Tips', description: 'Guidance on handling files up to 1 MB efficiently in the browser and what to expect with even larger structures.' },
    { href: '/blog/posts/post9', title: 'Validating JSON Input and Error Feedback', description: 'How real-time syntax checking works, common error messages, and how to resolve invalid or malformed JSON quickly.' },
    { href: '/blog/posts/post10', title: 'Best Practices for Documenting APIs and Configs in Markdown', description: 'Practical tips for using this tool in API documentation, configuration guides, and static site workflows to create maintainable, version-controlled docs.' },
  ];
</script>

<svelte:head>
  <title>Blog | JSON to Markdown Doc Generator Insights</title>
  <meta name="description" content="In-depth articles, guides, and technical explanations about converting JSON to structured Markdown documentation with full privacy and client-side processing." />
</svelte:head>

<div class="container fade-in blog-index">
  <header class="blog-header">
    <h1><i class="bi bi-journal-richtext"></i> Blog: JSON to Markdown Insights</h1>
    <p class="subtitle">
      Technical deep dives, tutorials, and practical guides for transforming structured JSON data into human-readable Markdown.
      All focused on privacy-first, client-side conversion with no data ever leaving your browser.
      Explore the source on <a href="https://github.com/axelbase/json-md-doc-generator" target="_blank" rel="noopener noreferrer">GitHub</a> and contribute ideas or improvements.
    </p>
  </header>

  <div class="posts-grid">
    {#each posts as post}
      <a href="{base}{post.href}" class="card post-card">
        <div class="card-body">
          <h2 class="post-title">{post.title}</h2>
          <p class="post-description">{post.description}</p>
          <span class="read-more">Read Article &rarr;</span>
        </div>
      </a>
    {/each}
  </div>
</div>

<style>
  .blog-index {
    padding-top: 2rem;
    padding-bottom: 4rem;
  }

  .blog-header {
    text-align: center;
    margin-bottom: 3rem;
    border-bottom: 1px solid var(--border-color);
    padding-bottom: 2rem;
  }

  .blog-header h1 {
    font-size: 2.8rem;
    margin-bottom: 1rem;
  }

  .subtitle {
    font-size: 1.1rem;
    color: var(--text-secondary);
    max-width: 700px;
    margin: 0 auto;
    line-height: 1.7;
  }

  .posts-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 1.5rem;
  }

  .post-card {
    text-decoration: none;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  .post-card .card-body {
    display: flex;
    flex-direction: column;
    height: 100%;
  }

  .post-title {
    font-size: 1.25rem;
    color: var(--accent-secondary);
    margin-bottom: 0.75rem;
  }

  .post-description {
    color: var(--text-secondary);
    flex-grow: 1;
    margin-bottom: 1rem;
  }

  .read-more {
    color: var(--accent-primary);
    font-weight: 600;
    align-self: flex-start;
    transition: var(--transition-fast);
  }

  .post-card:hover .read-more {
    transform: translateX(5px);
  }
</style>