import Particles from "react-tsparticles";
// import rando from '/src/Comp/Views/HomePage/MyPic1.png'
// C:\Users\gdele\Desktop\Future\WebsitesProjects\Sites\ActiveSiteRepos\portfolio2\src\Comp\Views\HomePage\MyPic1.png

const About = () => {
  const particlesInit = (main) => {
    console.log(main);

    // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
  };

  const particlesLoaded = (container) => {
    console.log(container);
  };

  
  return (
    <main className="container my-3 welcomelanding">

    <Particles id="tsparticles" url="particles.json" init={particlesInit} loaded={particlesLoaded} />

      <h4>I am a proactive, enthusiastic, inquisitive, and a result-oriented professional offering the ability to communicate and assess needs to create a complementary robust website.
        Experienced in web Development, CSS styling using grid and flex, and JavaScript.
        Aspiring to work with Front-end Web development.</h4>




      <div class="accordion" id="accordionPanelsStayOpenExample">

        <div class="accordion-item">
          <h2 class="accordion-header" id="panelsStayOpen-headingOne">
            <button
              class="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#panelsStayOpen-collapseOne"
              aria-expanded="true"
              aria-controls="panelsStayOpen-collapseOne"
            >
              My Languages And Skills
            </button>
          </h2>
          <div
            id="panelsStayOpen-collapseOne"
            class="accordion-collapse collapse show"
            aria-labelledby="panelsStayOpen-headingOne"
          >
            <div class="accordion-body">

              <div className="card Self-SkillCard">C++</div>
              <div className="card Self-SkillCard">MATLAB</div>
              <div className="card Self-SkillCard">PowerShell</div>
              <div className="card Self-SkillCard">HTML</div>
              <div className="card Self-SkillCard">CSS</div>
              <div className="card Self-SkillCard">Python</div>
              <div className="card Self-SkillCard">JavaScript</div>
              <div className="card Self-SkillCard">SolidWorks</div>
              <div className="card Self-SkillCard">SolidWorks Electrical</div>
              <div className="card Self-SkillCard">Microsoft Office</div>
              <div className="card Self-SkillCard">Data Analysis</div>
              <div className="card Self-SkillCard">Film Editing</div>

              

            </div>
          </div>
        </div>

        <div class="accordion-item">
          <h2 class="accordion-header" id="panelsStayOpen-headingTwo">
            <button
              class="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#panelsStayOpen-collapseTwo"
              aria-expanded="false"
              aria-controls="panelsStayOpen-collapseTwo"
            >
              Education
            </button>
          </h2>
          <div
            id="panelsStayOpen-collapseTwo"
            class="accordion-collapse collapse"
            aria-labelledby="panelsStayOpen-headingTwo"
          >
            <div class="accordion-body">

              <div className="card">
                <div className="card-header">University of Michigan College of Engineering</div>
                <div className="card-body">
                  <span>
                    Bachelor of Science in Mechanical Engineering
                  </span> 
                  <span>Computer Science Minor</span>
                </div>
                <div className="card-footer">
                  <span>Ann Arbor, MI</span>
                  <span>May 2018</span> 
                  </div>

              </div>

              <div className="card">
                <div className="card-header">TrueCoders: Advanced Technical Training</div>
                <div className="card-body">
                  <span>
                  Graduate in Full Stack Web Development Course
                  </span> 
                </div>
                <div className="card-footer">
                  <span>Grand Rapids, MI</span>
                  <span>October 2021</span> 
                  </div>

              </div>


            </div>
          </div>
        </div>

        <div class="accordion-item">
          <h2 class="accordion-header" id="panelsStayOpen-headingThree">
            <button
              class="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#panelsStayOpen-collapseThree"
              aria-expanded="false"
              aria-controls="panelsStayOpen-collapseThree"
            >
              Personal Interests
            </button>
          </h2>
          <div
            id="panelsStayOpen-collapseThree"
            class="accordion-collapse collapse"
            aria-labelledby="panelsStayOpen-headingThree"
          >
            <div class="accordion-body">
            <div className="card Self-SkillCard">Chess</div>
              <div className="card Self-SkillCard">Story Based Gaming</div>
              <div className="card Self-SkillCard">Rubik Puzzles</div>
              <div className="card Self-SkillCard">Hiking</div>
              <div className="card Self-SkillCard">Scenic Biking</div>
              <div className="card Self-SkillCard">Automating for ease of life</div>
              <div className="card Self-SkillCard">Board Games</div>
            </div>
          </div>
        </div>


      </div>





    </main>
  );
};

export default About;
