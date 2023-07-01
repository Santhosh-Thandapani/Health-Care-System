import React, { useState } from "react";
import {
  CCollapse,
  CNavbarNav,
  CNavLink,
  CForm,
  CFormInput,
  CNavItem,
  CButton,
  CContainer,
  CNavbar,
  CNavbarToggler
} from "@coreui/react";
import { Link } from 'react-router-dom';


function Home() {
  const [visible, setVisible] = useState(false);
  return (
    <>
    
      <CNavbar expand="lg" colorScheme="light" className="bg-light">
        <CContainer fluid>
          <CNavbarToggler
            aria-label="Toggle navigation"
            aria-expanded={visible}
            onClick={() => setVisible(!visible)}
          />
          <a className="navbar-brand" href="/">Navbar</a> {/* Replaced CNavbarBrand with a regular <a> tag */}
          <CCollapse className="navbar-collapse" visible={visible}>
            <CNavbarNav className="me-auto mb-1 mb-lg-0">
              <CNavItem>
            {/* <CNavLink to="/login" active> Home </CNavLink> */}
                <Link className="nav-link" to="/login">Filter</Link>
              </CNavItem>
              <CNavItem>
                <CNavLink href="#">Link</CNavLink>
              </CNavItem>
              <CNavItem>
                <CNavLink href="#" disabled>
                  Disabled
                </CNavLink>
              </CNavItem>
            </CNavbarNav>
            <CForm className="d-flex">
              <CFormInput type="search" className="me-2" placeholder="Search" />
              <CButton type="submit" color="success" variant="outline">
                Search
              </CButton>
            </CForm>
          </CCollapse>
        </CContainer>
      </CNavbar>



      
    </>
  );
}

export default Home;
