<nav
  class="navbar"
  style="
    top: 1rem;
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
      background: linear-gradient(to bottom, rgba(9, 9, 9, 0.80) 0%, rgba(56, 31, 87, 0.80) 100%);
      position: absolute;
      inset: 0;
      z-index: 0;
      pointer-events: none;
      box-shadow: 0 6px 24px 0 rgba(255,255,255,0.07);
    "
  ></div>
  <div class="navbar-content" style="position: relative; z-index: 1;">
    <div class="navbar-title">
      <button class="home-btn" aria-label="Home" on:click={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
        <svg width="21" height="21" viewBox="0 0 24 24" fill="none">
          <path d="M4 12L12 5L20 12" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M5 12V19H19V12" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </button>
    </div>
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
  border: 1px solid #353545;
  width: 1150px;
  max-width: 95vw;
  min-width: 320px;
  margin-left: auto;
  margin-right: auto;
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
  gap: 1rem;
}
.navbar-links a {
  color: #fff;
  text-decoration: none;
  font-size: 1.1rem;
  padding: 0.75rem 1.25rem;
  border-radius: 3.5px;
  transition: background 0.2s, transform 0.18s cubic-bezier(0.4,0,0.2,1);
  font-weight: 400;
}
.navbar-links a:hover {
  background: rgba(225, 16, 159, 0.4);
  transform: scale(1.08);
}
.home-btn {
  background: none;
  border: none;
  padding: 0.5rem;
  border-radius: 6px;
  cursor: pointer;
  display: flex;
  align-items: center;
  transition: background 0.2s, transform 0.18s cubic-bezier(0.4,0,0.2,1);
}
.home-btn:hover {
  background: rgba(225, 16, 159, 0.4);
  transform: scale(1.1);
}
</style>
