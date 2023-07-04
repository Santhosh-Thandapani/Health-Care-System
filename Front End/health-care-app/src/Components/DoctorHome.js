import React, { useEffect, useState } from "react";
import about from './Assets/about.jpg'
import './DoctorHome.css';

import DoctorImage from '../Components/Assets/Doctor.jpg';
import { useNavigate } from "react-router";


function DoctorHome() {

  const [activeSection, setActiveSection] = useState('content');
  const [doctors, setDoctors] = useState([]);
  const [navbarOpen, setNavbarOpen] = useState(false);

  const handleSectionClick = (section) => {
    setActiveSection(section);
  };


  useEffect(() => {
      fetchApprovedDoctors();
  }, []);

  const navigate = useNavigate();

  const logout=()=>{
    localStorage.clear();
    navigate('/');
}


  const fetchApprovedDoctors=()=>{
    fetch('http://localhost:5139/api/HealthCare/Get Approved Doctors')
      .then(response => response.json())
      .then(data => setDoctors(data))
      .catch(error => console.log(error));
  }

  
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light-blue custom-navbar">
            <div className="container-fluid">
            <button className="navbar-toggler"  type="button" onClick={() => setNavbarOpen(!navbarOpen)}  >
                <span className="navbar-toggler-icon"></span>
            </button>

            <a className="navbar-brand disabled" href="/" >
            Medico
            </a>

            <div className={`collapse navbar-collapse ${navbarOpen ? 'show' : ''}`}>
                <p className="navbar-nav me-auto mb-1 mb-lg-0">
                <li className="nav-item">
                    <a className="nav-link" href="#" onClick={() => handleSectionClick('content')}>
                    Home
                    </a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#" onClick={() => handleSectionClick('viewDoctors')}>
                    View Doctors
                    </a>
                </li>
                <li className="nav-item disabled">
                    <a className="nav-link"  onClick={() => handleSectionClick('appointment')}>
                     Appointments
                    </a>
                </li>
                </p>

            <div className="top-left-search">
            <form className="d-flex">
              <input className="form-control me-2" type="search" placeholder="Search" />
              <button className="btn btn-success" type="submit">
                Search
              </button>
            </form>
            </div>
            <div  className="top-left-logout">
            <p className="navbar-nav me-auto mb-1 mb-lg-0">
               <li className="nav-item">
                <a className="nav-link" href="#" onClick={() => logout()}>
                 Logout
                </a>
              </li>
              </p>
              </div>
          </div>
        </div>
      </nav>

      {activeSection === 'content' && (
        <div className="content">
          
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

        </div>
      )}


    
    {activeSection === 'viewDoctors' && (
        <div className="getDoctors">
        <section className="my-background-radial-gradient overflow-hidden">
            <div className="my-doctors-container container">
            <div className="my-page-heading">
                <h2>Approved Doctor Details</h2>
            </div>
            <div className="row row-cols-1 row-cols-md-3 g-4">
        {doctors.map(doctor => (
            <div key={doctor.id} className="col">
            <div className="card shadow">
                <div className="card-body text-center"><br/>
                <img
                    src={DoctorImage} 
                    alt={doctor.name}
                    className="doctor-image rounded-circle mx-auto d-block"
                    style={{ width: '200px', height: '200px' }}
                /><br/>
                <h3 className="card-title"><strong>{doctor.name}</strong></h3>
                <p className="card-text">Qualification: {doctor.qualifications}</p>
                <p className="card-text">Experience: {doctor.experience}</p>
                <p className="card-text">Specialization: {doctor.specialty}</p>
                <p className="card-text">Date of Birth: {new Date(doctor.dateOfBirth).toLocaleDateString()}</p>
                <p className="card-text">Age: {doctor.age}</p>
                <p className="card-text">Address: {doctor.address}</p>
                <p className="card-text">Contact: {doctor.contactNo}</p>
                </div>
            </div>
            </div>
        ))}
            </div>
            </div>
        </section>    
            </div>
        )}

    </>
  );
}

export default DoctorHome;
