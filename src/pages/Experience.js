import "./Experience.css";
import Navbar from "./Navbar";
import oneImage from "../img/5.jpg";
import twoImage from "../img/IMG_20231207_104629_686.jpg";
import code1 from "../img/IMG_20231107_115921_445.jpg";

const Experience = () => {
  return (
    <>
      <Navbar />

      <div className="wrapper">
        <div className="overlay">
          <div class="container5">
            <div class="bubbles"> </div>
            <div id="experience-info" className="bg-secondary bg-gradient">
              <div className="container-fluid mt-5">
                <div className="row">
                  <div className="col">
                    <h1 className="text-light fw-bold display-1 text-center mt-5 pt-5">
                      Experiences
                    </h1>
                  </div>
                </div>
              </div>
            </div>
          </div>
      
        </div>
      </div>


      <section id="portfolio">
        <div className="container">
          <div className="pb-4">
          </div>
          <div class="isotope">
            <div class="row">
              <p className="display-5"><b>Assisting and Interviewing Farmers </b></p>
              <div class="col-lg-4 mb-4">
                <div class="item">
                  <img src={oneImage} alt="one" class="circle-image"/>
                  <div class="overlay"></div>
                </div>
              </div>

              <div class="col-lg-4 mb-4">
                <div class="item">
                  <img src={twoImage} alt="two" />
                  <div class="overlay"></div>
                </div>
              </div>
              <div class="col-lg-4 mb-4">
                <div class="item">
                  <img src={code1} alt="three" />
                  <div class="overlay"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Experience;
