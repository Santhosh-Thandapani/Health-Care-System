import React from 'react';
import { Link, useLocation } from 'react-router-dom';

function Landing() {

  const location = useLocation();
  const isLoginPage = location.pathname === '/login';

  return (
    <div>
      
      {!isLoginPage && <div><button>
        <Link to="/login">Login</Link>
      </button></div>}
      
    </div>
  );
}

export default Landing;
