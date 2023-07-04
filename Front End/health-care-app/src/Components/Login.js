import React, { useState } from 'react';
import './Login.css';
import { useNavigate } from 'react-router';
import DoctorPopup from './DoctorPopup';
import {toast } from 'react-toastify';
import bg from './Assets/doctor-img.webp'

const Login = () => {

    const [showPopup, setShowPopup] = useState(false);
    const openPopup = () => {
      setShowPopup(true);
    };

    const closePopup = () => {
      setShowPopup(false);
    };

    const navigate = useNavigate();
    const [user,setUser] = useState({
        "userId": 0,
        "password": "",
        "status": "",
        "role": "",
        "token": ""
    });


    const validate = () => {
      let result = true;
      if (user.userId === '' || user.userId  === null) {
          result = false;
          toast.warning('Please Enter User ID');
      }
      else if( user.password === '' || user.password === null) {
          result = false;
          toast.warning('Please Enter Password');
      }
      return result;
    }

    var login=()=>{
       
        if(validate()){
          fetch("http://localhost:5139/api/HealthCare/Login",{
           "method":"POST",
            headers:{
              "accept": "text/plain",
              "Content-Type": 'application/json'
        },
        "body":JSON.stringify({...user,"user":{} })})
        .then(async (data)=>{
            if(data.status == 200)
            {
                var myData = await data.json();
                console.log(myData);
                if(myData.token!=""){
                    localStorage.setItem("token",myData.token);
                    localStorage.setItem("userId",myData.userId);
                    localStorage.setItem("role",myData.role);
                    localStorage.setItem("status",myData.status);

                    if(myData.role =="Admin")
                    {
                        toast.success('Success');
                        navigate("/adminhome");
                    }
                    else if( myData.role=="Doctor" && myData.status=="Approved"){
                        toast.success('Success');
                        navigate("/doctorhome");
                    }
                    else if( myData.role=="Doctor" && myData.status=="Not Approved"){
                        toast.success('Alert');
                        openPopup();
                    }   
                    else if(myData.role=="Patient"){
                        toast.success('Success');
                        navigate("/patienthome");
                    }
                        
                }
            }
            else if (data.status==400)
              toast.error("Invalid UserId or Password ")
            
        }).catch((err)=>{
            console.log(err.error)
            toast.error('Unable to login at this momenent');
        })
        }
    }



  return (
    <div className='background-clr'>
    <section className="text-center text-lg-start" id="section-item">
      <div className="container py-4">
        <div className="row g-0 align-items-center">

          <div className="col-lg-5 mb-6 mb-lg-0">
            <div className="card cascading-right">
              <div className="card-body p-4 shadow-5 text-center">
                <h2 className="fw-bold mb-4">Sign in now</h2>
                <form>
                  
                <div className="form-outline mb-4">
                    <input type="text" id="form3Example1" className="form-control" 
                    onChange={(event) => {
                        setUser({ ...user, userId: event.target.value });
                      }}/>
                    <label className="form-label" htmlFor="form3Example1">User ID</label>
                  </div>

                  <div className="form-outline mb-4">
                    <input type="password" id="form3Example4" className="form-control" 
                    onChange={(event) => {
                        setUser({ ...user, password: event.target.value });
                      }}/>
                    <label className="form-label" htmlFor="form3Example4">Password</label>
                  </div>

                </form>
                <button type="submit" className="btn btn-primary btn-block mb-3" onClick={login}>
                  Sign in
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

          <div className="col-lg-5 mb-6 mb-lg-0 signup-image">
            <img
              src={bg}
              className="rounded-4 shadow-4 image-fluid"
              alt=""
            />
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

export default Login;
