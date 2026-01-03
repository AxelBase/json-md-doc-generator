<script lang="ts">
  import { base } from '$app/paths';
  import '../app.css';
  import { fly } from 'svelte/transition';

  const currentYear = new Date().getFullYear();

  let isDropdownOpen = false;

  function toggleDropdown() {
    isDropdownOpen = !isDropdownOpen;
  }

  function closeDropdown() {
    isDropdownOpen = false;
  }

  function clickOutside(node: HTMLElement) {
    const handleClick = (event: MouseEvent) => {
      if (node && !node.contains(event.target as Node) && !event.defaultPrevented) {
        node.dispatchEvent(new CustomEvent('click_outside'));
      }
    };
    document.addEventListener('click', handleClick, true);
    return {
      destroy() {
        document.removeEventListener('click', handleClick, true);
      }
    };
  }
</script>

<svelte:head>
  <title>JSON to Markdown Doc Generator</title>
  <meta name="description" content="Instantly convert complex JSON into clean, readable Markdown documentation. Privacy-first, client-side processing." />
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet">
</svelte:head>

<header class="custom-navbar">
  <nav class="container" style="display: flex; justify-content: space-between; align-items: center;">
    <div style="display: flex; align-items: center; gap: 1rem;">
      <a href="{base}/" aria-label="Home">
        <img src="{base}/AxelLab-Logo.ico" alt="AxelBase Logo" class="navbar-brand-logo" />
      </a>
      <a class="navbar-brand-text" href="{base}/" style="text-decoration: none;">AxelBase</a>

      <div class="coffee-container" use:clickOutside on:click_outside={closeDropdown}>
        <button
          class="coffee-button d-flex align-items-center gap-2 text-white border-0 px-4 py-2 rounded-pill shadow-sm"
          on:click={toggleDropdown}
          aria-label="Support options"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
            <path d="M2,21V19H20V21H2M20,8V5H4V8H20M20,10H4V13C4,14.38 4.5,15.63 5.31,16.58L11.64,19H12.36L18.69,16.58C19.5,15.63 20,14.38 20,13V10M16,2H8V4H16V2Z" />
          </svg>
          <span class="d-none d-sm-inline fw-semibold">Buy me a Coffee</span>
          <span class="d-sm-none fw-semibold">Coffee</span>
        </button>

        {#if isDropdownOpen}
          <div class="coffee-menu mt-2" transition:fly={{ y: -10, duration: 250 }}>
            <a href="https://buymeacoffee.com/axelbase" target="_blank" rel="noopener" on:click={closeDropdown}>
              <span class="amount">$3</span> One Coffee
            </a>
            <a href="https://buymeacoffee.com/axelbase" target="_blank" rel="noopener" on:click={closeDropdown}>
              <span class="amount">$5</span> Two Coffees
            </a>
            <a href="https://buymeacoffee.com/axelbase" target="_blank" rel="noopener" on:click={closeDropdown}>
              <span class="amount">$10</span> Three Coffees
            </a>

            <a href="https://buymeacoffee.com/axelbase" target="_blank" rel="noopener" on:click={closeDropdown} class="custom-amount">
              Custom Amount
            </a>

            <a
              href="bitcoin:bc1q3p0e6vt492m4w4fpz5m2cl4zcfuqqkgaj6myc9?label=AxelBase&message=Buy%20me%20a%20coffee"
              on:click={closeDropdown}
              class="custom-amount"
            >
              Buy via Crypto (Bitcoin)
            </a>
          </div>
        {/if}
      </div>
    </div>

    <ul style="list-style: none; display: flex; align-items: center; gap: 2rem; margin: 0;">
      <li><a class="nav-link" href="{base}/">Home</a></li>
      <li><a class="nav-link" href="{base}/#about">About</a></li>
      <li><a class="nav-link" href="{base}/#how-to-use">How to use</a></li>
      <li><a class="nav-link" href="{base}/#faq">FAQ</a></li>
      <li><a class="nav-link" href="{base}/blog">Blog</a></li>
    </ul>
  </nav>
</header>

<main class="container" style="flex-grow: 1; padding-top: 4rem; padding-bottom: 4rem;">
  <slot />
</main>

<footer class="custom-footer">
  <div class="container" style="display: flex; justify-content: space-between; align-items: center;">
    <p class="footer-text" style="margin: 0;">
      &copy; {currentYear} AxelBase — JSON to Markdown Doc Generator
    </p>
    <div style="display: flex; gap: 1.5rem;">
      <a href="{base}/privacy" class="footer-link">Privacy Policy</a>
      <a href="{base}/terms" class="footer-link">Terms and Conditions</a>
    </div>
  </div>
</footer>

<style>
  /* Keep all existing styles from File 2, only override/adapt the coffee button & menu */

  .coffee-container {
    position: relative;
    display: inline-block;
  }

  /* Button style from File 1 (pill shape, SVG icon, responsive text) adapted to dark theme */
  .coffee-button {
    background: var(--accent);
    color: white;
    border: none;
    font-size: 0.95rem;
    font-weight: 600;
    transition: all 0.3s ease;
  }

  .coffee-button:hover {
    background: var(--accent-hover);
    transform: translateY(-2px);
    box-shadow: 0 6px 14px -2px var(--shadow-color-hover);
  }

  .coffee-button svg {
    transition: transform 0.3s ease;
  }

  .coffee-button:hover svg {
    transform: scale(1.1) rotate(-5deg);
  }

  /* Dropdown menu adapted from File 1 to match dark theme */
  .coffee-menu {
    position: absolute;
    top: 110%;
    left: 50%;
    transform: translateX(-50%);
    width: 240px;
    background: var(--bg-light);
    border-radius: 16px;
    box-shadow: 0 12px 32px var(--shadow-color-hover);
    overflow: hidden;
    border: 1px solid var(--border-color);
    z-index: 1000;
    padding: 0.5rem 0;
  }

  .coffee-menu a {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 12px 20px;
    color: var(--text-light);
    text-decoration: none;
    font-size: 0.98rem;
    transition: all 0.2s ease;
  }

  .coffee-menu a:hover {
    background: var(--accent);
    color: white;
    padding-left: 28px;
  }

  .coffee-menu .amount {
    font-weight: 700;
    color: var(--accent);
    font-size: 1.1rem;
  }

  .coffee-menu .custom-amount {
    font-weight: 600;
    color: var(--accent);
    border-top: 1px solid var(--border-color);
    justify-content: center !important;
  }

  .coffee-menu .custom-amount:hover {
    background: var(--accent-hover);
    color: white;
  }
</style>