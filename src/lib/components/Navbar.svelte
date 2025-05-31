<script>
  import { onMount } from 'svelte';
  let detached = false;
  let lastScrollY = 0;

  function handleScroll() {
    const currentY = window.scrollY;
    if (currentY <= 80) {
      detached = false;
    } else if (currentY > 80) {
      detached = true;
    }
    lastScrollY = currentY;
  }

  onMount(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  });
</script>

<nav
  class="navbar"
  style="
    top: 1rem;
    width: 68%;
    border-radius: 0.75rem;
    margin-left: auto;
    margin-right: auto;
    backdrop-filter: blur(8px);
    background: transparent;
  "
>
  <div
    class="navbar-bg"
    style="
      border-radius: 0.75rem;
      background: linear-gradient(to bottom, rgba(9, 9, 9, 0.85) 0%, rgba(56, 31, 87, 0.85) 100%);
      position: absolute;
      inset: 0;
      z-index: 0;
      pointer-events: none;
      box-shadow: 0 6px 24px 0 rgba(255,255,255,0.07);
    "
  ></div>
  <div class="navbar-content" style="position: relative; z-index: 1;">
    <div class="navbar-title">PLACEHOLDER</div>
    <div class="navbar-links">
      <a href="#education">Education</a>
      <a href="#projects">Projects</a>
      <a href="#contact">Contact</a>
    </div>
  </div>
</nav>

<style>
.navbar {
  position: fixed;
  left: 0;
  right: 0;
  z-index: 1000;
  transition:
    top 0.18s,
    width 0.5s cubic-bezier(0.4,0,0.2,1),
    border-radius 0.18s,
    backdrop-filter 0.18s,
    background 0.3s;
  height: 5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background: transparent;
}
.navbar-bg {
  /* All styles are inline for dynamic border-radius */
}
.navbar-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1100px;
  width: 100%;
  padding: 1.25rem 2.5rem;
}
.navbar-title {
  color: #fff;
  font-size: 1.1rem;
  font-weight: 400;
  padding: 0.75rem 1.25rem;
  border-radius: 4px;
  text-decoration: none;
  display: flex;
  align-items: center;
}
.navbar-links {
  display: flex;
  gap: 2rem;
}
.navbar-links a {
  color: #fff;
  text-decoration: none;
  font-size: 1.1rem;
  padding: 0.75rem 1.25rem;
  border-radius: 4px;
  transition: background 0.2s;
  font-weight: 400;
}
.navbar-links a:hover {
  background: #282828;
}
</style>
