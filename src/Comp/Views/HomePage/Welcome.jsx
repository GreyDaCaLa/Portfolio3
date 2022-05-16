// import Particles from "react-tsparticles";
import sampleimage from "./assets/img/profile.jpg"
import cwicon from "./assets/img/CW-black.svg"
import projc44 from "./assets/projectimages/connect4x4board.png"

const Welcome = () => {


  window.addEventListener('DOMContentLoaded', event => {

    // // Activate Bootstrap scrollspy on the main nav element
    // const sideNav = document.body.querySelector('#sideNav');
    // if (sideNav) {
    //     new bootstrap.ScrollSpy(document.body, {
    //         target: '#sideNav',
    //         offset: 74,
    //     });
    // };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

});

  return (
    <>
    {/* <!-- Navigation--> */}


<nav class="navbar navbar-expand-lg navbar-dark bg-primary fixed-top" id="sideNav">
    <a class="navbar-brand js-scroll-trigger" href="#page-top">
        <span class="d-block d-lg-none">Greg De Leon's Profile</span>
        {/* <span class="d-none d-lg-block"><img class="img-fluid img-profile rounded-circle mx-auto mb-2" src={sampleimage} alt="..." /></span> */}
        <span className="d-none d-lg-block border border-3 rounded-pill p-2">
          Greg De Leon's
          <br/>
          Profile
          </span>

    </a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation"><span class="navbar-toggler-icon"></span></button>
    <div class="collapse navbar-collapse" id="navbarResponsive">
        <ul class="navbar-nav">
            <li class="nav-item"><a class="nav-link js-scroll-trigger" href="#about">About</a></li>
            <li class="nav-item"><a class="nav-link js-scroll-trigger" href="#experience">Experience</a></li>
            <li class="nav-item"><a class="nav-link js-scroll-trigger" href="#certifi">Certifications</a></li>
            <li class="nav-item"><a class="nav-link js-scroll-trigger" href="#projects">Projects</a></li>
            <li class="nav-item"><a class="nav-link js-scroll-trigger" href="#education">Education</a></li>
            <li class="nav-item"><a class="nav-link js-scroll-trigger" href="#skills">Skills</a></li>
            <li class="nav-item"><a class="nav-link js-scroll-trigger" href="#interests">Interests</a></li>
        </ul>
    </div>
</nav>







{/* <!-- Page Content--> */}
<div id="mainPageContent" class="container-fluid p-0">


    {/* <!-- About--> */}
    <section class="resume-section" id="about">
        <div class="resume-section-content">
            <h1 class="mb-0">
                Greg
                <span class="text-primary">Deleon</span>
            </h1>
            <div class="subheading mb-5">
                {`Grand Rapids, MI ·  `}
                <span class="text-primary">gdele9164@gmail.com </span>
                <a href="mailto:gdele9164@gmail.com">
                <button className="bg-primary ms-3 border-0 rounded-pill text-light ps-3 pe-3"><u>Email Me</u></button>
                </a>
            </div>

            <p class="lead mb-5">
            I am proactive, enthusiastic, inquisitive, and result-oriented professional offering the ability to
communicate and assess needs to create a complementary robust website. Leverage technical,
analytical and problem-solving skills to create dynamic websites and webapps platforms fueling a competitive advantage.
</p>

            <div class="social-icons d-flex">
                <a class="social-icon" target="_blank" href="https://www.linkedin.com/in/gregdeleon555/"><i class="fab fa-linkedin-in"></i></a>
                <a class="social-icon" target="_blank" href="https://github.com/GreyDaCaLa"><i class="fab fa-github"></i></a>
                <a class="social-icon" target="_blank" href="https://www.codewars.com/users/GregDeLeon">
                    <img src={cwicon} height="35px"/>
                  </a>


            </div>
        </div>
    </section>
    <hr class="m-0" />

    
    {/* <!-- Experience--> */}
    <section class="resume-section" id="experience">
        <div class="resume-section-content">

            <h2 class="mb-5">Experience</h2>



            <div class="d-flex flex-column flex-md-row justify-content-between mb-5">
                <div class="flex-grow-1">
                    <h3 class="mb-0">Controls Engineer</h3>
                    <div class="subheading mb-3">HS Automation</div>
                    {/* <p>Bring to the table win-win survival strategies to ensure proactive domination. At the end of the day, going forward, a new normal that has evolved from generation X is on the runway heading towards a streamlined cloud solution. User generated content in real-time will have multiple touchpoints for offshoring.</p> */}
                      <ul class="">
                        <li> Designed electrical schematics using company standards for safety and integration.</li>
                        <li> Developed standard structure of electrical design prints for my department.</li>
                        <li> Responsible for maintaining standard for electrical design for entire department.</li>
                        <li> Created and automated several ease of life spreadsheets using Microsoft products.</li>
                        <li> Maximized productivity and optimized part processing by integrating technologies into a solution to meet customer production needs.</li>
                        <li> Interfaced product with existing equipment to compliment current processes.</li>
                        <li> Developed independent solutions to streamline production.</li>
                        <li> Communicated with customers to establish acceptable solutions for their needs.</li>
                      </ul>
                </div>
                <div class="flex-shrink-0"><span class="text-primary">August 2018 - August 2021</span></div>
            </div>


            <div class="d-flex flex-column flex-md-row justify-content-between mb-5">
                <div class="flex-grow-1">
                    <h3 class="mb-0">SolidWorks Electrical Manager</h3>
                    <div class="subheading mb-3">HS Automation</div>
                      <ul class="">
                        <li> Responsible for maintaining and creating department design software content.</li>
                        <li> Managed more than 10 team members to ensure smooth use of design software content.</li>
                        <li> Role was specifically designed for me, once I explained the need for it and how it would increased productivity for the company.  </li>
                      </ul>
                </div>
                <div class="flex-shrink-0"><span class="text-primary">August 2020 - August 2021</span></div>
            </div>



            <div class="d-flex flex-column flex-md-row justify-content-between mb-5">
                <div class="flex-grow-1">
                    <h3 class="mb-0">Jr Full-Stack Developer</h3>
                    <div class="subheading mb-3">H.T. Hackney</div>
                      <ul class="">
                        <li> Responsible for upkeep of site features and API end points in PHP</li>
                        <li> Developed new Endpoints to aid in the creation of Mobile App </li>
                      </ul>
                </div>
                <div class="flex-shrink-0"><span class="text-primary">February 2022 - March 2022</span></div>
            </div>





        </div>
    </section>
    <hr class="m-0" />


    {/* <!-- Certifications--> */}
    <section class="resume-section" id="certifi">
        <div class="resume-section-content">
            <h2 class="mb-5">Certifications</h2>
            <ul class="fa-ul mb-0">
                <li>
                    <span class="fa-li"><i class="fa-solid fa-circle-dot"></i></span>
                    TrueCoders Certificate of Completion
                </li>
                <li>
                    <span class="fa-li"><i class="fa-solid fa-circle-dot"></i></span>
                    Production Support Certificate of Completion
                </li>
            </ul>
        </div>
    </section>
    <hr class="m-0" />

        {/* <!-- Projects--> */}
        <section class="resume-section" id="projects">
        <div class="resume-section-content">
            <h2 class="mb-5">Projects</h2>

            <div className="card p-2 border border-0">

            <div class="card mb-3 border border-0" style={{"max-width": "750px"}}>
              <div class="row g-0">

                <div class="col-md-4">
                  <img src={projc44} class="img-fluid rounded-start" alt="..." />
                </div>

                <div class="col-md-8">
                  <div class="card-body">
                    <h4 class="card-title">Connect 4x4 Multi-Player Web Game</h4>
                    <p class="card-text">Just like the original the goal is to connect 4 chips in a row diagnoally vertically or horizontally but 2 added twists are a secound of the grid and 2 more players.</p>
                <div class="flex-shrink-0"><span class="text-primary">August 2018 - August 2021</span></div>

                  </div>
                </div>

              </div>
            </div>



            <div class="d-flex flex-column flex-md-row justify-content-between mb-5">
                <div class="flex-grow-1">
                      <ul class="">
<li>Implemented socket.io to allow communication between front-end and back-end server</li>
<li>Created back-end server using node.js allowing players resume play whenever they want</li>
<li>Used Custom CSS, Bootstrap, and React to allow for scalable site for both laptops andmobile devices</li>
                      </ul>
                </div>
            </div>

            </div>

        </div>
    </section>

    <hr class="m-0" />
    
    
    {/* <!-- Education--> */}
    <section class="resume-section" id="education">
        <div class="resume-section-content">

            <h2 class="mb-5">Education</h2>

            <div class="d-flex flex-column flex-md-row justify-content-between mb-5">
                <div class="flex-grow-1">
                    <h3 class="mb-0">University of Michigan</h3>
                    <div class="subheading">BSE in Mechanical Engineering</div>
                    <div class="subheading mb-3">Minor in Computer Science</div>
                </div>
                <div class="flex-shrink-0"><span class="text-primary">June 2013 - May 2018</span></div>
            </div>

        </div>
    </section>

    <hr class="m-0" />

    {/* <!-- Skills--> */}
    <section class="resume-section" id="skills">
        <div class="resume-section-content">
            <h2 class="mb-5">Skills</h2>
            <div class="subheading mb-3">Programming Languages & Tools</div>
            <ul class="list-inline dev-icons">
                <li class="list-inline-item"><i class="fab fa-html5"></i></li>
                <li class="list-inline-item"><i class="fab fa-css3-alt"></i></li>
                <li class="list-inline-item"><i class="fab fa-js-square"></i></li>
                <li class="list-inline-item"><i class="fab fa-react"></i></li>
                <li class="list-inline-item"><i class="fab fa-node-js"></i></li>
                <li class="list-inline-item"><i class="fab fa-sass"></i></li>
                <li class="list-inline-item"><i class="fab fa-npm"></i></li>
            </ul>
            <ul>



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
<li>3js</li>
<li>React-Three-Fiber</li>

            </ul>
        </div>
    </section>
    <hr class="m-0" />
    {/* <!-- Interests--> */}
    <section class="resume-section" id="interests">
        <div class="resume-section-content">
            <h2 class="mb-5">Interests</h2>
            <p> Chess, Gaming, Rubik’s Puzzles, Hiking, Scenic Biking, Automating for ease of life, Many Board games</p>
        </div>
    </section>
    <hr class="m-0" />

</div>
{/* <!-- Bootstrap core JS--> */}
{/* <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"></script> */}
{/* <!-- Core theme JS--> */}
{/* <script src="./comp/Views/HomePage/js/scripts.js"></script> */}
</>
  );
};

export default Welcome;
