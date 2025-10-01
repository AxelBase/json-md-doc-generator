<script lang="ts">
	import { base } from '$app/paths';

	const posts = [
		{ href: '/blog/posts/getting-started', title: 'Getting Started with JSON and Markdown' },
		{ href: '/blog/posts/why-convert', title: 'Why Convert JSON to Markdown?' },
		{ href: '/blog/posts/formatting-arrays-objects', title: 'Formatting Arrays and Objects Effectively' },
		{ href: '/blog/posts/common-errors', title: 'Common JSON Validation Errors (and Fixes)' },
		{ href: '/blog/posts/reproducible-docs', title: 'Creating Reproducible Documentation' },
		{ href: '/blog/posts/markdown-for-teams', title: 'Markdown for Technical Teams' },
		{ href: '/blog/posts/privacy-first-tools', title: 'Privacy-First Tools and Why They Matter' }
	];
</script>

<div class="container py-4">
	<h1 class="mb-4">The AxelBase Blog</h1>
	<p>Welcome to the json-md-doc-generator blog — a space where we share insights, tips, and guides...</p>

	<h2 class="mb-4 mt-5">Posts</h2>
	<ul style="list-style: none; padding: 0;">
		{#each posts as post}
			<li class="card mb-3">
				<a href={base + post.href} style="display: block; padding: 1.5rem; text-decoration: none;">
					<h3 style="margin: 0; font-size: 1.5rem; color: #000000; transition: color 0.2s ease;">
						{post.title}
					</h3>
				</a>
			</li>
		{/each}
	</ul>
</div>

<style>
	.card:hover h3 {
		color: var(--accent);
	}
</style>
