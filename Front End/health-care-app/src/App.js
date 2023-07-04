import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './App.css';
import Login from './Components/Login';
import Indexer from './Components/Indexer';
import Doctor from './Components/Doctor';
import Patient from './Components/Patient';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AdminHome from './Components/AdminHome';
import PatientHome from './Components/PatientHome';
import DoctorHome from './Components/DoctorHome';
import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import DoctorPopup from './Components/DoctorPopup';
import AdminProtected from './Components/Protected/AdminProtected'


function App() {

  var token;
  return (
    


    <BrowserRouter>
    <div >
      <ToastContainer theme='colored'></ToastContainer>

    
      {/* <Login/> */}
      {/* <Landing/> */}
     
      <Routes>
          <Route path='/' element={<Indexer/>}/> 
          {/* login */}
          <Route path='/login' element={<Login/>}/>
          {/* register */}
          <Route path='/patient'element={<Patient/>}/> 
          <Route path='/doctor'element={<Doctor/>}/> 
          {/* pages */}
          <Route path='/adminhome' element={
          <AdminProtected token={token}>
            <AdminHome/>
          </AdminProtected>
          }/>
          <Route path='/patienthome'element={<PatientHome/>}/>
          <Route path='/doctorhome'element={<DoctorHome/>}/>
          <Route path='/popup'element={<DoctorPopup/>}/>

      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
