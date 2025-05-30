<script>
  import { onMount } from 'svelte';
  let scrolled = false;

  function handleScroll() {
    scrolled = window.scrollY > 80;
  }

  onMount(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  });
</script>

<nav class="navbar {scrolled ? 'scrolled' : ''}">
  <div class="navbar-content">
    <div class="navbar-title">Sameer Jangda</div>
    <div class="navbar-links">
      <a href="#education">Education</a>
      <a href="#experience">Experience</a>
      <a href="#projects">Projects</a>
      <a href="#contact">Contact</a>
    </div>
  </div>
</nav>

<style>
.navbar {
  position: sticky;
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
  background: black;
  z-index: 1000;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
  transition:
    background 0.3s,
    backdrop-filter 0.3s,
    margin-top 0.3s,
    width 0.3s,
    border-radius 0.3s;
  height: 5rem;
  display: flex;
  align-items: center;
  justify-content: center;
}
.navbar.scrolled {
  background: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(8px);
  margin-top: 2.5rem;
  width: 70%;
  border-radius: 0.75rem;
  left: 0;
  right: 0;
  margin-left: auto;
  margin-right: auto;
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
}
.navbar-links a:hover {
  background: #282828;
}
</style>
