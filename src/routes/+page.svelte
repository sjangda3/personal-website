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
  gap: .9rem;
  margin-top: 1.1rem;
}
.intro-btn {
  display: flex;
  align-items: center;
  gap: .4rem;
  background: transparent;
  color: #eaf6ff;
  font-family: 'Inter', sans-serif;
  font-weight: 500;
  font-size: .9rem;
  padding: 0.6rem 2.5rem;
  border: 1.5px solid rgba(83, 203, 233, 0.6);
  border-radius: 0.6rem;
  text-decoration: none;
  transition: all 0.3s ease;
  cursor: pointer;
  position: relative;
  overflow: hidden;
}
.intro-btn:hover, .intro-btn:focus {
  border-color: rgba(83, 203, 233, 1);
  background: rgba(83, 203, 233, 0.1);
  transform: translateY(-2px);
  box-shadow: 0 8px 25px rgba(83, 203, 233, 0.15);
}
.contact-card {
  background: #23232a;
  border-radius: 1rem;
  padding: 2.2rem 2.5rem;
  margin: 2.5rem auto 0 auto;
  max-width: 1100px;
  min-width: 320px;
  display: flex;
  flex-direction: column;
  gap: 1.3rem;
  border: 1px solid #353545;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  overflow: hidden;
}

.contact-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(45deg, rgba(83,203,233,0.1), rgba(242,146,237,0.1));
  opacity: 0;
  transition: opacity 0.3s ease;
}

.contact-card:hover {
  box-shadow: 0 6px 32px 0 rgba(83,203,233,0.13), 0 2px 12px 0 rgba(0,0,0,0.13);
  border-color: rgba(83,203,233,0.3);
}

.contact-card:hover::before {
  opacity: 1;
}

.contact-row {
  display: flex;
  align-items: center;
  gap: 1.1rem;
  font-size: 1.18rem;
  color: #eaf6ff;
  transition: transform 0.2s ease;
  position: relative;
  z-index: 1;
}

.contact-card:hover .contact-row {
  transform: translateX(8px);
}

.contact-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 2.2rem;
  transition: transform 0.3s ease;
}

.contact-card:hover .contact-icon {
  transform: scale(1.2) rotate(2deg);
}

.contact-link {
  color: #eaf6ff;
  text-decoration: none;
  font-family: 'Inter', sans-serif;
  font-size: 1.18rem;
  transition: all 0.2s ease;
  position: relative;
}

.contact-link::after {
  content: '';
  position: absolute;
  bottom: -2px;
  left: 0;
  width: 0;
  height: 1px;
  background: linear-gradient(90deg, #53cbe9, #f292ed);
  transition: width 0.3s ease;
}

.contact-link:hover {
  color: #aeefff;
}

.contact-link:hover::after {
  width: 100%;
}

/* intro section two-column layout */
.intro-grid {
  display: flex;
  gap: 3.5rem;
  align-items: center;
  justify-content: center;
}
.intro-left {
  flex: 1 1 0;
  min-width: 320px;
}
.intro-right {
  flex: 1 1 0;
  min-width: 320px;
  display: flex;
  align-items: center;
  justify-content: center;
}

/* color palette showcase */
.color-palette {
  position: relative;
  width: 280px;
  height: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.color-swatch {
  position: absolute;
  border-radius: 50%;
  opacity: 0.8;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  backdrop-filter: blur(1px);
  z-index: 2;
  cursor: pointer;
  animation: gentlePulse 4s ease-in-out infinite;
}

.color-swatch:hover {
  opacity: 1;
  transform: scale(1.2) rotate(10deg);
  filter: brightness(1.2);
  animation-play-state: paused;
}

.color-swatch:active {
  transform: scale(0.95) rotate(-5deg);
  transition: all 0.1s ease;
}

.color-swatch::before {
  content: '';
  position: absolute;
  top: -5px;
  left: -5px;
  right: -5px;
  bottom: -5px;
  border-radius: 50%;
  background: inherit;
  opacity: 0;
  filter: blur(10px);
  transition: opacity 0.3s ease;
  z-index: -1;
}

.color-swatch:hover::before {
  opacity: 0.5;
}

@keyframes gentlePulse {
  0%, 100% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.02);
  }
}

/* Individual circle hover colors */
.dark-purple:hover {
  background: rgb(76, 51, 107);
}

.deep-magenta:hover {
  background: rgb(255, 255, 255);
  box-shadow: 0 6px 24px rgba(255, 255, 255, 0.4);
}

.light-lavender:hover {
  background: rgb(255, 166, 220);
}

.dark-magenta:hover {
  background: rgb(125, 35, 113);
}

.dark-purple {
  width: 60px;
  height: 60px;
  background:rgb(56, 31, 87);
  top: 130px;
  left: 40px;
  box-shadow: 0 8px 32px rgba(56, 31, 87, 0.3);
}

.deep-magenta {
  width: 45px;
  height: 45px;
  background:rgb(255, 255, 255);
  top: 150px;
  right: 30px;
  box-shadow: 0 6px 24px rgba(146, 4, 139, 0.3);
}

.light-lavender {
  width: 35px;
  height: 35px;
  background:rgb(255, 146, 200);
  bottom: -50px;
  left: 80px;
  box-shadow: 0 4px 16px rgba(243, 243, 255, 0.2);
}

.dark-magenta {
  width: 50px;
  height: 50px;
  background: rgb(105, 15, 93);
  bottom: -80px;
  right: 60px;
  box-shadow: 0 6px 28px rgba(105, 15, 93, 0.25);
}

.gradient-line {
  position: absolute;
  width: 115px;
  height: 2px;
  background: linear-gradient(90deg,rgb(255, 255, 255),rgb(207, 71, 200));
  top: 208px;
  left: 78px;
  transform: rotate(35deg);
  border-radius: 1px;
  opacity: 0.8;
  z-index: 1;
}

