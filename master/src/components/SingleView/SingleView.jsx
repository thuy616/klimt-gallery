import React, {Component} from 'react';
import {Row, Col} from 'react-bootstrap';
export default class SingleView extends Component {
  render() {
    return (
      <div className="content-wrapper">
        <header>
          <div className="rslides_container">
          <ul className="rslides centered-btns centered-btns1">
            <li className="img-overlay"><img src="../img/header/header-1.jpg" alt="img1"/></li>
            <li className="img-overlay"><img src="../img/header/header-2.jpg" alt="img2"/></li>
            <li className="img-overlay"><img src="../img/header/header-3.jpg" alt="img3"/></li>
          </ul>
          <a href="#" className="centered-btns_nav centered-btns1_nav prev">Previous</a>
          <a href="#" className="centered-btns_nav centered-btns1_nav next">Next</a>

          </div>
           <div className="header-content">
            {/* <div className="header-content-inner">
              <h2 className="text-faded">"Art is a line around your thoughts."</h2>
              <h1 id="homeHeading">Gustav Klimt</h1>
              <a href="#about" className="btn btn-circle page-scroll"><i className="fa fa-angle-double-down animated"></i></a>
            </div> */}
          </div>
        </header>
        <section className="bg-dark" id="about">
          <div className="container">
            <Row>
              <Col lg={8} lgOffset={2} className="text-center">
                <h2 className="section-heading">1862-1890</h2>
                <h3>Early life and Education</h3>
                <hr className="light"/>
              </Col>
            </Row>
          </div>
        </section>
        <section>
          <div className="container">
            <div className="parallax-window" data-parallax="scroll" data-image-src="../../img/home/the-kiss@2x.jpg"></div>
          </div>
        </section>
        <section className="bg-primary">
          <div className="container"></div>
        </section>
        <section id="services">
          <div className="container">
            <div className="row">
              <div className="col-lg-12 text-center">
                <h2 className="section-heading">At Your Service</h2>
                <hr className="primary"/>
              </div>
            </div>
          </div>
          <div className="container">
            <div className="row">
              <div className="col-lg-3 col-md-6 text-center">
                <div className="service-box">
                  <i className="fa fa-4x fa-diamond text-primary sr-icons"></i>
                  <h3>Sturdy Templates</h3>
                  <p className="text-muted">Our templates are updated regularly so they don't break.</p>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 text-center">
                <div className="service-box">
                  <i className="fa fa-4x fa-paper-plane text-primary sr-icons"></i>
                  <h3>Ready to Ship</h3>
                  <p className="text-muted">You can use this theme as is, or you can make changes!</p>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 text-center">
                <div className="service-box">
                  <i className="fa fa-4x fa-newspaper-o text-primary sr-icons"></i>
                  <h3>Up to Date</h3>
                  <p className="text-muted">We update dependencies to keep things fresh.</p>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 text-center">
                <div className="service-box">
                  <i className="fa fa-4x fa-heart text-primary sr-icons"></i>
                  <h3>Made with Love</h3>
                  <p className="text-muted">You have to make your websites with love these days!</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="no-padding" id="portfolio">
          <div className="container-fluid">
            <div className="row no-gutter popup-gallery">
              <div className="col-lg-4 col-sm-6">
                <a href="../../img/portfolio/fullsize/1.jpg" className="portfolio-box">
                  <img src="../../img/portfolio/thumbnails/1.jpg" className="img-responsive" alt=""/>
                  <div className="portfolio-box-caption">
                    <div className="portfolio-box-caption-content">
                      <div className="project-category text-faded">
                        Category
                      </div>
                      <div className="project-name">
                        Project Name
                      </div>
                    </div>
                  </div>
                </a>
              </div>
              <div className="col-lg-4 col-sm-6">
                <a href="../../img/portfolio/fullsize/2.jpg" className="portfolio-box">
                  <img src="../../img/portfolio/thumbnails/2.jpg" className="img-responsive" alt=""/>
                  <div className="portfolio-box-caption">
                    <div className="portfolio-box-caption-content">
                      <div className="project-category text-faded">
                        Category
                      </div>
                      <div className="project-name">
                        Project Name
                      </div>
                    </div>
                  </div>
                </a>
              </div>
              <div className="col-lg-4 col-sm-6">
                <a href="../../img/portfolio/fullsize/3.jpg" className="portfolio-box">
                  <img src="../../img/portfolio/thumbnails/3.jpg" className="img-responsive" alt=""/>
                  <div className="portfolio-box-caption">
                    <div className="portfolio-box-caption-content">
                      <div className="project-category text-faded">
                        Category
                      </div>
                      <div className="project-name">
                        Project Name
                      </div>
                    </div>
                  </div>
                </a>
              </div>
              <div className="col-lg-4 col-sm-6">
                <a href="../../img/portfolio/fullsize/4.jpg" className="portfolio-box">
                  <img src="../../img/portfolio/thumbnails/4.jpg" className="img-responsive" alt=""/>
                  <div className="portfolio-box-caption">
                    <div className="portfolio-box-caption-content">
                      <div className="project-category text-faded">
                        Category
                      </div>
                      <div className="project-name">
                        Project Name
                      </div>
                    </div>
                  </div>
                </a>
              </div>
              <div className="col-lg-4 col-sm-6">
                <a href="../../img/portfolio/fullsize/5.jpg" className="portfolio-box">
                  <img src="../../img/portfolio/thumbnails/5.jpg" className="img-responsive" alt=""/>
                  <div className="portfolio-box-caption">
                    <div className="portfolio-box-caption-content">
                      <div className="project-category text-faded">
                        Category
                      </div>
                      <div className="project-name">
                        Project Name
                      </div>
                    </div>
                  </div>
                </a>
              </div>
              <div className="col-lg-4 col-sm-6">
                <a href="../../img/portfolio/fullsize/6.jpg" className="portfolio-box">
                  <img src="../../img/portfolio/thumbnails/6.jpg" className="img-responsive" alt=""/>
                  <div className="portfolio-box-caption">
                    <div className="portfolio-box-caption-content">
                      <div className="project-category text-faded">
                        Category
                      </div>
                      <div className="project-name">
                        Project Name
                      </div>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </section>
        <aside className="bg-dark">
          <div className="container text-center">
            <div className="call-to-action">
              <h2>Free Download at Start Bootstrap!</h2>
              <a href="http://startbootstrap.com/template-overviews/creative/" className="btn btn-default btn-xl sr-button">Download Now!</a>
            </div>
          </div>
        </aside>
        <section id="contact">
          <div className="container">
            <div className="row">
              <div className="col-lg-8 col-lg-offset-2 text-center">
                <h2 className="section-heading">Let's Get In Touch!</h2>
                <hr className="primary"/>
                <p>Ready to start your next project with us? That's great! Give us a call or send us an email and we will get back to you as soon as possible!</p>
              </div>
              <div className="col-lg-4 col-lg-offset-2 text-center">
                <i className="fa fa-phone fa-3x sr-contact"></i>
                <p>123-456-6789</p>
              </div>
              <div className="col-lg-4 text-center">
                <i className="fa fa-envelope-o fa-3x sr-contact"></i>
                <p>
                  <a href="mailto:your-email@your-domain.com">feedback@startbootstrap.com</a>
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    )
  }
}
