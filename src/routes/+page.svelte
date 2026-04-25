<script>
  const experiences = [
    {
      date: 'May 2026 - Aug 2026',
      role: 'Software Application Development Engineer Intern at',
      badge: 'workday',
      logo: '/workday.png',
      label: 'Workday',
      desc: 'Working on the <b>procurement team</b>, primarily focused on <b>agentic development</b> — building AI-driven tools and workflows to streamline internal procurement operations.'
    },
    {
      date: 'Jan 2025 - Present',
      role: 'Undergraduate Researcher at',
      badge: 'gtvip',
      logo: '/GT.svg',
      label: 'Georgia Tech VIP Program',
      desc: 'Developed a <b>FHIR-based visual analytics platform</b> using <b>Python</b> and <b>Tableau</b> to convert and visualize <b>Milwaukee County</b> drug overdose data, enabling demographic and geographic trend analysis for targeted public health interventions.'
    },
    {
      date: 'Jun 2023 - Aug 2023',
      role: 'Data Analyst Intern at',
      badge: 'intalage',
      logo: '/intalage.png',
      label: 'Intalage',
      desc: 'Applied <b>Python</b> and <b>Excel</b> to process and analyze large datasets for over <b>150 clients</b>, generating insightful weekly reports. Managed scheduling for <b>70% of teacher interviews</b> in Clayton County, accelerating the hiring process.'
    }
  ];
</script>

