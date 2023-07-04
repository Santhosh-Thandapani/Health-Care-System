import React, { useState } from 'react';
import './Patient.css';
import { useNavigate } from 'react-router';
import bg from './Assets/login-bg.jpg';
import {toast } from 'react-toastify';

const Patient = () => {

    const navigate = useNavigate();

    const [patient,setPatient] = useState(
        {
            "patientId": "",
            "user": {
            },
            "name": "",
            "dateOfBirth": "",
            "age": 0,
            "address": "",
            "contactNo": "",
            "passwordClear": ""
          }
    );

    var patientRegister=()=>{

        if(validate()){
          fetch("http://localhost:5139/api/HealthCare/PatientRegister",{
          "method":"POST",
          headers:{
              "accept": "text/plain",
              "Content-Type": 'application/json'
          },
          "body":JSON.stringify({...patient,"patient":{} })})
          .then(async (data)=>{
              if(data.status == 200)
              {
                  var myData = await data.json();
                  console.log(myData);
                  if(myData.token!=""){
                      localStorage.setItem("token",myData.token);
                    // navigate("/admin");
                  }
                  navigate("/patienthome")
              }     
          }).catch((err)=>{
              console.log(err.error)
          })
        }
    }


    const validate = () => {
      let result = true;
      if (patient.name === '' || patient.name  === null) {
          result = false;
          toast.warning('Please Enter Name ');
      }
      else if( patient.dateOfBirth === '' || patient.dateOfBirth === null) {
          result = false;
          toast.warning('Please Enter Date of Birth');
      }
      else if( patient.address === '' || patient.address === null) {
        result = false;
        toast.warning('Please Enter Address');
    }
    else if( patient.password === '' || patient.password === null) {
      result = false;
      toast.warning('Please Enter Password');
    }
    else if( patient.contactNo === '' || patient.contactNo === null) {
      result = false;
      toast.warning('Please Enter Contact Number');
    }
      return result;
    }

  return (
    <div className='background-clr'>
    <section className="text-center text-lg-start">
      <div className="container py-4">
        <div className="row g-0 align-items-center">
          <div className="col-lg-6 mb-5 mb-lg-0">
            <div className="card cascading-right">
              <div className="card-body p-4 shadow-5 text-center">
                <h2 className="fw-bold mb-4">Sign up now</h2>
                <form>
                  
                <div className="form-outline mb-4">
                    <input type="text" id="form3Example1" className="form-control" 
                    onChange={(event) => {
                        setPatient({ ...patient, name: event.target.value });
                      }}/>
                    <label className="form-label" htmlFor="form3Example1">Full Name</label>
                  </div>

                  <div className="form-outline mb-4">
                    <input type="text" id="form3Example2" className="form-control" pattern="\d{4}-\d{2}-\d{2}" required 
                    onChange={(event) => {
                        setPatient({ ...patient, dateOfBirth: event.target.value });
                      }}/>
                    <label className="form-label" htmlFor="form3Example2">Date Of Birth (YYYY-MM-DD)</label>
                  </div>

                  <div className="form-outline mb-4">
                    <input type="text" id="form3Example3" className="form-control" 
                    onChange={(event) => {
                        setPatient({ ...patient, address: event.target.value });
                      }}/>
                    <label className="form-label">Address</label>
                  </div>

                  <div className="form-outline mb-4">
                    <input type="text" id="form3Example3" className="form-control" 
                    onChange={(event) => {
                        setPatient({ ...patient, contactNo: event.target.value });
                      }}/>
                    <label className="form-label" htmlFor="form3Example3">Contact Number</label>
                  </div>


                  <div className="form-outline mb-4">
                    <input type="password" id="form3Example4" className="form-control" 
                    onChange={(event) => {
                        setPatient({ ...patient, passwordClear: event.target.value });
                      }}/>
                    <label className="form-label" htmlFor="form3Example4">Password</label>
                  </div>


                </form>
                <button type="submit" className="btn btn-primary btn-block mb-3" onClick={patientRegister}>Sign up
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

          <div className="col-lg-6 mb-5 mb-lg-0 signup-image">
            <img
              src={bg}
              className="rounded-4 shadow-4 image-fluid"
              alt=""
            />
          </div>
        </div>
      </div>
    </section>
    </div>
  );
};

export default Patient;
