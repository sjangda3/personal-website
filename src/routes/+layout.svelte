<script>
  import '../app.css';
  import Navbar from '$lib/components/Navbar.svelte';
  import PasswordGate from '$lib/components/PasswordGate.svelte';
</script>

<PasswordGate>
  <Navbar />
  <slot />
</PasswordGate>
