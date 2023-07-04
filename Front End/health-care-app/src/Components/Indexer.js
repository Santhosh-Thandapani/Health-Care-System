import React from 'react';
import './Indexer.css';
import logo from './Assets/logo.png';
import { Carousel } from 'react-bootstrap';
import slide1 from './Assets/slide/slide-1.jpg';
import slide2 from './Assets/slide/slide-2.jpg'
import slide3 from './Assets/slide/slide-3.jpg';
import about from './Assets/about.jpg'
import { Link } from 'react-router-dom';

function Indexer() {
  return (
    <div>
      {/* Header */}
      <header id="header" className="fixed-top">
        <div className="container d-flex align-items-center">
    <a href="index.html" className="logo me-auto">
      <img src={logo} alt="Medico" />
    </a>
    <nav id="navbar" className="navbar order-last order-lg-0">
      <ul>
        <li>
          <a className="nav-link scrollto" href="#hero">
            Home
          </a>
        </li>
        <li>
          <a className="nav-link scrollto" href="#about">
            About
          </a>
        </li>
        <li>
          <a className="nav-link scrollto" href="#services">
            Services
          </a>
        </li>
        <li>
          <a className="nav-link scrollto" href="#contact">
            Contact
          </a>
        </li>
        <li>
          <Link className="nav-link scrollto" to={"/doctor"} >
            Join with us !
          </Link>
        </li>

        <li>
          <Link className="nav-link scrollto" to={"/login"} >
          Login
          </Link>
        </li>

        <li>
          <Link className="nav-link scrollto" to={"/patient"} >
          Register
          </Link>
        </li>
      </ul>
      <i className="bi bi-list mobile-nav-toggle"></i>
    </nav>
  </div>
</header>
<section id="hero">
      <Carousel className="custom-carousel">
        {/* Slide 1 */}
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={slide1}
            alt="First slide"
          />
          <Carousel.Caption style={{ background: 'white', padding: '20px' }}>
        <div style={{ borderBottom: '4px solid #65c9cd', width: '80%', margin: '0 auto' }}></div>
            <h2>
              Welcome to <span>Medicio</span>
            </h2>
            <p>
            Established by Dr Prathap C Reddy in 1983, Medico Healthcare has a robust presence across the healthcare ecosystem. 
            From routine wellness & preventive health care to innovative life-saving 
            treatments and diagnostic services, Medico Hospitals has touched more than 200 million lives from over 120 countries.
            </p>
            <a href="#about" className="btn-get-started scrollto">
              Read More
            </a>
          </Carousel.Caption>
        </Carousel.Item>

        {/* Slide 2 */}
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={slide2}
            alt="Second slide"
          />
          <Carousel.Caption style={{ background: 'white', padding: '20px' }}>
        <div style={{ borderBottom: '4px solid #65c9cd', width: '80%', margin: '0 auto' }}></div>
            <h2>History of Medico</h2>
            <p>
            Medico Hospitals was founded by Prathap C. Reddy in 1983 as the first corporate health care in India. 
            The first branch at Chennai was inaugurated by the then President of India Zail Singh.
            </p>
            <a href="#about" className="btn-get-started scrollto">
              Read More
            </a>
          </Carousel.Caption>
        </Carousel.Item>

        {/* Slide 3 */}
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={slide3}
            alt="Third slide"
          />
          <Carousel.Caption style={{ background: 'white', padding: '20px' }}>
        <div style={{ borderBottom: '4px solid #65c9cd', width: '80%', margin: '0 auto' }}></div>
            <h2>Chain pharmacy of Medico</h2>
            <p>
            Medico HealthCo was formed in 2021 with the merger of the group's non-hospital pharmacy chain Medico Pharmacy and 
            its digital healthcare business known as Apollo 24/7.
            </p>
            <a href="#about" className="btn-get-started scrollto">
              Read More
            </a>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </section>

      <main id="main">


      <section id="featured-services" className="featured-services">
      <div className="container" data-aos="fade-up">
        <div className="row">
          <div className="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0">
            <div className="icon-box" data-aos="fade-up" data-aos-delay="100">
              <div className="icon"><i className="fas fa-heartbeat"></i></div>
              <h4 className="title"><a href="">Cardiology </a></h4>
              <p className="description"> Improve operational efficiency and patient satisfaction 
            through seamless coordination and communication among cardiology teams using our integrated hospital management system.</p>
            </div>
          </div>

          <div className="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0">
            <div className="icon-box" data-aos="fade-up" data-aos-delay="200">
              <div className="icon"><i className="fas fa-pills"></i></div>
              <h4 className="title"><a href="">Orthopedic</a></h4>
              <p className="description">Specializing in orthopedic care, our hospital provides advanced diagnosis services for musculoskeletal conditions.</p>
            </div>
          </div>

          <div className="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0">
            <div className="icon-box" data-aos="fade-up" data-aos-delay="300">
              <div className="icon"><i className="fas fa-thermometer"></i></div>
              <h4 className="title"><a href="">Blood pressure levels</a></h4>
              <p className="description">Our goal is to promote healthy blood pressure levels, reduce cardiovascular risks, 
              and improve overall patient well-being</p>
            </div>
          </div>

          <div className="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0">
            <div className="icon-box" data-aos="fade-up" data-aos-delay="400">
              <div className="icon"><i className="fas fa-dna"></i></div>
              <h4 className="title"><a href="">DNA</a></h4>
              <p className="description">At our hospital, we utilize cutting-edge DNA testing and analysis to provide personalized healthcare solutions.</p>
            </div>
          </div>
        </div>
      </div>
    </section>



    <section id="about" className="about">
      <div className="container" data-aos="fade-up">

        <div className="section-title">
          <h2>About Us</h2>
          <p>Medico Hospitals was founded by Prathap C. Reddy in 1983 as the first corporate health care in India. 
            The first branch at Chennai was inaugurated by the then President of India Zail Singh.</p>
        </div>

        <div className="row">
          <div className="col-lg-6" data-aos="fade-right">
            <img src={about} className="img-fluid" alt="" />
          </div>
          <div className="col-lg-6 pt-4 pt-lg-0 content" data-aos="fade-left">
            <h3>Medico HealthCo group's Chain Pharmacy and 
            its digital healthcare business Medico 24/7.</h3>
            <p className="fst-italic">
            Medico Hospital is a renowned healthcare institution that is globally recognized for its excellence in patient care,
             medical expertise, and advanced technology.
            </p>
            <ul>
              <li><i className="bi bi-check-circle"></i> It is equipped with state-of-the-art infrastructure, cutting-edge medical equipment</li>
              <li><i className="bi bi-check-circle"></i> Globally recognized for its excellence in patient care</li>
              <li><i className="bi bi-check-circle"></i> Provide personalized, evidence-based treatment, innovative procedures</li>
            </ul>
            <p>
            Medico Hospital is a renowned healthcare institution that is globally recognized for its excellence in patient care, medical expertise,
             and advanced technology. With a vast network of hospitals and clinics, Apollo Hospital offers a comprehensive range of medical services across 
             various specialties. It is equipped with state-of-the-art infrastructure, cutting-edge medical equipment, and a team of highly skilled doctors, 
             nurses, and healthcare professionals. Committed to delivering exceptional healthcare services, Apollo Hospital strives to provide personalized, 
            evidence-based treatment, innovative procedures, and compassionate care to patients from around the world.
            </p>
          </div>
        </div>
      </div>
    </section>


    {/* service */}
    <section id="services" className="services">
      <div className="container" data-aos="fade-up">

        <div className="section-title">
          <h2>Services</h2>
          <p>With a vast network of hospitals and clinics, Apollo Hospital offers a comprehensive range of medical 
            services across various specialties. It is equipped with state-of-the-art infrastructure, cutting-edge medical equipment, 
            and a team of highly skilled doctors, nurses, and healthcare professionals</p>
        </div>

        <div className="row">
          <div className="col-lg-4 col-md-6 icon-box" data-aos="zoom-in" data-aos-delay="100">
            <div className="icon"><i className="fas fa-heartbeat"></i></div>
            <h4 className="title"><a href="">Orthopedic</a></h4>
            <p className="description">Improve operational efficiency and patient satisfaction 
            through coordination and communication integrated hospital management system.</p>
          </div>
          <div className="col-lg-4 col-md-6 icon-box" data-aos="zoom-in" data-aos-delay="200">
            <div className="icon"><i className="fas fa-pills"></i></div>
            <h4 className="title"><a href="">Blood pressure levels</a></h4>
            <p className="description">Our goal is to promote healthy blood pressure levels, reduce cardiovascular risks, 
              and improve overall patient well-being</p>
          </div>
          <div className="col-lg-4 col-md-6 icon-box" data-aos="zoom-in" data-aos-delay="300">
            <div className="icon"><i className="fas fa-hospital-user"></i></div>
            <h4 className="title"><a href="">Emergency</a></h4>
            <p className="description">Emergency department is a critical unit in hospitals, providing immediate medical care to patients with life-threatening 
            conditions and urgent medical needs.</p>
          </div>
          <div className="col-lg-4 col-md-6 icon-box" data-aos="zoom-in" data-aos-delay="100">
            <div className="icon"><i className="fas fa-dna"></i></div>
            <h4 className="title"><a href="">DNA</a></h4>
            <p className="description">At our hospital, we utilize cutting-edge DNA testing and analysis to provide personalized healthcare solutions.</p>
          </div>
          <div className="col-lg-4 col-md-6 icon-box" data-aos="zoom-in" data-aos-delay="200">
            <div className="icon"><i className="fas fa-wheelchair"></i></div>
            <h4 className="title"><a href="">Give our Hands</a></h4>
            <p className="description">Treating physically challenged individuals requires a holistic approach, focusing on their specific needs and abilities to 
            enhance their quality of life.</p>
          </div>
          <div className="col-lg-4 col-md-6 icon-box" data-aos="zoom-in" data-aos-delay="300">
            <div className="icon"><i className="fas fa-notes-medical"></i></div>
            <h4 className="title"><a href="">Medical supplies</a></h4>
            <p className="description">Medical supplies encompass a wide range of products, including disposable items, equipment, instruments</p>
          </div>
        </div>

      </div>
    </section>


    <section id="contact" className="contact">
      <div className="container">

        <div className="section-title">
          <h2>Contact</h2>
          <p>Medico Hospitals Enterprise Limited brings to your attention that certain persons are circulating/posting 
            fake advertisements inviting applications from candidates for
             employment in the Company through e-mails, WhatsApp messages and on leading job portals.</p>
        </div>

      </div>

      <div className="container">

        <div className="row mt-5">

          <div className="col-lg-6">

            <div className="row">
              <div className="col-md-12">
                <div className="info-box">
                  <i className="bx bx-map"></i>
                  <h3>Our Address</h3>
                  <p>64, New Cross Road, Pheonix mall Oppo, Chennai </p>
                </div>
              </div>
              <div className="col-md-6">
                <div className="info-box mt-4">
                  <i className="bx bx-envelope"></i>
                  <h3>Email Us</h3>
                  <p>madico@hospital.com<br />santhosh@madico.com</p>
                </div>
              </div>
              <div className="col-md-6">
                <div className="info-box mt-4">
                  <i className="bx bx-phone-call"></i>
                  <h3>Call Us</h3>
                  <p>+91 97877 56230<br />+91 9360538710 254445 41</p>
                </div>
              </div>
            </div>

          </div>

          <div className="col-lg-6">
            <form  method="post" role="form" className="php-email-form">
              <div className="row">
                <div className="col-md-6 form-group">
                  <input type="text" name="name" className="form-control" id="name" placeholder="Your Name" required />
                </div>
                <div className="col-md-6 form-group mt-3 mt-md-0">
                  <input type="email" className="form-control" name="email" id="email" placeholder="Your Email" required />
                </div>
              </div>
              <div className="form-group mt-3">
                <input type="text" className="form-control" name="subject" id="subject" placeholder="Subject" required />
              </div>
              <div className="form-group mt-3">
                <textarea className="form-control" name="message" rows="7" placeholder="Message" required></textarea>
              </div>
              <div className="my-3">
                <div className="loading">Loading</div>
                <div className="error-message"></div>
                <div className="sent-message">Your message has been sent. Thank you!</div>
              </div>
              <div className="text-center"><button type="submit">Send Message</button></div>
            </form>
          </div>

        </div>

      </div>
    </section>

      </main>

    </div>
  );
}

export default Indexer;
