<script lang="ts">
    import { base } from '$app/paths';
</script>

<div class="container py-4">
    <h1 class="mb-4">The AxelBase Blog</h1>
    <p>Welcome to the json-md-doc-generator blog — a space where we share insights, tips, and guides...</p>

    <h2 class="mb-4 mt-5">Posts</h2>
    <ul style="list-style: none; padding: 0;">
        <li class="card mb-3">
            <a href="{base}/blog/posts/getting-started" style="display: block; padding: 1.5rem; text-decoration: none;">
                <h3 style="margin: 0; font-size: 1.5rem; color: #000000; transition: color 0.2s ease;">
                    Getting Started with JSON and Markdown
                </h3>
            </a>
        </li>

        <li class="card mb-3">
            <a href="{base}/blog/posts/why-convert" style="display: block; padding: 1.5rem; text-decoration: none;">
                <h3 style="margin: 0; font-size: 1.5rem; color: #000000; transition: color 0.2s ease;">
                    Why Convert JSON to Markdown?
                </h3>
            </a>
        </li>

        <li class="card mb-3">
            <a href="{base}/blog/posts/formatting-arrays-objects" style="display: block; padding: 1.5rem; text-decoration: none;">
                <h3 style="margin: 0; font-size: 1.5rem; color: #000000; transition: color 0.2s ease;">
                    Formatting Arrays and Objects Effectively
                </h3>
            </a>
        </li>

        <li class="card mb-3">
            <a href="{base}/blog/posts/common-errors" style="display: block; padding: 1.5rem; text-decoration: none;">
                <h3 style="margin: 0; font-size: 1.5rem; color: #000000; transition: color 0.2s ease;">
                    Common JSON Validation Errors (and Fixes)
                </h3>
            </a>
        </li>

        <li class="card mb-3">
            <a href="{base}/blog/posts/reproducible-docs" style="display: block; padding: 1.5rem; text-decoration: none;">
                <h3 style="margin: 0; font-size: 1.5rem; color: #000000; transition: color 0.2s ease;">
                    Creating Reproducible Documentation
                </h3>
            </a>
        </li>

        <li class="card mb-3">
            <a href="{base}/blog/posts/markdown-for-teams" style="display: block; padding: 1.5rem; text-decoration: none;">
                <h3 style="margin: 0; font-size: 1.5rem; color: #000000; transition: color 0.2s ease;">
                    Markdown for Technical Teams
                </h3>
            </a>
        </li>

        <li class="card mb-3">
            <a href="{base}/blog/posts/privacy-first-tools" style="display: block; padding: 1.5rem; text-decoration: none;">
                <h3 style="margin: 0; font-size: 1.5rem; color: #000000; transition: color 0.2s ease;">
                    Privacy-First Tools and Why They Matter
                </h3>
            </a>
        </li>
    </ul>
</div>

<style>
    .card:hover h3 {
        color: var(--accent);
    }
</style>
