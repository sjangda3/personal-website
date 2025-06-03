<script>
  // no script logic needed for static content
  // you can replace the project data and images as needed
</script>

<!-- projects section with grid of cards -->
<section class="projects-section">
  <h1 class="section-heading">Projects</h1>
  <div class="projects-grid">
    <div class="project-card">
      <img class="project-img" src="/placeholder-spotify.png" alt="Sonderly" />
      <div class="project-title">Sonderly | AI Language Translator</div>
      <div class="project-desc">An AI-powered voice translation tool that enables real-time, cross-language conversations through speech recognition, intelligent translation, and speech synthesis.</div>
    </div>
    <div class="project-card">
      <img class="project-img" src="/placeholder-arabic.png" alt="Arabic Language Partner" />
      <div class="project-title">Arabic Language Partner</div>
      <div class="project-desc">An interactive platform that helps users practice and learn Arabic through real-time conversations with a language partner. Perfect for English speakers looking to enhance their conversational Arabic skills with a focus on dialect.</div>
    </div>
    <div class="project-card">
      <img class="project-img" src="/placeholder-aws.png" alt="AWS-Powered Photo Hub" />
      <div class="project-title">AWS-Powered Photo Hub</div>
      <div class="project-desc">Developing a scalable photo storage feature with AWS Lambda, using serverless functions to automatically handle increased traffic by instantiating multiple function instances, removing the need for manual scaling.</div>
    </div>
    <div class="project-card">
      <img class="project-img" src="/placeholder-budget.png" alt="SpendWise | Budgeting Application" />
      <div class="project-title">SpendWise | Budgeting Application</div>
      <div class="project-desc">Developed a budgeting app to simplify financial management by integrating the 50-30-20 rule algorithm.</div>
    </div>
  </div>
</section>

<style>
/* projects section grid layout */
.projects-section {
  min-height: 40vh;
  padding-top: 2rem;
}
.projects-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  margin-top: 1.5rem;
}
.project-card {
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
  background: #19191b;
  border-bottom: 1px solid #353545;
}
.project-title {
  font-family: 'Inter', sans-serif;
  font-weight: 600;
  font-size: 1.15rem;
  color: #fff;
  margin: 1.1rem 1.2rem 0.5rem 1.2rem;
}
.project-desc {
  font-family: 'Inter', sans-serif;
  font-size: 1rem;
  color: #d7dfe4;
  margin: 0 1.2rem;
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
@media (max-width: 900px) {
  .projects-grid {
    grid-template-columns: 1fr;
  }
}
</style> 