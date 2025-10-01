<script lang="ts">
  import { base } from '$app/paths';
  import '../app.css'; // Import the global stylesheet
  import { fly } from 'svelte/transition';

  // --- Configuration ---
  // IMPORTANT: Replace with your actual PayPal username
  const paypalUsername = 'AxelLab427'; // <--- PASTE YOUR USERNAME HERE
  const donationAmounts = [1, 3, 5, 10];

  // --- Dropdown State Management ---
  let isDropdownOpen = false;

  function toggleDropdown() {
    isDropdownOpen = !isDropdownOpen;
  }

  function closeDropdown() {
    isDropdownOpen = false;
  }

  // --- Svelte Action for Click Outside ---
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
        <button class="coffee-button" on:click={toggleDropdown}>
          <span>☕</span>
          <span>Buy me a coffee</span>
        </button>
        {#if isDropdownOpen}
          <div class="coffee-menu" transition:fly={{ y: -10, duration: 250 }}>
            {#each donationAmounts as amount}
              <a 
                href="https://paypal.me/{paypalUsername}/{amount}" 
                target="_blank" 
                rel="noopener noreferrer"
                on:click={closeDropdown}>
                ${amount}
              </a>
            {/each}
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
            &copy; {new Date().getFullYear()} AxelBase — JSON to Markdown Doc Generator
        </p>
        <div style="display: flex; gap: 1.5rem;">
            <a href="{base}/privacy" class="footer-link">Privacy Policy</a>
            <a href="{base}/terms" class="footer-link">Terms and Conditions</a>
        </div>
    </div>
</footer>