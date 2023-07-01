import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './App.css';
import Home from './Components/Home';
import Login from './Components/Login';
import Indexer from './Components/Indexer';
import Doctor from './Components/Doctor';
import Patient from './Components/Patient';
import { BrowserRouter, Route, Routes } from 'react-router-dom';


function App() {
  return (
    <BrowserRouter>
    <div >
      {/* <Login/> */}
      {/* <Landing/> */}
     
      <Routes>
          <Route path='/patient'element={<Patient/>}/> 
          <Route path='/doctor'element={<Doctor/>}/> 
          <Route path='/home' element={<Home/>}/> 
          <Route path='/index' element={<Indexer/>}/> 
          <Route path='/login' element={<Login/>}/>
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
