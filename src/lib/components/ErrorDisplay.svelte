<script lang="ts">
  export let error: string | null = null;
</script>

{#if error}
  <div class="alert alert-danger mt-2" role="alert">
    {error}
  </div>
{/if}
