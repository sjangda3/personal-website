<style>
.main-content {
  width: 70%;
  margin: 0 auto;
  max-width: 1100px;
  min-width: 320px;
}
@media (max-width: 900px) {
  .main-content {
    width: 90%;
  }
}
.sameer-heading {
  font-family: 'Inter', sans-serif;
  font-weight: 600;
  font-size: 3rem;
  background: linear-gradient(180deg, #ffffff,rgb(83, 203, 233));
  color: transparent;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}
.section-heading {
  font-family: 'Inter', sans-serif;
  font-weight: 575;
  font-size: 2.35rem;
  background: linear-gradient(180deg, #ffffff,rgb(68, 200, 233));
  color: transparent;
  -webkit-background-clip: text;x
  -webkit-text-fill-color: transparent;
  background-clip: text;
}
.intro-buttons {
  display: flex;
  gap: 1.5rem;
  margin-top: 1.1rem;
}
.intro-btn {
  display: flex;
  align-items: center;
  gap: .4rem;
  background: rgb(140, 26, 234);
  color: #eaf6ff;
  font-family: 'Inter', sans-serif;
  font-weight: 500;
  font-size: .9rem;
  padding: 0.75rem 2.405rem;
  border: none;
  border-radius: 0.4rem;
  text-decoration: none;
  transition: background 0.18s, color 0.18s, transform 0.18s;
  cursor: pointer;
}
.intro-btn:hover, .intro-btn:focus {
  background:rgb(242, 146, 237);
  color: #222;
  transform: scale(1.06);
}
</style>

<script>
  import EducationSection from '$lib/components/EducationSection.svelte';
  import ProjectsSection from '$lib/components/ProjectsSection.svelte';
</script>

<div class="main-content">
  <section id="intro" style="min-height: 30vh; padding-top: 6.5rem;">
    <h1 class="sameer-heading">Hi, I'm Sameer Jangda</h1>
    <div class="intro-buttons">
      <a class="intro-btn" href="https://www.linkedin.com/in/sameerjangda/" target="_blank" rel="noopener" aria-label="LinkedIn">
        <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.268c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm13.5 11.268h-3v-5.604c0-1.337-.025-3.063-1.868-3.063-1.868 0-2.154 1.459-2.154 2.968v5.699h-3v-10h2.881v1.367h.041c.401-.761 1.379-1.563 2.838-1.563 3.036 0 3.6 2.001 3.6 4.601v5.595z"/></svg>
        LinkedIn
      </a>
      <a class="intro-btn" href="https://github.com/sjangda3" target="_blank" rel="noopener" aria-label="GitHub">
        <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.627 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.387.6.113.82-.258.82-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.84 1.237 1.84 1.237 1.07 1.834 2.809 1.304 3.495.997.108-.775.418-1.305.762-1.605-2.665-.305-5.466-1.334-5.466-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.523.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.553 3.297-1.23 3.297-1.23.653 1.653.242 2.873.119 3.176.77.84 1.235 1.91 1.235 3.221 0 4.609-2.803 5.624-5.475 5.921.43.371.823 1.102.823 2.222v3.293c0 .322.218.694.825.576 4.765-1.589 8.2-6.085 8.2-11.386 0-6.627-5.373-12-12-12z"/></svg>
        GitHub
      </a>
      <a class="intro-btn" href="/resume.pdf" target="_blank" rel="noopener" aria-label="Resume">
        <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M14 2H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z"/></svg>
        Resume
      </a>
    </div>
  </section>
  <EducationSection />
  <ProjectsSection />
  <section id="contact" style="min-height: 40vh; padding-top: 2rem;">
    <h1 class="section-heading">Contact</h1>
    <!-- Add your contact content here -->
  </section>
</div>


