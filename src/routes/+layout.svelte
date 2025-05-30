<script>
  import '../app.css';
  import Navbar from '$lib/components/Navbar.svelte';
  import BlobsBackground from '$lib/components/BlobsBackground.svelte';
</script>

<div style="position: relative;">
  <BlobsBackground />
</div>
<Navbar />
<slot />
