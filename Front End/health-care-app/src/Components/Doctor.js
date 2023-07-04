import React, { useState } from 'react';
import './Doctor.css';
import { useNavigate } from 'react-router';
import DoctorPopup from './DoctorPopup';
import bg from './Assets/login-bg.jpg';
import {toast } from 'react-toastify';


const Doctor = () => {

    const [showPopup, setShowPopup] = useState(false);
    const openPopup = () => {
      setShowPopup(true);
    };

    const closePopup = () => {
      setShowPopup(false);
    };

    const navigate = useNavigate();
    const [doctor,setDoctor] = useState(
        {
            "doctorId": "",
            "user": {
              
            },
            "name": "",
            "dateOfBirth": "2023-07-01",
            "age": 0,
            "address": "",
            "contactNo": "",
            "specialty": "",
            "experience": 0,
            "qualifications": "",
            "passwordClear": ""
          }
    );




    var doctorRegister=()=>{
       
        if(validate()){
          fetch("http://localhost:5139/api/HealthCare/DoctorRegister",{
          "method":"POST",
          headers:{
              "accept": "text/plain",
              "Content-Type": 'application/json'
          },
          "body":JSON.stringify({...doctor,"doctor":{} })})
          .then(async (data)=>{
              if(data.status == 200)
              {
                  var myData = await data.json();
                  console.log(myData);
                  if(myData.token!=""){
                      //localStorage.setItem("token",myData.token);
                      //navigate("/admin");
                      openPopup();
                  }
              }     
          }).catch((err)=>{
              console.log(err.error)
              toast.error('Unable to login at this momenent');
          })
        }
    }



    const validate = () => {
      let result = true;
      if (doctor.name === '' || doctor.name  === null) {
          result = false;
          toast.warning('Please Enter Name ');
      }
      else if( doctor.dateOfBirth === '' || doctor.dateOfBirth === null) {
          result = false;
          toast.warning('Please Enter Date of Birth');
      }
      else if( doctor.address === '' || doctor.address === null) {
        result = false;
        toast.warning('Please Enter Address');
    }
    else if( doctor.password === '' || doctor.password === null) {
      result = false;
      toast.warning('Please Enter Password');
    }
    else if( doctor.contactNo === '' || doctor.contactNo === null) {
      result = false;
      toast.warning('Please Enter Contact Number');
    }
    else if( doctor.specialty === '' || doctor.specialty === null) {
      result = false;
      toast.warning('Please Enter Speacialty');
    }
    else if( doctor.qualifications === '' || doctor.qualifications === null) {
      result = false;
      toast.warning('Please Enter Qualification');
    }
      return result;
    }
    
  return (
<div className='background-clr'>
    <section className="text-center text-lg-start">
      <div className="container py-4">
        <div className="row g-0 align-items-center">
          <div className="col-lg-6 mb-5 mb-lg-0">
            <div className="card-cascading-right">
              <div className="card-body p-4 shadow-5 text-center">
                <h2 className="fw-bold mb-4">Sign up now</h2>
                <form>
                

                <div className="form-outline mb-4">
                    <input type="text" id="form3Example1" className="form-control" 
                    onChange={(event) => {
                        setDoctor({ ...doctor, name: event.target.value });
                      }}/>
                    <label className="form-label" htmlFor="form3Example1">Full Name</label>
                  </div>


                  <div className="form-outline mb-4">
                    <input type="text" id="form3Example2" className="form-control" pattern="\d{4}-\d{2}-\d{2}" required 
                    onChange={(event) => {
                        setDoctor({ ...doctor, dateOfBirth: event.target.value });
                      }}/>
                    <label className="form-label" htmlFor="form3Example2">Date Of Birth (YYYY-MM-DD)</label>
                  </div>

                  <div className="form-outline mb-4">
                    <input type="text" id="form3Example3" className="form-control" 
                    onChange={(event) => {
                        setDoctor({ ...doctor, address: event.target.value });
                      }}/>
                    <label className="form-label">Address</label>
                  </div>

                  <div className="form-outline mb-4">
                    <input type="text" id="form3Example3" className="form-control" 
                    onChange={(event) => {
                        setDoctor({ ...doctor, contactNo: event.target.value });
                      }}/>
                    <label className="form-label" htmlFor="form3Example3">Contact Number</label>
                  </div>

                  <div className="form-outline mb-4">
                    <input type="text" id="form3Example3" className="form-control" 
                    onChange={(event) => {
                        setDoctor({ ...doctor, specialty: event.target.value });
                      }}/>
                      
                    <label className="form-label" htmlFor="form3Example4">Specialty</label>
                  </div>

                  <div className="form-outline mb-4">
                    <input type="number" id="form3Example4" className="form-control" 
                    onChange={(event) => {
                        setDoctor({ ...doctor, experience:Number(event.target.value) });
                      }}/>
                    <label className="form-label" htmlFor="form3Example4">Experience</label>
                  </div>

                  <div className="form-outline mb-4">
                    <input type="text" id="form3Example4" className="form-control" 
                    onChange={(event) => {
                        setDoctor({ ...doctor, qualifications: event.target.value });
                      }}/>
                    <label className="form-label" htmlFor="form3Example4">Qualification</label>
                  </div>

                  <div className="form-outline mb-4">
                    <input type="password" id="form3Example4" className="form-control" 
                    onChange={(event) => {
                        setDoctor({ ...doctor, passwordClear: event.target.value });
                      }}/>
                    <label className="form-label" htmlFor="form3Example4">Password</label>
                  </div>

                </form>
                <button type="submit" className="btn btn-primary btn-block mb-3" onClick={doctorRegister}>
                  Sign up
                </button>
                <div className="text-center">
                  <p>or sign up with:</p>
                  <div className="d-flex justify-content-center">
                    
                  <button type="button" className="btn btn-link btn-floating mx-1">
                      <i className="fab fa-facebook-f"></i>
                    </button>

                    <button type="button" className="btn btn-link btn-floating mx-1">
                      <i className="fab fa-google"></i>
                    </button>

                    <button type="button" className="btn btn-link btn-floating mx-1">
                      <i className="fab fa-twitter"></i>
                    </button>

                    <button type="button" className="btn btn-link btn-floating mx-1">
                      <i className="fab fa-github"></i>
                    </button>

                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-6  col-xl-9 mb-5 mb-lg-0 signup-image">
            <img
              src={bg}
              className="rounded-8 shadow-8 image-fluid"
              alt="" />
          </div>
        </div>
      </div>

       {showPopup && (
                <div className="popup-container">
                    <DoctorPopup closePopup={closePopup} />
        </div>
         )} 
    </section>
  </div>
  );
};

export default Doctor;