@media (max-width: 900px) {
  .intro-grid {
    flex-direction: column;
    gap: 2rem;
  }
  .intro-right {
    order: -1;
  }
  .color-palette {
    width: 220px;
    height: 150px;
    transform: scale(0.9);
  }
}
</style>

<script>
  import EducationSection from '$lib/components/EducationSection.svelte';
  import ProjectsSection from '$lib/components/ProjectsSection.svelte';
</script>

<div class="main-content">
  <section id="intro" style="min-height: 30vh; padding-top: 4rem;">
    <div class="intro-grid">
      <div class="intro-left">
        <h1 class="sameer-heading">Hi, I'm Sameer Jangda</h1>
        <div class="intro-buttons">
          <a class="intro-btn" href="https://www.linkedin.com/in/sameerjangda/" target="_blank" rel="noopener" aria-label="LinkedIn">
            <svg width="15" height="15" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.268c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm13.5 11.268h-3v-5.604c0-1.337-.025-3.063-1.868-3.063-1.868 0-2.154 1.459-2.154 2.968v5.699h-3v-10h2.881v1.367h.041c.401-.761 1.379-1.563 2.838-1.563 3.036 0 3.6 2.001 3.6 4.601v5.595z"/></svg>
            LinkedIn
          </a>
          <a class="intro-btn" href="https://github.com/sjangda3" target="_blank" rel="noopener" aria-label="GitHub">
            <svg width="15" height="15" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.627 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.387.6.113.82-.258.82-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.84 1.237 1.84 1.237 1.07 1.834 2.809 1.304 3.495.997.108-.775.418-1.563.762-1.605-2.665-.305-5.466-1.334-5.466-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.523.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.553 3.297-1.23 3.297-1.23.653 1.653.242 2.873.119 3.176.77.84 1.235 1.91 1.235 3.221 0 4.609-2.803 5.624-5.475 5.921.43.371.823 1.102.823 2.222v3.293c0 .322.218.694.825.576 4.765-1.589 8.2-6.085 8.2-11.386 0-6.627-5.373-12-12-12z"/></svg>
            GitHub
          </a>
          <a class="intro-btn" href="/resume.pdf" target="_blank" rel="noopener" aria-label="Resume">
            <svg width="15" height="15" fill="currentColor" viewBox="0 0 24 24"><path d="M14 2H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z"/></svg>
            Resume
          </a>
        </div>
      </div>
      <div class="intro-right">
        <div class="color-palette">
          <div class="color-swatch dark-purple"></div>
          <div class="color-swatch deep-magenta"></div>
          <div class="color-swatch light-lavender"></div>
          <div class="color-swatch dark-magenta"></div>
          <div class="color-line gradient-line"></div>
        </div>
      </div>
    </div>
  </section>
  <EducationSection />
  <ProjectsSection />
  <section id="contact" style="min-height: 40vh; padding-top: 4rem;">
    <h1 class="section-heading">Get in Touch</h1>
    <div class="contact-card">
      <div class="contact-row">
        <span class="contact-icon">
          <svg width="22" height="22" fill="none" stroke="#eaf6ff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><rect x="3" y="5" width="18" height="14" rx="3"/><path d="M3 7l9 6 9-6"/></svg>
        </span>
        <a class="contact-link" href="mailto:sameer.jangda@gmail.com">sameer.jangda@gmail.com</a>
      </div>
      <div class="contact-row">
        <span class="contact-icon"> 
          <svg width="22" height="22" fill="none" stroke="#eaf6ff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><path d="M12 2C6.477 2 2 6.484 2 12.021c0 4.428 2.865 8.184 6.839 9.504.5.092.682-.217.682-.483 0-.237-.009-.868-.014-1.703-2.782.605-3.369-1.342-3.369-1.342-.454-1.157-1.11-1.465-1.11-1.465-.908-.62.069-.608.069-.608 1.004.07 1.532 1.032 1.032 1.032.892 1.53 2.341 1.088 2.91.832.091-.647.35-1.088.636-1.339-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.987 1.029-2.686-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.025A9.564 9.564 0 0 1 12 6.844c.85.004 1.705.115 2.504.337 1.909-1.295 2.748-1.025 2.748-1.025.546 1.378.202 2.397.1 2.65.64.699 1.028 1.593 1.028 2.686 0 3.847-2.338 4.695-4.566 4.944.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.744 0 .268.18.579.688.481C19.138 20.2 22 16.447 22 12.021 22 6.484 17.523 2 12 2z"/></svg>
        </span>
        <a class="contact-link" href="https://github.com/sjangda3" target="_blank" rel="noopener">/sjangda3</a>
      </div>
      <div class="contact-row">
        <span class="contact-icon"> 
          <svg width="22" height="22" fill="none" stroke="#eaf6ff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><rect x="2" y="2" width="20" height="20" rx="5"/><path d="M16 8a4 4 0 0 1 4 4v6M8 8v10M8 12h.01M16 12h.01"/></svg>
        </span>
        <a class="contact-link" href="https://linkedin.com/in/sameerjangda/" target="_blank" rel="noopener">/in/sameerjangda</a>
      </div>
      <div class="contact-row">
        <span class="contact-icon">
          <svg width="22" height="22" fill="none" stroke="#eaf6ff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><path d="M12 21c-4.418 0-8-5.373-8-10a8 8 0 1 1 16 0c0 4.627-3.582 10-8 10z"/><circle cx="12" cy="11" r="3"/></svg>
        </span>
        <span class="contact-link">Atlanta, Georgia</span>
      </div>
    </div>
  </section>
</div>