<main class="page">
  <section class="section intro">
    <h1 class="intro-heading">Sameer Jangda</h1>
    <p class="intro-sub">I'm a <span class="hl">full-stack developer</span> based in Atlanta, studying CS at Georgia Tech. I also do <span class="hl">motion graphics</span> on the side.</p>
    <div class="intro-links">
      <a href="mailto:sameer.jangda@gmail.com" class="intro-link">Email</a>
      <a href="https://github.com/sjangda3" target="_blank" rel="noopener" class="intro-link">GitHub</a>
      <a href="https://www.linkedin.com/in/sameerjangda/" target="_blank" rel="noopener" class="intro-link">LinkedIn</a>
      <a href="/resume.pdf" target="_blank" rel="noopener" class="intro-link">Resume</a>
    </div>
  </section>

  <section class="section">
    <h1 class="heading">Education</h1>
    <div class="experience-list">
      <div class="exp-row">
        <div class="exp-date">Aug 2023 - May 2027</div>
        <div class="exp-body">
          <div class="exp-title">
            <span>BS in Computer Science at</span>
            <span class="company company-gt">
              <span class="company-name">Georgia Tech</span>
              <img src="/GT.svg" alt="" class="company-logo" />
            </span>
          </div>
          <div class="exp-desc">
            <svg class="arrow" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#9a9a9a" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 6 15 12 9 18"/></svg>
            <p>Pursuing a <b>Bachelor of Science in Computer Science</b> with coursework in <b>machine learning</b>, <b>data structures</b>, and <b>linear algebra</b>. Expected graduation May 2027.</p>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section class="section">
    <h1 class="heading">Experience</h1>
    <div class="experience-list">
      {#each experiences as exp}
        <div class="exp-row">
          <div class="exp-date">{exp.date}</div>
          <div class="exp-body">
            <div class="exp-title">
              <span>{exp.role}</span>
              <span class="company company-{exp.badge}">
                <span class="company-name">{exp.label}</span>
                <img src={exp.logo} alt="" class="company-logo company-logo-{exp.badge}" />
              </span>
            </div>
            <div class="exp-desc">
              <svg class="arrow" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#9a9a9a" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 6 15 12 9 18"/></svg>
              <p>{@html exp.desc}</p>
            </div>
          </div>
        </div>
      {/each}
    </div>
  </section>

  <section class="section">
    <h1 class="heading">Projects</h1>
    <div class="project">
      <div class="project-frame">
        <div class="project-swap">
          <img src="/screen1.png" alt="Scope screen 1" class="project-image swap-base" />
          <img src="/screen2.png" alt="Scope screen 2" class="project-image swap-hover" />
        </div>
      </div>
      <h2 class="project-title">Scope</h2>
      <p class="project-desc">A native <b>SwiftUI iOS</b> field-tools app for roofing inspectors paired with a <b>Next.js</b> owner/admin web dashboard, sharing a single <b>Supabase</b> backend for auth, team invites, and inspection data.</p>
    </div>

    <div class="project">
      <div class="project-frame">
        <div class="project-swap">
          <img src="/screen3.png" alt="FitJacket screen 1" class="project-image swap-base" />
          <img src="/screen4.png" alt="FitJacket screen 2" class="project-image swap-hover" />
        </div>
      </div>
      <h2 class="project-title">FitJacket</h2>
      <p class="project-desc">A full-stack fitness tracking app built with <b>Django</b> and <b>SvelteKit</b> that lets users log workouts, track progress, and view interactive stats. Features real-time <b>Strava integration</b> and uses the <b>OpenAI API</b> to generate personalized fitness insights based on user activity.</p>
      <a class="view-btn" href="https://github.com/sjangda3/FitJacket" target="_blank" rel="noopener">
        View Project
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="7" y1="17" x2="17" y2="7"/><polyline points="7 7 17 7 17 17"/></svg>
      </a>
    </div>
  </section>
</main>

<style>
  .page {
    max-width: 1050px;
    margin: 0 auto;
    padding: 6rem 2rem 8rem;
  }

  .section {
    margin-bottom: 3.5rem;
  }

  .intro {
    margin-bottom: 3rem;
  }

  .intro-heading {
    font-size: 2.75rem;
    font-weight: 600;
    letter-spacing: -0.02em;
    color: #0a0a0a;
    margin: 0 0 1rem 0;
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap: 0.5rem;
  }

  .name-gradient {
    background: linear-gradient(90deg, #b3701f 0%, #ff5a5f 40%, #0081FB 80%, #b3701f 100%);
    background-size: 200% auto;
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
    animation: shimmer 6s linear infinite;
  }

  .heading-arrow {
    color: #8a8a8a;
    flex-shrink: 0;
    width: 1em;
    height: 1em;
  }

  @keyframes shimmer {
    0% { background-position: 0% center; }
    100% { background-position: 200% center; }
  }

  .wave {
    display: inline-block;
    transform-origin: 70% 70%;
    animation: wave 2.5s ease-in-out infinite;
  }

  @keyframes wave {
    0%, 60%, 100% { transform: rotate(0deg); }
    10% { transform: rotate(14deg); }
    20% { transform: rotate(-8deg); }
    30% { transform: rotate(14deg); }
    40% { transform: rotate(-4deg); }
    50% { transform: rotate(10deg); }
  }

  .hl {
    font-weight: 600;
    color: #111;
    background-image: linear-gradient(transparent 65%, #ffe0b8 65%);
    padding: 0 2px;
  }

  .intro-sub {
    font-size: 1.1rem;
    line-height: 1.6;
    color: #4a4a4a;
    margin: 0 0 1.5rem 0;
    max-width: 600px;
  }

  .intro-links {
    display: flex;
    flex-wrap: wrap;
    gap: 0.6rem;
  }

  .intro-link {
    display: inline-flex;
    align-items: center;
    padding: 0.5rem 0.9rem;
    background: #fff;
    border: 1px solid rgba(0, 0, 0, 0.1);
    border-radius: 0.5rem;
    color: #111;
    font-size: 0.9rem;
    font-weight: 500;
    text-decoration: none;
    transition: transform 0.15s ease, box-shadow 0.15s ease;
  }

  .intro-link:hover {
    transform: translateY(-1px);
    box-shadow: 0 6px 16px rgba(0, 0, 0, 0.06);
  }

  .heading {
    font-size: 2.25rem;
    font-weight: 600;
    letter-spacing: -0.02em;
    color: #0a0a0a;
    margin: 0 0 1rem 0;
  }

  .experience-list {
    display: flex;
    flex-direction: column;
    gap: 2rem;
  }

  .exp-row {
    display: grid;
    grid-template-columns: 180px 1fr;
    gap: 0.75rem;
    align-items: start;
  }

  .exp-date {
    font-size: 0.95rem;
    color: #8a8a8a;
    font-weight: 400;
    padding-top: 0.25rem;
  }

  .exp-body {
    display: flex;
    flex-direction: column;
    gap: 0.4rem;
  }

  .exp-title {
    display: flex;
    align-items: center;
    gap: 0.35rem;
    font-size: 1rem;
    font-weight: 500;
    color: #111;
    flex-wrap: wrap;
  }

  .company {
    display: inline-flex;
    align-items: center;
    gap: 0.25rem;
    transform-origin: left center;
    transition: transform 0.5s ease;
    position: relative;
  }

  .company:hover {
    transform: scale(1.03);
  }

  .company::after {
    content: '';
    position: absolute;
    left: 0;
    right: 0;
    bottom: -2px;
    height: 1px;
    background: currentColor;
    opacity: 0;
    transition: opacity 0.5s ease;
  }

  .company:hover::after {
    opacity: 1;
  }

  .company-name {
    font-weight: 600;
    color: inherit;
  }

  .company-workday {
    color: #0875e1;
  }

  .company-intalage {
    color: #2c2b70;
  }

  .company-gt,
  .company-gtvip {
    color: #b3a369;
  }

  .company-logo {
    width: 20px;
    height: 20px;
    object-fit: contain;
    display: block;
  }

  .company-logo-workday {
    width: 16px;
    height: 16px;
    transform: translateY(-2px);
  }


  .exp-desc {
    display: flex;
    align-items: flex-start;
    gap: 0.6rem;
  }

  .exp-desc .arrow {
    margin-top: 0.35rem;
    flex-shrink: 0;
  }

  .exp-desc p {
    margin: 0;
    color: #4a4a4a;
    font-size: 1rem;
    line-height: 1.55;
  }

  .exp-desc :global(b) {
    color: #111;
    font-weight: 600;
  }

  .project + .project {
    margin-top: 3rem;
  }

  .project-frame {
    position: relative;
    background-color: #fff;
    background-image:
      linear-gradient(to right, #e5e5e5 1px, transparent 1px),
      linear-gradient(to bottom, #e5e5e5 1px, transparent 1px);
    background-size: 18px 18px;
    border-radius: 1rem;
    padding: 2.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    -webkit-mask-image: radial-gradient(ellipse at center, #000 55%, rgba(0,0,0,0.6) 100%);
            mask-image: radial-gradient(ellipse at center, #000 55%, rgba(0,0,0,0.6) 100%);
    transition: transform 0.4s ease, box-shadow 0.4s ease;
  }

  .project-frame::before {
    content: '';
    position: absolute;
    inset: 0;
    background: radial-gradient(circle at 50% 0%, rgba(8, 117, 225, 0.08), transparent 60%);
    pointer-events: none;
    opacity: 0;
    transition: opacity 0.5s ease;
  }

  .project-frame:hover::before {
    opacity: 1;
  }

  .project-frame:hover {
    box-shadow: 0 10px 40px rgba(0, 0, 0, 0.06);
  }

  .project-swap {
    position: relative;
    width: 85%;
    display: flex;
    justify-content: center;
  }

  .project-image {
    width: 100%;
    border-radius: 0.75rem;
    box-shadow: 0 20px 50px rgba(0, 0, 0, 0.12);
  }

  .swap-hover {
    position: absolute;
    inset: 0;
    opacity: 0;
    transition: opacity 0.85s ease;
  }

  .project-frame:hover .swap-hover {
    opacity: 1;
  }

  .project-title {
    font-size: 1.5rem;
    font-weight: 700;
    color: #0a0a0a;
    margin: 1.75rem 0 0.75rem;
    letter-spacing: -0.01em;
  }

  .project-desc {
    color: #4a4a4a;
    font-size: 1rem;
    line-height: 1.55;
    margin: 0 0 1.5rem;
  }

  .project-desc :global(b) {
    color: #111;
    font-weight: 600;
  }

  .view-btn {
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    padding: 0.7rem 1.1rem;
    background: #fff;
    border: 1px solid rgba(0, 0, 0, 0.1);
    border-radius: 0.6rem;
    color: #111;
    font-size: 0.95rem;
    font-weight: 500;
    text-decoration: none;
    transition: transform 0.15s ease, box-shadow 0.15s ease;
  }

  .view-btn:hover {
    transform: translateY(-1px);
    box-shadow: 0 6px 16px rgba(0, 0, 0, 0.06);
  }

  @media (max-width: 640px) {
    .page {
      padding: 3rem 1.25rem 4rem;
    }
    .heading {
      font-size: 1.75rem;
      margin-bottom: 2rem;
    }
    .exp-row {
      grid-template-columns: 1fr;
      gap: 0.4rem;
    }
    .project-frame {
      padding: 1.25rem;
    }
  }
</style>
