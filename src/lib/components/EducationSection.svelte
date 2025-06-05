<script>
  const allCourses = [
    { icon: '</>', name: 'Data Structures and Algorithms', altCourse: 'Design and Analysis of Algorithms' },
    { icon: '</>', name: 'Object-Oriented Programming', altCourse: 'Robotics and Perception' },
    { icon: '</>', name: 'Computer Organization and Programming', altCourse: 'UI Design' },
    { icon: '+', name: 'Linear Algebra', altCourse: 'Discrete Math' }
  ];

  $: displayedCourses = allCourses;
</script>

<!-- education section with two-column layout -->
<section class="education-section" id="education">
  <div class="education-grid">
    <div class="education-left">
      <h1 class="section-heading">Education</h1>
      <div class="education-details">
        <div>Georgia Institute of Technology</div>
        <div>Bachelor of Science (BS) in Computer Science</div>
        <div>Expected Graduation: Dec 2026</div>
      </div>
    </div>
    <div class="education-right">
      <h2 class="section-heading">Coursework</h2>
      <div class="coursework-container">
        <div class="coursework-grid">
          {#each displayedCourses as course}
            <div class="course-card">
              <div class="card-front">
                <span class="course-icon">{course.icon}</span>
                <span>{course.name}</span>
              </div>
              <div class="card-back">
                <span class="course-icon">{course.icon}</span>
                <span>{course.altCourse}</span>
              </div>
            </div>
          {/each}
        </div>
      </div>
    </div>
  </div>
</section>

<style>
/* education section two-column layout */
.education-section {
  min-height: 30vh;
  padding-top: 2rem;
}
.education-grid {
  display: flex;
  gap: 3.5rem;
  align-items: flex-start;
  justify-content: center;
}
.education-left {
  flex: 1 1 0;
  min-width: 260px;
}
.education-right {
  flex: 1 1 0;
  min-width: 320px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}
.coursework-container {
  position: relative;
  width: 100%;
}
.coursework-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
  width: 100%;
  align-items: stretch;
  transition: transform 0.3s ease;
}
.course-card {
  background: #23232a;
  color: #f3f3f3;
  border-radius: 0.7rem;
  border: 1px solid #353545;
  padding: 1.6rem 2rem;
  min-height: 4.2rem;
  font-size: 1.15rem;
  display: flex;
  align-items: center;
  gap: 0.7rem;
  font-family: 'Inter', sans-serif;
  font-weight: 500;
  box-shadow: 0 2px 12px 0 rgba(0,0,0,0.07);
  transition: all 0.45s ease;
  cursor: pointer;
  position: relative;
  overflow: hidden;
}

.card-front, .card-back {
  display: flex;
  align-items: center;
  gap: 0.7rem;
  width: 100%;
  transition: opacity 0.45s ease;
}

.card-back {
  position: absolute;
  top: 1.6rem;
  left: 2rem;
  right: 2rem;
  bottom: 1.6rem;
  opacity: 0;
  background: rgb(35, 35, 73);
}

.course-card:hover .card-front {
  opacity: 0;
}

.course-card:hover .card-back {
  opacity: 1;
}

.course-card:hover {
  transform: scale(1.05);
  background: rgb(35, 35, 73);
}

.course-icon {
  font-size: 1.2rem;
  color: #aeefff;
  font-family: monospace;
  width: 2.2rem;
  display: flex;
  align-items: center;
  justify-content: center;
}

.education-details {
  font-size: 1.25rem;
  color:rgb(215, 223, 228);
  margin-top: 0.3rem;
  font-weight: 500;
  line-height: 1.5;
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
}
</style> 