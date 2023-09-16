import cwicon from "./assets/img/CW-black.svg";
import projc44 from "./assets/projectimages/connect4x4board.png";
import ghklogo from "./assets/img/GHKsample.png";
import blkstk from "./assets/img/BlockStack.png";

const Welcome = () => {
  window.addEventListener("DOMContentLoaded", (event) => {
    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector(".navbar-toggler");
    const responsiveNavItems = [].slice.call(document.querySelectorAll("#navbarResponsive .nav-link"));
    responsiveNavItems.map((responsiveNavItem) => {
      responsiveNavItem.addEventListener("click", () => {
        if (window.getComputedStyle(navbarToggler).display !== "none") {
          navbarToggler.click();
        }
      });
      return 0;
    });
  });

  return (
    <>
      {/* <!-- Navigation--> */}

      <nav className="navbar navbar-expand-lg navbar-dark bg-primary fixed-top" id="sideNav">
        {/* <span className="d-none d-lg-block"><img src={ghklogo} alt="" className="img-fluid img-profile p-3 mb-2" style={{ maxWidth: "125px" }} /></span> */}
        <a className="navbar-brand js-scroll-trigger mt-1" href="#about">
          <span className="d-block d-lg-none">Greg De Leon's Profile</span>
          <span className="d-none d-lg-block border border-3 rounded-pill p-2">
            Greg De Leon's
            <br />
            Profile
          </span>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarResponsive"
          aria-controls="navbarResponsive"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarResponsive">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link js-scroll-trigger" href="#about">
                About
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link js-scroll-trigger" href="#experience">
                Experience
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link js-scroll-trigger" href="#certifi">
                Certifications
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link js-scroll-trigger" href="#projects">
                Projects
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link js-scroll-trigger" href="#education">
                Education
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link js-scroll-trigger" href="#skills">
                Skills
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link js-scroll-trigger" href="#interests">
                Interests
              </a>
            </li>
          </ul>
        </div>
      </nav>

      {/* <!-- Page Content--> */}
      <div id="mainPageContent" className="container-fluid p-0">
        {/* <!-- About--> */}
        <section className="resume-section" id="about">
          {/* <section className="Self_Section" id="about"> */}
          <div className="resume-section-content">
            <h1 className="mb-0">
              Greg
              <span className="text-primary">{` De Leon`}</span>
            </h1>
            <div className="subheading mb-5">
              {`Chicago, Illinois ·  `}
              <span className="text-primary">gdele9164@gmail.com </span>
              <a href="mailto:gdele9164@gmail.com">
                <button className="bg-primary ms-3 border-0 rounded-pill text-light ps-3 pe-3">
                  <u>Email Me</u>
                </button>
              </a>
            </div>

            <p className="lead mb-5 reg-text">
              I am a proactive, enthusiastic, inquisitive, and a result-oriented professional offering the ability to
              communicate and assess needs to create a complementary robust website. I am an experienced controls
              engineer looking to transition my career into web development. I trust my experience in web development is
              properly displayed using the skills listed below as I aspire to work with Front-end, Back-end, or
              Full-Stack opportunities.
            </p>

            <div className="social-icons d-flex">
              <a
                className="social-icon"
                target="_blank"
                rel="noreferrer"
                href="https://www.linkedin.com/in/gregdeleon555/"
              >
                <i className="fab fa-linkedin-in"></i>
              </a>
              <a className="social-icon" target="_blank" rel="noreferrer" href="https://github.com/GreyDaCaLa">
                <i className="fab fa-github"></i>
              </a>
              <a
                className="social-icon"
                target="_blank"
                rel="noreferrer"
                href="https://www.codewars.com/users/GregDeLeon"
              >
                <img src={cwicon} alt="CodeWars" height="35px" />
              </a>
            </div>
          </div>
        </section>

        <hr className="m-0" />

        {/* <!-- Experience--> */}
        <section className="resume-section" id="experience">
          <div className="resume-section-content">
            <h2 className="mb-5">Experience</h2>

            {/* AMWAY */}
            <div className="d-flex flex-column flex-md-row justify-content-between mb-5">
              <div className="flex-grow-1">
                <h3 className="mb-0">Associate Software Engineer</h3>
                <div className="subheading mb-3">AMWAY</div>
                <ul className="reg-text">
                  <li>
                    {" "}
                    Collaborate with internal & external stakeholders to define, develop, test, new features, and
                    enhancements to Amway website with a focus based on scalability, flexibility, security.{" "}
                  </li>
                  <li> Use Angular to create reusable components that use our dynamic translation process. </li>
                  <li>
                    {" "}
                    Create theme designs by using Figma templates to meet customer design themes and alert formatting.{" "}
                  </li>
                  <li>
                    {" "}
                    Maintain Amway’s Customer Identity and Access Management (CIAM) solution by using okta identity
                    provider and AWS services like S3, SQS, SMS, SES, SNS, DynamoDB, CloudFront, and EC2.{" "}
                  </li>
                  <li> Create automatic build deployments using AWS pipelines. </li>
                  <li> Worked as part of an Agile Development Team. </li>
                </ul>
              </div>
              <div className="flex-shrink-0">
                <span className="date">July 2022 - Present</span>
              </div>
            </div>
            {/* TrueCoders */}
            <div className="d-flex flex-column flex-md-row justify-content-between mb-5">
              <div className="flex-grow-1">
                <h3 className="mb-0">Tutor & Teachers Assistant</h3>
                <div className="subheading mb-3">TrueCoders: Web Development FullStack Course</div>
                <ul className="reg-text">
                  <li> Debug, grade, and explain errors to facilitate growth in students coding skills. </li>
                  <li>
                    {" "}
                    Meet with students, team, and alumni to address features to improve course material and relevancy.{" "}
                  </li>
                  <li>
                    {" "}
                    Mentor those who have low to no code experience and encorage there first steps into the world of
                    programmig.{" "}
                  </li>
                </ul>
              </div>
              <div className="flex-shrink-0">
                <span className="date">September 2022 – August 2023</span>
              </div>
            </div>
            {/* HT Hackney */}
            <div className="d-flex flex-column flex-md-row justify-content-between mb-5">
              <div className="flex-grow-1">
                <h3 className="mb-0">Jr Full-Stack Developer</h3>
                <div className="subheading mb-3">H.T. Hackney</div>
                <ul className="reg-text">
                  <li>
                    {" "}
                    Migrated original PHP website to React framework while implementing new features on both sites.{" "}
                  </li>
                  <li>
                    {" "}
                    Developed new RESTful API endpoints to aid in the creation of mobile application PHP in an agile
                    environment.{" "}
                  </li>
                </ul>
              </div>
              <div className="flex-shrink-0">
                <span className="date">February 2022 - March 2022</span>
              </div>
            </div>

            <div className="d-flex flex-column flex-md-row justify-content-between mb-5">
              <div className="flex-grow-1">
                <h3 className="mb-0">SolidWorks Electrical Content Developer</h3>
                <div className="subheading mb-3">HS Automation</div>
                <ul className="reg-text">
                  <li>Pitched and organized a new department for SolidWorks Electrical Content development.</li>
                  <li>
                    Standardized design requirements and release criteria for schematic designs within the company.
                  </li>
                  <li>Trained and managed 11 member team to ensure smooth use of SolidWorks Electrical Content.</li>
                </ul>
              </div>
              <div className="flex-shrink-0">
                <span className="date">September 2020 - August 2021</span>
              </div>
            </div>

            <div className="d-flex flex-column flex-md-row justify-content-between mb-5">
              <div className="flex-grow-1">
                <h3 className="mb-0">Controls Engineer</h3>
                <div className="subheading mb-3">HS Automation</div>
                <ul className="reg-text">
                  <li>
                    Maximized productivity and optimized processing by integrating technologies into a solution to meet
                    customer needs.
                  </li>
                  <li>
                    Developed independent solutions to streamline production and reduced machine programming time.
                  </li>
                  <li>
                    Communicated with Customers to establish acceptable solutions for their needs to reduce down time.
                  </li>
                </ul>
              </div>
              <div className="flex-shrink-0">
                <span className="date">August 2018 - August 2021</span>
              </div>
            </div>
          </div>
        </section>
        <hr className="m-0" />

        {/* <!-- Certifications--> */}
        <section className="resume-section" id="certifi">
          <div className="resume-section-content">
            <h2 className="mb-5">Certifications</h2>
            <ul className="fa-ul mb-0 reg-text">
              <li>
                <span className="fa-li">
                  <i className="fa-solid fa-circle-dot"></i>
                </span>
                TrueCoders Certificate of Completion
              </li>
              <li>
                <span className="fa-li">
                  <i className="fa-solid fa-circle-dot"></i>
                </span>
                Production Support Certificate of Completion
              </li>
            </ul>
          </div>
        </section>
        <hr className="m-0" />

        {/* <!-- Projects--> */}
        <section className="resume-section" id="projects">
          <div className="resume-section-content">
            <h2 className="mb-5">Projects</h2>

            {/* MineClone */}
            <div className="card bg-body p-2 border border-0">
              <div className="card bg-body mb-3 border border-0" style={{ maxWidth: "750px" }}>
                <div className="row g-0">
                  <div className="col-md-4">
                    <img src={ghklogo} className="img-fluid rounded-start" alt="BlockStackTitle" />
                  </div>

                  <div className="col-md-8">
                    <div className="card-body">
                      <h4 className="card-title">MineClone - MineCraft Clone</h4>
                      <p className="card-text reg-text m-0">
                        First attempt at clonning a large scale Game. MineClone (a clone of MineCraft) is a sandbox game
                        where one can explore a seed generated world that is built from the ground up. A player will
                        then be able to intereact with the world complete and bring to life there one blocky creations.
                        As MineCraft has a lot of features the focus of this first rendition is to implement would
                        generation and basic user controls. the main obstacle is increase the size and depth of the
                        generated world while reducing load times, player lag, and world rerenders. I am close to being
                        done so a link will be added soon. Definetly my largest personal project.
                      </p>
                      <p className="m-0 p-0">
                        --Link Coming Soon--
                      </p>
                      <div className="flex-shrink-0">
                        <span className="date">current project</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="d-flex flex-column flex-md-row justify-content-between mb-5">
                <div className="flex-grow-1">
                  <ul className="reg-text">
                    <li>Used React and Threejs for 3D graphic and game components</li>
                    <li>Used Web-Workers to allow for concurrent tasks and to not lag play as world changes are calculated and re rendored</li>
                    <li>Created 2D joystick for player to control movement and camera on handheld devices</li>
                    <li>Unfinished: Missing some mobile features. First version coming soon.</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* BlockStack */}
            <div className="card bg-body p-2 border border-0">
              <div className="card bg-body mb-3 border border-0" style={{ maxWidth: "750px" }}>
                <div className="row g-0">
                  <div className="col-md-4">
                    <img src={blkstk} className="img-fluid rounded-start" alt="BlockStackTitle" />
                  </div>

                  <div className="col-md-8">
                    <div className="card-body">
                      <h4 className="card-title">BlockStack - 3D Broswer Game</h4>
                      <p className="card-text reg-text">
                        A clone of a mobile game that was once popular. BlockStack and Timing/rythm game where one
                        stacks blocks to for a tower as high as one can. If the block is not perfectly aligned it will
                        be choped. Game ends when the block is too small to be choped.
                      </p>
                      <a href="https://ghk-blockstackgame.netlify.app" target="_blank" rel="noreferrer">
                        <button className="bg-primary ms-3 border-0 rounded-pill text-light ps-3 pe-3">
                          <u>Want To Play?</u>
                        </button>
                      </a>
                      <div className="flex-shrink-0">
                        <span className="date">December 2021</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="d-flex flex-column flex-md-row justify-content-between mb-5">
                <div className="flex-grow-1">
                  <ul className="reg-text">
                    <li>Used Three.js for 3D graphic and game components</li>
                    <li>
                      Use Cannonjs Physiscs Engine to properly simulate choped blocks bumping off tower edges and
                      falling due to gravity.
                    </li>
                    <li>Enabled the ability for tilt controls so play can see full heightof tower</li>
                    <li>Unfinished: still need to add difficulty and proper sound effects</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* COnnect 4x block */}
            <div className="card bg-body p-2 border border-0">
              <div className="card bg-body mb-3 border border-0" style={{ maxWidth: "750px" }}>
                <div className="row g-0">
                  <div className="col-md-4">
                    <img src={projc44} className="img-fluid rounded-start" alt="..." />
                  </div>

                  <div className="col-md-8">
                    <div className="card-body">
                      <h4 className="card-title">Connect 4x4 Multi-Player Web Game</h4>
                      <p className="card-text reg-text m-0">
                        Just like the original the goal is to connect 4 chips in a row diagnoally vertically or
                        horizontally but 2 added twists are a secound of the grid and 2 more players.
                      </p>
                      <p className="m-0 p-0">
                        --Link Not Avaible: Due to Service Changes with heroku backend--
                      </p>
                      <div className="flex-shrink-0">
                        <span className="date">December 2021</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="d-flex flex-column flex-md-row justify-content-between mb-5">
                <div className="flex-grow-1">
                  <ul className="reg-text">
                    <li>Implemented socket.io to allow communication between front-end and back-end server</li>
                    <li>Created back-end server using node.js allowing players resume play whenever they want</li>
                    <li>
                      Used Custom CSS, Bootstrap, and React to allow for scalable site for both laptops andmobile
                      devices
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Form Filler Helper block */}
            <div className="card bg-body p-2 border border-0">
              <div className="card bg-body mb-3 border border-0" style={{ maxWidth: "750px" }}>
                <div className="row g-0">
                  <div className="col-md-4">
                    <img src={ghklogo} className="img-fluid rounded-start" alt="..." />
                  </div>

                  <div className="col-md-8">
                    <div className="card-body">
                      <h4 className="card-title">Form Filler Helper</h4>
                      <p className="card-text reg-text m-0">{
                        `Many jobs have a tidious portion where you fill out a form so that information can be logged.
                        For a friend of mine this meant 20+ forms every day. I was asked if it was possible to stream
                        line the proccess and just fill out the form based on rows in a spread sheet. Thus I made this
                        form filler to aid in her day to day.`}
                      </p>
                      <p className="m-0 p-0">
                        --Link Not POssible--
                      </p>
                      <div className="flex-shrink-0">
                        <span className="date">September 2021</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="d-flex flex-column flex-md-row justify-content-between mb-5">
                <div className="flex-grow-1">
                  <ul className="reg-text">
                    <li>Implemented a CSV template generator to ensure consistent input.</li>
                    <li>Validated error catching to handel unexpected data.</li>
                    <li>Used Selenium to navigate logins and manipulate google forms.</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        <hr className="m-0" />

        {/* <!-- Education--> */}
        <section className="resume-section" id="education">
          <div className="resume-section-content">
            <h2 className="mb-5">Education</h2>

            <div className="d-flex flex-column flex-md-row justify-content-between mb-5">
              <div className="flex-grow-1">
                <h3 className="mb-0">University of Michigan</h3>
                <div className="subheading">BSE in Mechanical Engineering</div>
                <div className="subheading mb-3">Minor in Computer Science</div>
              </div>
              <div className="flex-shrink-0">
                <span className="date">June 2013 - May 2018</span>
              </div>
            </div>
          </div>
        </section>

        <hr className="m-0" />

        {/* <!-- Skills--> */}
        <section className="resume-section" id="skills">
          <div className="resume-section-content">
            <h2 className="mb-5">Skills</h2>
            <div className="reg-text subheading mb-3">Programming Languages & Tools</div>

            {/* <ul className="list-inline dev-icons">
              <li className="list-inline-item">
                <i className="fab fa-html5"></i>
              </li>
              <li className="list-inline-item">
                <i className="fab fa-css3-alt"></i>
              </li>
              <li className="list-inline-item">
                <i className="fab fa-js-square"></i>
              </li>
              <li className="list-inline-item">
                <i className="fab fa-react"></i>
              </li>
              <li className="list-inline-item">
                <i className="fab fa-node-js"></i>
              </li>
              <li className="list-inline-item">
                <i className="fab fa-sass"></i>
              </li>
              <li className="list-inline-item">
                <i className="fab fa-npm"></i>
              </li>
            </ul> */}

            <ul className="reg-text">
              <li>C++</li>
              <li>MySQL</li>
              <li>CSS</li>
              <li>Python</li>
              <li>JavaScript</li>
              <li>PHP</li>
              <li>Microsoft Office</li>
              <li>MongoDB</li>
              <li>GitHub</li>
              <li>TypeScript</li>
              <li>Node.js</li>
              <li>Express.js</li>
              <li>Socket.io</li>
              <li>Selenium</li>
              <li>React</li>
              <li>Golang</li>
              <li>Java</li>
              <li>threejs</li>
              <li>React-Three-Fiber</li>
            </ul>
          </div>
        </section>
        <hr className="m-0" />
        {/* <!-- Interests--> */}
        <section className="resume-section" id="interests">
          <div className="resume-section-content">
            <h2 className="mb-5">Interests</h2>
            <p className="reg-text"> Chess, Gaming, Rubik’s Puzzles, Hiking, Scenic Biking, Automating for ease of life, Many Board games</p>
          </div>
        </section>
        <hr className="m-0" />
      </div>
    </>
  );
};

export default Welcome;
