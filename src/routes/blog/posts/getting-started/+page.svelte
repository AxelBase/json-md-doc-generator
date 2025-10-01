<script lang="ts">
    import { base } from '$app/paths';
</script>

<div class="container py-4" style="max-width: 800px;">
    <article>
        <h1 class="mb-4">Getting Started with JSON and Markdown</h1>
        <p>Welcome to the world of structured data and simple documentation! JSON (JavaScript Object Notation) is a lightweight, human-readable format used to store and exchange data. It’s widely adopted in web development, APIs, and configuration files due to its simplicity and flexibility. Markdown, on the other hand, is a lightweight markup language that allows you to format text easily, making it ideal for creating readable documents like READMEs, reports, or wikis.</p>
        <p>The json-md-doc-generator tool bridges these two by transforming JSON into Markdown, turning raw data into polished documentation. This is especially useful for developers, technical writers, and analysts who need to present data in an accessible way without manual formatting. Let’s explore how these technologies complement each other and get you started with some practical examples.</p>
        <h2>What is JSON?</h2>
        <p>JSON consists of key-value pairs, arrays, and nested objects. Here’s a basic example:</p>
        <pre><script type="text/plain">{ "name": "Alice", "age": 30, "skills": ["JavaScript", "Python"] }</script></pre>
        <p>This structure is easy to parse by machines and readable by humans, making it a go-to choice for data interchange.</p>
        <h2>What is Markdown?</h2>
        <p>Markdown uses simple syntax to format text. For instance:</p>
        <pre># Heading
- Item 1
- Item 2</pre>
        <p>Compiles to a clean, hierarchical document. The tool automates this conversion from JSON to Markdown, saving you time.</p>
        <h2>Why Transform JSON to Markdown?</h2>
        <p>Manually converting JSON to Markdown can be tedious, especially with nested data or large datasets. The tool maps JSON keys to headings, arrays to lists or tables, and nested objects to deeper sections. This process makes your data more approachable for teams or documentation purposes.</p>
        <h2>Beginner Example</h2>
        <p>Consider this JSON:</p>
        <pre><script type="text/plain">{ "project": "DocGen", "tasks": ["Design", "Code", "Test"] }</script></pre>
        <p>After conversion, it becomes:</p>
        <pre># project
## DocGen
## tasks
- Design
- Code
- Test</pre>
        <p>This side-by-side transformation shows how the tool simplifies documentation. Upload this JSON or paste it into the tool to see it in action!</p>
        <p>Getting started is easy: upload a `.json` file or paste text, and the tool handles validation and conversion. Explore nested examples or large datasets to see the full potential. Happy documenting!</p>
    </article>
    <div style="margin-top: 3rem; border-top: 1px solid var(--border-color); padding-top: 1.5rem;">
        <a href="{base}/blog">&larr; Back to Blog</a>
    </div>
</div>