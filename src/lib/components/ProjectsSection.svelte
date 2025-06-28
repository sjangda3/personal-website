<script>
  // no script logic needed for static content
  // you can replace the project data and images as needed
</script>

<!-- projects section with grid of cards -->
<section class="projects-section" id="projects">
  <h1 class="section-heading">Projects</h1>
  <div class="projects-grid">
    <a class="project-card" href="https://sonder-nine-beta.vercel.app/" target="_blank" rel="noopener">
      <img class="project-img" src="/sonderly.png" alt="Sonderly" />
      <div class="project-title">Sonderly | AI Language Translator</div>
      <div class="project-desc">A voice translation tool that lets you have natural, real-time conversations across languages. It recognizes speech, translates instantly, and speaks back the translation, helping you easily communicate despite language barriers.
</div>
    </a>
    <a class="project-card" href="https://github.com/sjangda3/FitJacket" target="_blank" rel="noopener">
      <img class="project-img" src="/FitJacket.png" alt="FitJacket" />
      <div class="project-title">FitJacket</div>
      <div class="project-desc">A full-stack fitness tracking app built with Django and SvelteKit that lets users log workouts, track progress, and view interactive stats. It features real-time Strava integration and uses the OpenAI API to generate personalized fitness insights based on user activity.
</div>
    </a>
  </div>
</section>

<style>
/* projects section grid layout */
.projects-section {
  min-height: 40vh;
  padding-top: 2rem;
}
@media (max-width: 768px) {
  .projects-section {
    padding-top: 1.5rem;
  }
}
.projects-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  margin-top: 1.5rem;
}
@media (max-width: 900px) {
  .projects-grid {
    grid-template-columns: 1fr;
  }
}
@media (max-width: 768px) {
  .projects-grid {
    gap: 1.5rem;
    margin-top: 1rem;
  }
}
.project-card {
  text-decoration: none;
  color: inherit;
  background: #23232a;
  border: 1px solid #353545;
  border-radius: 1rem;
  box-shadow: 0 2px 12px 0 rgba(0,0,0,0.07);
  padding: 0 0 1.2rem 0;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  transition: box-shadow 0.18s, transform 0.18s;
}
.project-card:hover {
  box-shadow: 0 6px 32px 0 rgba(83,203,233,0.13), 0 2px 12px 0 rgba(0,0,0,0.13);
  transform: translateY(-4px) scale(1.012);
}
.project-img {
  width: 100%;
  height: 170px;
  object-fit: cover;
  object-position: center top;
  background: #19191b;
  border-bottom: 1px solid #353545;
}
@media (max-width: 768px) {
  .project-img {
    height: 140px;
  }
}
@media (max-width: 480px) {
  .project-img {
    height: 120px;
  }
}
.project-title {
  font-family: 'Inter', sans-serif;
  font-weight: 600;
  font-size: 1.15rem;
  color: #fff;
  margin: 1.1rem 1.2rem 0.5rem 1.2rem;
}
@media (max-width: 768px) {
  .project-title {
    font-size: 1.05rem;
    margin: 1rem 1rem 0.4rem 1rem;
  }
}
@media (max-width: 480px) {
  .project-title {
    font-size: 1rem;
    margin: 0.8rem 0.8rem 0.3rem 0.8rem;
  }
}
.project-desc {
  font-family: 'Inter', sans-serif;
  font-size: 1rem;
  color: #d7dfe4;
  margin: 0 1.2rem;
}
@media (max-width: 768px) {
  .project-desc {
    font-size: 0.9rem;
    margin: 0 1rem;
  }
}
@media (max-width: 480px) {
  .project-desc {
    font-size: 0.85rem;
    margin: 0 0.8rem;
  }
}
.section-heading {
  font-family: 'Inter', sans-serif;
  font-weight: 575;
  font-size: 2.35rem;
  background: linear-gradient(180deg, #ffffff,rgb(68, 200, 233));
  color: transparent;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin-bottom: 0.5rem;
}
@media (max-width: 768px) {
  .section-heading {
    font-size: 1.8rem;
  }
}
@media (max-width: 480px) {
  .section-heading {
    font-size: 1.5rem;
  }
}
@media (max-width: 900px) {
  .projects-grid {
    grid-template-columns: 1fr;
  }
}
</style> 