import "./Portfolio.css";
import Navbar from "./Navbar";

import portfolio1 from "../img/portfolio1.jpg";
import portfolio2 from "../img/portfolio2.jpg";
import portfolio3 from "../img/portfolio3.jpg";
import portfolio4 from "../img/portfolio4.jpg";
import portfolio5 from "../img/portfolio-5.jpg";
import portfolio6 from "../img/portfolio-6.jpg";




const Portfolio = () => {
  return (
    <>
      <Navbar />
   
        <div className="overlay">
            <div id="portfolio-info">
              
                <div className="row">
                  <div className="col">
                    <h1 className="fw-bold display-1 text-center mt-5 pt-5 text-light">
                      Last Portfolio Projects
                    </h1>
            </div>
          </div>
        </div>
      </div>
              <div className=" p-5">
            </div>
      <section id="portfolio">
        <div className="container">
          <div className="pb-2">
          </div>
          <div class="isotope">
            <div class="row">
            
              <div class="col-lg-4 mb-4">
                <div class="item">
                  <img src={portfolio1} alt="one" class="circle-image"/>
                  <div class="overlay"></div>
                </div>
              </div>

              <div class="col-lg-4 mb-4">
                <div class="item">
                  <img src={portfolio2} alt="two" />
                  <div class="overlay"></div>
                </div>
              </div>
              <div class="col-lg-4 mb-4">
                <div class="item">
                  <img src={portfolio3} alt="three" />
                  <div class="overlay"></div>
                </div>
              </div>
             
              
              <div class="col-lg-4 mb-4">
                <div class="item">
                  <img src={portfolio4} alt="" />
                  <div class="overlay"></div>
                </div>
              </div>

              <div class="col-lg-4 mb-4">
                <div class="item">
                  <img src={portfolio5} alt="" />
                  <div class="overlay"></div>
                </div>
              </div>

              <div class="col-lg-4 mb-4">
                <div class="item">
                  <img src={portfolio6} alt="" />
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

export default Portfolio;
