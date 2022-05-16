const ContactMe = () => {
  return (
    <main className="container my-3 welcomelanding">
      <h2 className="card Self-ContactIntro text-center m-3">Contact Me and Look at My Other Profiles</h2>
      <div className="container">
        <div className="row justify-content-center g-2">

          <div className="col-sm-6">
            <div className="card text-center">
              <div className="card-header Self-EduCard-h">
                <h4>Reach Out</h4>
              </div>
              
              <div className="card-body Self-EduCard-body">
                <img src="/Images/gmailimage.png" alt="logo1" />

                 <p>
                   Email: gdele9164@gmail.com
                   </p> 
                </div>
              <div className="card-footer Self-EduCard-f">
                <h6> If you have any questions Email Me!!</h6>
              </div>
            </div>
          </div>

          <div className="col-sm-6">
            <div className="card text-center">
              <div className="card-header Self-EduCard-h">
                <h4>Linked In</h4>
              </div>
              <a href="https://www.linkedin.com/in/gregdeleon555/">

              <div className="card-body Self-EduCard-body">
                <img src="/Images/linkedInImage.png" alt="logo2" />
                </div>
              </a>
              <div className="card-footer Self-EduCard-f">
                <h6>Follow Me !!!!</h6>
              </div>
            </div>
          </div>

          <div className="col-sm-6">
            <div className="card text-center">
              <div className=" card-header Self-EduCard-h">
                <h4>Code Wars</h4>
              </div>
              <a href="https://www.codewars.com/users/GregDeLeon ">

              <div className="card-body Self-EduCard-body">
                <img src="/Images/codewarsimage.png" alt="logo3" />

              </div>
              </a>
              <div className="card-footer Self-EduCard-f">
                <h6> Check my solutions!!! </h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default ContactMe;
