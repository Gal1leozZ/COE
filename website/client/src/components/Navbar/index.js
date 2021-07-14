import React, { useState, useEffect } from "react";
import { FaBars } from "react-icons/fa";
import { IconContext } from "react-icons/lib";
import { animateScroll as scroll} from 'react-scroll';
import {
  Nav,
  NavbarContainer,
  NavLogo,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLinks,
  NavBtn,
  NavBtnLink,
} from "./NavbarElements";

const Navbar = ({ toggle }) => {
  const [scrollNav, setScrollNav] = useState(false);

  const changeNav = () => {
    if (window.scrollY >= -80) {
      setScrollNav(true);
    } else {
      setScrollNav(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeNav);
  }, []);

  const toggleHome = () => {
      scroll.scrollToTop();
      // scroll.scrollTo(500);
  };

  return (
    <>
      <IconContext.Provider value={{ color: "white" }}>
        <Nav scrollNav={scrollNav}>
          <NavbarContainer>
            <NavLogo to="/" onClick={toggleHome}>Western Digital</NavLogo>
            {/* // Change to Actual Home */}
            <MobileIcon onClick={toggle}>
              <FaBars />
            </MobileIcon>
            <NavMenu>
              <NavItem>
                <NavLinks 
                to="home"
                // to={toggleHome}
                // onClick={toggleHome}
                smooth={true} 
                duration={500} 
                spy={true} 
                exact='true' 
                offset={-80}
                >
                    Home
                </NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks
                to="knowledge"
                smooth={true} 
                duration={500} 
                spy={true} 
                exact='true' 
                offset={-80}
                >
                    Knowledge
                </NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks 
                to="projects"
                smooth={true} 
                duration={500} 
                spy={true} 
                exact='true' 
                offset={-80}
                >Projects</NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks 
                to="about"
                smooth={true} 
                duration={500} 
                spy={true} 
                exact='true' 
                offset={-80}
                >
                    About
                </NavLinks>
              </NavItem>
            </NavMenu>
            <NavBtn>
              <NavBtnLink to="/report">Report</NavBtnLink>
            </NavBtn>
          </NavbarContainer>
        </Nav>
      </IconContext.Provider>
    </>
  );
};

export default Navbar;
