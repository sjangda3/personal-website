<script lang="ts">
  import { onMount } from 'svelte';

  let progress = 0;

  onMount(() => {
    const START = 0;
    const END = 120;
    let raf = 0;
    const update = () => {
      raf = 0;
      const y = window.scrollY;
      const p = Math.min(1, Math.max(0, (y - START) / (END - START)));
      progress = p * p * (3 - 2 * p);
    };
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };
    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  });

  function scrollTo(e: MouseEvent, selector: string) {
    const target = selector === '#top'
      ? document.body
      : document.querySelector(selector);
    if (!target) return;
    e.preventDefault();
    const top = selector === '#top'
      ? 0
      : (target as HTMLElement).getBoundingClientRect().top + window.scrollY - 80;
    window.scrollTo({ top, behavior: 'smooth' });
  }

  $: navStyle = `--p: ${progress};`;
</script>

<nav class="nav" style={navStyle}>
  <div class="nav-inner">
    <button type="button" class="home" aria-label="Scroll to top" on:click={(e) => scrollTo(e, '#top')}>
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 11L12 3l9 8"/><path d="M5 10v10h5v-6h4v6h5V10"/></svg>
    </button>
    <div class="links">
      <a href="#education" on:click={(e) => scrollTo(e, '#education')}>Education</a>
      <a href="#experience" on:click={(e) => scrollTo(e, '#experience')}>Experience</a>
      <a href="#projects" on:click={(e) => scrollTo(e, '#projects')}>Projects</a>
    </div>

    <a class="cta" href="mailto:sameer.jangda@gmail.com" on:click|stopPropagation>
      Get in touch
      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><line x1="7" y1="17" x2="17" y2="7"/><polyline points="7 7 17 7 17 17"/></svg>
    </a>
  </div>
</nav>

<style>
  .nav {
    position: fixed;
    top: 0.9rem;
    left: 0;
    right: 0;
    z-index: 1000;
    display: flex;
    justify-content: center;
    pointer-events: none;
  }

  .nav-inner {
    pointer-events: auto;
    display: flex;
    align-items: center;
    gap: 0.25rem;
    width: min(1050px, calc(100% - 2rem));
    padding: 0.55rem 0.6rem 0.55rem 0.6rem;
    border-radius: 14px;
    background:
      linear-gradient(rgba(255, 255, 255, calc(var(--p) * 0.92)), rgba(255, 255, 255, calc(var(--p) * 0.92))),
      #f0f0f0;
    border: 1px solid rgba(0, 0, 0, calc(var(--p) * 0.08));
    box-shadow: 0 calc(var(--p) * 8px) calc(var(--p) * 24px) rgba(0, 0, 0, calc(var(--p) * 0.06));
    backdrop-filter: blur(calc(var(--p) * 14px)) saturate(calc(100% + var(--p) * 80%));
    -webkit-backdrop-filter: blur(calc(var(--p) * 14px)) saturate(calc(100% + var(--p) * 80%));
    transform: translateZ(0);
    will-change: background, box-shadow, border-color, backdrop-filter;
  }

  .home {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 34px;
    height: 34px;
    padding: 0;
    background: transparent;
    border: none;
    color: #4a4a4a;
    border-radius: 8px;
    cursor: pointer;
    transition: color 0.15s ease, background 0.15s ease;
    flex-shrink: 0;
  }

  .home:hover {
    color: #0a0a0a;
    background: rgba(0, 0, 0, 0.04);
  }

  .links {
    display: flex;
    align-items: center;
    gap: 0.25rem;
  }

  .links a {
    position: relative;
    padding: 0.45rem 0.8rem;
    color: #4a4a4a;
    font-size: 0.9rem;
    font-weight: 500;
    text-decoration: none;
    border-radius: 8px;
    transition: color 0.15s ease, background 0.15s ease;
    cursor: pointer;
  }

  .links a:hover {
    color: #0a0a0a;
    background: rgba(0, 0, 0, 0.04);
  }

  .cta {
    display: inline-flex;
    align-items: center;
    gap: 0.4rem;
    padding: 0.5rem 0.9rem;
    margin-left: auto;
    background: #0a0a0a;
    color: #fff;
    border-radius: 10px;
    font-size: 0.85rem;
    font-weight: 500;
    text-decoration: none;
    transition: transform 0.15s ease, box-shadow 0.15s ease, background 0.15s ease;
    flex-shrink: 0;
    position: relative;
    z-index: 1;
  }

  .cta:hover {
    transform: translateY(-1px);
    background: #222;
    box-shadow: 0 6px 16px rgba(0, 0, 0, 0.12);
  }

  @media (max-width: 640px) {
    .nav-inner {
      gap: 0.5rem;
      width: calc(100% - 1rem);
      padding: 0.45rem 0.5rem 0.45rem 0.9rem;
    }
    .links a {
      padding: 0.4rem 0.55rem;
      font-size: 0.82rem;
    }
    .cta {
      padding: 0.45rem 0.7rem;
      font-size: 0.8rem;
    }
    .cta svg {
      display: none;
    }
  }
</style>
